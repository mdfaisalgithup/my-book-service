import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";



const Add_Service = () => {


    const title = "Add Service"
    const title_des = "Our Best Book Service worldWide"
     useEffect(() => {
      document.title=title + " - " + title_des
     }, []);

    const {userSee} = useContext(AuthContext)



const addServiceData = (e) => {
    e.preventDefault()

const form = e.target;
const serviceImageUrl = form.serviceImageUrl.value;
const serviceName = form.serviceName.value;
const yourName = form.yourName.value;
const yourEmail = form.yourEmail.value;
const price = form.price.value;
const serviceArea = form.serviceArea.value;
const description = form.description.value;
const photoURL = userSee?.photoURL

if(!serviceImageUrl || !serviceName || !yourName || !yourEmail || !price || !serviceArea || !description || !photoURL){

    Swal.fire("Look it's empty. Please fill in")
    return
    
}


const date = new Date()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const serviceDate = date.getMinutes() + "Minutes " + date.getHours() + "Hour " + months[date.getMonth()] + " " + date.getFullYear()


const addServiceAllData = {
    serviceDate,
    serviceImageUrl,
    serviceName,
    yourName,
    yourEmail,
    price,
    serviceArea,
    description,
    photoURL,
  
}


fetch("http://localhost:5000/", {
headers: {"content-type" : "application/json"},
method: "POST",
body: JSON.stringify(addServiceAllData)
})
.then(res => res.json())
.then(data => {

    console.log(data)
    if(data.insertedId){
   
        Swal.fire("Added Services Successfully")
        form.reset("")
    }
})

console.log(addServiceAllData)

}




    return (
        <div className="my-[50px]">

        <div className="xl:w-[90%] lg:w-[90%] md:w-[70%] mx-auto bg-[#25CCF7] rounded-md xl:p-20 lg:p-20 md:p-10 p-2 shadow-md">  
        <form onSubmit={addServiceData}>
   
   <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4">
  
        <div>
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="serviceImageUrl">Service Image URL:</label>
        <input placeholder="Enter Your Service Image URL:" className=" outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" name="serviceImageUrl" type="text" id="serviceImageUrl" />
        </div>
        
        <div>
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="serviceName"> Service Name:</label>
        <input placeholder="Enter Your Service Name:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="serviceName" type="text" id="serviceName" />
        </div>
        
        
        <div>
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="yourName">Your name:</label>
        <input className="outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" disabled defaultValue={userSee?.displayName} name="yourName" type="text" id="yourName" />
        </div>


        <div>
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="yourEmail">Your email:</label>
        <input className=" outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" disabled defaultValue={userSee?.email} name="yourEmail" type="email" id="yourEmail" />
        </div>


        <div>
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="price">Price:</label>
        <input placeholder="Enter Your Price:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="price" type="text" id="price" />
        </div>



         <div>
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="serviceArea">Service Area:</label>
        <input placeholder="Enter Your Service Area:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="serviceArea" type="text" id="serviceArea" />
        </div>
        </div>

        


       <div className="my-4">
        <label className="font-semibold text-white text-[18px] font-dosis" htmlFor="description">Description:</label>
        <textarea placeholder="Enter Your Description:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="description" type="text" id="description" />
        </div>
        
        <input className="px-6 rounded-md cursor-pointer font-dosis py-3 mx-auto block bg-orange-600 text-white text-[20px]" type="submit" value="Add Service" />
        
        </form>
        </div>
        
        
                </div>
    );
};

export default Add_Service;