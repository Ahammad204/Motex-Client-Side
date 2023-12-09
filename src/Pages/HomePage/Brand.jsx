/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({ brand }) => {

    const { _id, name, photo } = brand || {}
    console.log(name)

    return (
        <div>


            <Link to={`/products/${name}`}>
                {/* Brands */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="flex-grow">
                        <img src={photo} alt={name} className="rounded-xl w-72 h-60" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title font-extrabold text-3xl">{name}</h2>

                    </div>
                </div>

            </Link>

        </div>

    );
};

export default Brand;