import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Brand from "./Brand";
import Client from "./client";


const HomePage = () => {
    return (
        <div>
           
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-6">
                <Brand></Brand>
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