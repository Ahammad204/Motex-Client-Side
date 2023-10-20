/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MycartCard = ({ cart }) => {

    const { name, brand, type, price,photo } = cart || {}
    console.log(name, brand, type, price)

    return (
        <div>

            <div className="card bg-base-100 shadow-xl ">
                <figure><img className="w-full h-96" src={photo} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>


                    <div className="card-actions justify-end">
                        <p className="text-lg font-outfit font-medium">Price: {price}</p>
                        <Link to={`/`}>
                            <button className="btn text-white border-none bg-gradient-to-r from-[#1C1F38] to-[#42D0D9]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MycartCard;