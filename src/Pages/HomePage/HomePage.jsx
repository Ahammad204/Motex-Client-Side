import Banner from "./Banner";
import Brand from "./Brand";
import Navbar from "./Navbar";


const HomePage = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-6">
                <Brand></Brand>
            </div>
        </div>
        
    );
};

export default HomePage;