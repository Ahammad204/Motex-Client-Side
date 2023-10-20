import { useLoaderData } from "react-router-dom";
import MycartCard from "./MycartCard";


const Mycart = () => {

    const carts = useLoaderData()

    return (
        <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

            {

                
                
                carts?.map(cart => <MycartCard key={cart._id} cart={cart}></MycartCard>)


            }


        </div>
    </div>
    );
};

export default Mycart;