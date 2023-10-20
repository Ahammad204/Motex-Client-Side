/* eslint-disable no-unused-vars */
 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCar = () => {
    const [Updated,setUpdated] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
        
    //Fetch car data by name
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`https://motex-server-gm0kszbfc-kazi-ahammad-ullahs-projects.vercel.app/car`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item._id === id);
            setUpdated(filteredProducts[0]);
            setIsLoading(false);

        };

        fetchData();
    }, [id]);

    console.log(Updated)

    // const {_id,name} = Updated || {};

    const handleUpdateCar = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const short = form.short.value;
        const rating2 = parseInt(form.rating2.value, 10);
        const photo = form.photo.value;

        const newCar = { name, brand, type, price, short, rating2, photo }

        console.log(newCar);

        //send data to the server
       fetch(`https://motex-server-gm0kszbfc-kazi-ahammad-ullahs-projects.vercel.app/car/${id}`, {

            method: 'PUT',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newCar)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            }) 

        // form.reset();

    }

   
    return (
        <div className=" p-10">
            <h2 className="text-3xl font-extrabold text-center mb-6">Update {Updated.name}</h2> <hr />
            <form onSubmit={handleUpdateCar} className="mt-4">

                {/* Name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={Updated.name} placeholder="Car name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">

                        <label className="label">
                            <span className="label-text">Car Brand</span>
                        </label>
                        <select name="brand" defaultValue={Updated.type} className="select w-full outline-2 outline-black">
                            <option disabled selected>Choose your car Brand</option>
                            <option>TOYOTA</option>
                            <option>FORD</option>
                            <option>BMW</option>
                            <option>MARCEDES_BENZ</option>
                            <option>TESLA</option>
                            <option>HONDA</option>
                        </select>
                    </div>
                </div>
                {/* Supplier and test */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Car Type</span>
                        </label>
                        <select name="type" className="select w-full ">
                            <option disabled selected>Choose your car type</option>
                            <option>Sports</option>
                            <option>SUV</option>
                            <option>Electric</option>
                            <option>Off Road</option>
                            <option>Classic</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={Updated.price} name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* Category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text" >Short Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="short" defaultValue={Updated.short} placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <div className="rating" >
                            <input type="radio" name="rating2" value="1" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating2" value="2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating2" value="3" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating2" value="4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating2" value="5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>

                {/* Form Photo Url */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" defaultValue={Updated.photo} name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input className="btn btn-block text-white bg-[#ED1D26] hover:bg-[#ED1D26] " type="submit" value="Update Car" />
            </form>
        </div>
    );
};

export default UpdateCar;