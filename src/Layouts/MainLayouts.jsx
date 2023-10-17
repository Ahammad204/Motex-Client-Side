import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">

                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default MainLayouts;