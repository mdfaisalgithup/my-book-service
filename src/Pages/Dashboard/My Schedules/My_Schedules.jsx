import { NavLink, Outlet } from "react-router-dom";

import "./My_Schedules.css"

import { AiOutlineShopping } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";
const My_Schedules = () => {
    return (
        <div>


        
<div className="flex xl:flex-row lg:flex-row flex-col">

<div className="xl:w-1/5 lg:w-1/5 w-max xl:ml-0 lg:ml-0 md:ml-0 ml-10">
<NavLink to="mybooking">
<div className="hover:bg-orange-400 hover:text-white px-5 py-3">
<div className="flex gap-x-4 items-center">
<AiOutlineShopping className="text-[20px]"></AiOutlineShopping>

<h2>My Booking</h2>


</div>
</div>  
</NavLink>

<NavLink to="pending">
<div className="hover:bg-orange-400 hover:text-white px-5 py-3">
<div className="flex gap-x-4 items-center">
<MdOutlinePendingActions className="text-[20px]"></MdOutlinePendingActions>
<h2>Pending</h2>
</div>
</div>
</NavLink>




</div>

<div>
<Outlet></Outlet>    
</div>
</div>


</div>
    );
};

export default My_Schedules;