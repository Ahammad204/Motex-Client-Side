import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Client from "./client";


const HomePage = () => {

    const brands = useLoaderData()

    return (
        <div>
           
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-6">
                <Brands brands={brands}></Brands>
            </div>
            <div className="mt-6">
                <AboutUs></AboutUs>
            </div>
            <div className="mt-10">
                <Client></Client>
            </div>
        </div>
        
    );
};

export default HomePage;