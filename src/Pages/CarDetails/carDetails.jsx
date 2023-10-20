/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const CarDetails = () => {

    const [carDetails, setCarDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/car`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item._id === id);
            setCarDetails(filteredProducts[0]);
            setIsLoading(false);


        };

        fetchData();
    }, [id]);

    console.log(carDetails)
    const { name, photo, price, brand, type, short, rating2 } =
        carDetails || {};

        console.log(user)

        const email = user.email;

    const handleCart = () => {
     

        const newCart = { name,brand,type,price,short,photo, email}

        console.log(newCart);

        //send data to the server
        fetch('http://localhost:5000/cart', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newCart)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added in Cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })


    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${photo})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-zinc-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-teko">{name}</h1>
                        <p className="mb-5 text-lg font-outfit font-medium">{short}</p>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
                            <button className="btn bg-transparent text-white hover:bg-[#ED1D26]  border-2 border-red-500 hover:border-red-500 font-outfit">Price {price}</button>
                            <button className="btn bg-transparent text-white hover:bg-[#ED1D26]  border-2 border-red-500 hover:border-red-500 font-outfit">Brand {brand}</button>
                            <button className="btn bg-transparent text-white hover:bg-[#ED1D26]  border-2 border-red-500 hover:border-red-500 font-outfit">Type {type}</button>

                        </div>
                        <button onClick={handleCart} className="btn bg-transparent text-white hover:bg-[#ED1D26]  border-2 border-red-500 hover:border-red-500 font-outfit">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;