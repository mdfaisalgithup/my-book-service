
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
const auth = getAuth(app)
const Registration = () => {
  const title = "Registration"
  const title_des = "Our Best Book Service worldWide"
   useEffect(() => {
    document.title=title + " - " + title_des
   }, []);
    
    const {Register} = useContext(AuthContext);

    const RegisterUser = (e) => {

        e.preventDefault()
        const form = e.target;


        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

   if(!fullName || !email || !password || !photoUrl){

 Swal.fire("Please Form Fill Up now")
    return
   }
        
        Register(email, password)
        .then(res => {

      if(res.user){
        const user = auth.currentUser;
        updateProfile(user, {
         displayName: fullName,
         photoURL: photoUrl,
        
        })
        .then(() => {
            Swal.fire("Create register Successfully.")
            console.log(res.user)
        })
        .catch(error =>  Swal.fire(error))
      }

    

        })
        .catch(error => {
            
            Swal.fire(error.message)
        })
    
    }




    return (
        <div className="xl:mx-[240px] lg:mx-[100px] mx-[0px] my-[50px]">



        <div className="xl:w-1/2 lg:w-1/2 w-full mx-auto bg-[#25CCF7] rounded-md xl:p-20 lg:p-20 p-5 shadow-md">  


        <form onSubmit={RegisterUser}>
        <div className="my-4">
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="fullName">Full Name:</label>
        <input placeholder="Enter Your Name:" className=" outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" name="fullName" type="text" id="fullName" />
        </div>
        
        <div className="my-4">
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="email">Email:</label>
        <input placeholder="Enter Your Email:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="email" type="email" id="email" />
        </div>
        
        
        <div className="my-4">
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="password">Password:</label>
        <input placeholder="Enter Your Password" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="password" type="password" id="password" />


        <div className="my-4">
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="photoUrl">Your Photo URL:</label>
        <input placeholder="Photo URL:" className=" outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" name="photoUrl" type="text" id="photoUrl" />
        </div>


        <div className="font-dosis font-semibold hover:underline"><Link className="hover:text-[#fdfdfd]" to="/login">Are You want login?</Link></div>
        </div>
        
        <input className="px-6 rounded-md cursor-pointer font-dosis py-3 mx-auto block bg-orange-600 text-white text-[20px]" type="submit" value="Register" />
        
        </form>
        </div>
        
        
                </div>
    );
};

export default Registration;