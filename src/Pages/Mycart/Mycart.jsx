import { Link, useLoaderData } from "react-router-dom";
import MycartCard from "./MycartCard";
import { useState } from "react";


const Mycart = () => {

    const loaddedcarts = useLoaderData()

    const [carts, setCarts] = useState(loaddedcarts)

    return (
        <div>

            <h2 className="text-3xl font-extrabold text-center mb-6 mt-5">Your Purchase</h2> <hr />

            <div>

                {carts.length === 0 ? (
                    <div className="flex justify-center items-center mt-20">
                        <div className="hero w-2/3 h-2/3" >
                            <div className=""></div>
                            <div className="hero-content text-center ">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Hey Car Hunter</h1>
                                    <p className="mb-5 text-xl ">There is noting to show <br /> Do you Want to add a car</p>
                                    <Link to={"/"}><button className="btn text-white bg-[#ED1D26] hover:bg-[#ED1D26]">Buy Car</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        {carts.map((cart) => (
                            <MycartCard key={cart._id} cart={cart} carts={carts} setCarts={setCarts} />
                        ))}
                    </div>
                )}


            </div>
        </div>
    );
};

export default Mycart;