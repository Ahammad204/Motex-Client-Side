import { useLoaderData } from "react-router-dom";
import MycartCard from "./MycartCard";
import { useState } from "react";


const Mycart = () => {

    const loaddedcarts = useLoaderData()

    const [carts,setCarts] = useState(loaddedcarts) 

    return (
        <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

            {

                
                
                carts?.map(cart => <MycartCard key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></MycartCard>)


            }


        </div>
    </div>
    );
};

export default Mycart;