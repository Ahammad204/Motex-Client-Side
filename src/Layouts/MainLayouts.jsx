import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from './../Pages/HomePage/Navbar';


const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
                <div className="mt-9">
                    <Footer></Footer>
                </div>

            </div>
        </div>
    );
};

export default MainLayouts;