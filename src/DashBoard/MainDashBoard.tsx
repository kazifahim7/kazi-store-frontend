import { Outlet } from "react-router-dom";
import Sidebar from "./Sideber";


const MainDashBoard = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <div>
                <Sidebar></Sidebar>
            </div>

            <div className="flex-1 p-8 md:ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainDashBoard;