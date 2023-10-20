/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Mycart = () => {

    
    const [cartDetails, setCartDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { email } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/cart`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item.email === email);
            setCartDetails(filteredProducts[0]);
            setIsLoading(false);


        };

        fetchData();
    }, [email]);

    console.log(cartDetails)
    const { name, photo, price, brand, type, short, rating2 } =
        cartDetails || {};

        console.log(user)

    return (
        <div>
            <h1>Your cart {name}</h1>
        </div>
    );
};

export default Mycart;