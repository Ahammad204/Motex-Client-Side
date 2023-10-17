import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";


const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">

                <Outlet></Outlet>
                <div className="mt-9">
                    <Footer></Footer>
                </div>

            </div>
        </div>
    );
};

export default MainLayouts;