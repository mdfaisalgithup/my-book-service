import { NavLink } from "react-router-dom";
import "./Navbar.css"

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

const {userSee, logOut} = useContext(AuthContext)
console.log(userSee)
const logOutgo = () => {

    logOut()
    .then(res => {
        console.log(res)
    })
    .catch()

}




    return (
        <>

<div className="flex xl:justify-between lg:justify-between xl:flex-row lg:flex-row flex-col items-center">
<div>
    <img className="w-[90px] shadow-md rounded-full" src="https://i.ibb.co/4FxhrJf/blank-book-on-circle-design-23.png" alt="logo" />
</div>

<div className="flex xl:flex-row lg:flex-row flex-col gap-x-8 items-center font-dosis font-bold text-[18px]">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/service">Services</NavLink>
        {
            userSee && <NavLink to="/dashboard">Dashboard</NavLink>
        }

        {
            userSee &&  <div className="flex border-[1px] items-center bg-orange-100 gap-1 rounded-full p-[5px]"><h2 className="text-[16px]">{userSee?.displayName}</h2> <img className="w-[30px] h-[30px] rounded-full" src={userSee?.photoURL} alt="" /></div>
        }
      
        {
            userSee ? <button type="button" onClick={logOutgo}> <h2>Logout</h2>
            </button> :  <NavLink to="/login">Login</NavLink>
        }


    



</div>


</div>
            
        </>
    );
};

export default Navbar;