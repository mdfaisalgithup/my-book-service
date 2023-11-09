import { NavLink, Outlet } from "react-router-dom";

import { BsPencilSquare } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import "./Dashboard.css"
import { useEffect } from "react";

const Dashboard = () => {

  const title = "Dashboard"
  const title_des = "Our Best Book Service worldWide"
   useEffect(() => {
    document.title=title + " - " + title_des
   }, []);
 


    return (

    <>



<div className="xl:mx-[240px] lg:mx-[100px] mx-[0px] my-2">


<div className="flex xl:flex-row lg:flex-row flex-col shadow-md border-[1px] rounded-md gap-x-5 font-dosis font-semibold">

<div className="flex flex-col xl:w-1/4 lg:w-1/4 w-full border-r-[1px]">


<NavLink to="addservice">
<div className="flex items-center rounded-tl-md gap-x-4 border-b-[1px] hover:bg-orange-400 p-5 hover:text-white">
  <BsPencilSquare className="text-[18px]"></BsPencilSquare>  
<h2>Add Service</h2>
</div>
</NavLink>

<NavLink  to="manageservice">
<div className="flex items-center gap-x-4 border-b-[1px] hover:bg-orange-400 p-5 hover:text-white">
<MdManageAccounts className="text-[20px]"></MdManageAccounts>
<h2>Manage Service</h2>
</div>
</NavLink>

 <NavLink  to="myschedules">
<div className="flex rounded-bl-md items-center gap-x-4 border-b-[1px] hover:bg-orange-400 p-5 hover:text-white">
<GrSchedules className="text-[18px] text-orange-600"></GrSchedules>
<h2>My Schedules</h2>  
</div>
</NavLink> 

</div>


<div className="w-full">
   <Outlet></Outlet> 
</div>

</div>







</div>

</>
    );
};

export default Dashboard;