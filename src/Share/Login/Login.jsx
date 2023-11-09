import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";



const Login = () => {
    const {loginUser, googleSignFun} = useContext(AuthContext)

    const title = "Login"
  const title_des = "Our Best Book Service worldWide"
   useEffect(() => {
    document.title=title + " - " + title_des
   }, []);


const loginUsers = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

if(!email){
    Swal.fire("Email empty. please enter your email")
    return
}

if(!password){
    Swal.fire("Password empty. please enter your Password")
    return
}


loginUser(email, password)
.then()
.catch(error => {

Swal.fire(error.message)

})

}

const googleSign = () => {
    googleSignFun()
    .then()
    .catch()
  
}



    return (
<div className="lg:mx-[100px] xl:mx-[240px] mx-[0px] my-[50px]">

{/* .... */}

<div className="xl:w-1/2 lg:w-1/2 w-full mx-auto shadow-md bg-[#25CCF7] rounded-md xl:p-20 lg:p-20 p-5">  
<form onSubmit={loginUsers}>
<div className="my-4">
<label className="font-semibold text-white text-[18px] font-dosis" htmlFor="email">Email:</label>
<input placeholder="Enter Your Email:" className="border-[1px] outline-none font-medium font-dosis rounded-md my-2 w-full p-3" name="email" type="email" id="email" />
</div>


<div className="my-4">
<label className="font-semibold text-white text-[18px] font-dosis" htmlFor="password">Password:</label>
<input placeholder="Enter Your Password" className="border-[1px] outline-none font-medium font-dosis rounded-md my-2 w-full p-3" name="password" type="password" id="password" />
<div className="font-dosis font-semibold hover:underline"><Link className="hover:text-[#fdfdfd]" to="/registration">Are you want Register?</Link></div>
</div>


<input className="px-6 cursor-pointer rounded-md font-dosis py-3 bg-orange-600 mx-auto block text-white text-[20px]" type="submit" value="Log In" />

</form>

<div className="flex justify-center my-5">
<div onClick={googleSign} className="bg-[#f1f1f1] rounded-md p-8 hover:bg-purple-100 cursor-pointer">
<FcGoogle className="text-[60px] text-white mx-auto"></FcGoogle>
<h2 className="text-center font-bold text-black">Sig In</h2>
</div>
</div>

</div>

</div>
    );
};

export default Login;