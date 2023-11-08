import { Outlet } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";


const RootMain = () => {


    return (
        <>
        <div className="border-b-[1px]"><Header></Header></div>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default RootMain;