import { Outlet } from "react-router-dom";
import Navbar from "../GlobalPage/Navbar";
import Footer from "../GlobalPage/Footer";


const Mainlayout = () => {
    return (
        <div>
            <div className="sticky w-full top-0 z-30">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;