import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";


const Manage_Service = () => {
const navigate = useNavigate()
const loacation = useLocation()
const [update, setUpdate] = useState() 

const [deletesee, setdelete] = useState()

const [manageServiceAdd, setmanageServiceAdd] = useState([])

// const manageServiceAdd = useLoaderData()

// https://my-book-service.vercel.app/
const url = "https://my-book-service.vercel.app/alladdservice";

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setmanageServiceAdd(data))
}, [update, deletesee])



const title = "Manage Service"
const title_des = "Our Best Book Service worldWide"
 useEffect(() => {
  document.title=title + " - " + title_des
 }, []);


const deleteBtn = (id) => {
  
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          
            fetch(`https://my-book-service.vercel.app/deleteservice/${id}`, {

     method: "DELETE"
    })
    .then(res => res.json())
    .then((d) => {
       if(d.deletedCount > 0){

        // const reaming = manageServiceAdd.filter(booking => booking._id !== id)  

        // setmanageServiceAdd(reaming)
        setdelete(true)
     
       }

    
     

    })
        }
      });


    
}

const updateServices = (e) => {
    e.preventDefault()

    const form = e.target;
    const serviceName = form.serviceName.value;
    const yourName = form.yourName.value;
 const yourEmail = form.yourEmail.value;
    const price = form.price.value;

     const serviceArea = form.serviceArea.value;
const serviceImageUrl = form.serviceImageUrl.value;
const description = form.description.value;

    

// updated
const updateSer = {serviceName, id: update.id, yourName, yourEmail, price, serviceArea, serviceImageUrl, description}

console.log(update.id)

Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      
fetch("https://my-book-service.vercel.app/servicesupdated", {

     method: "PATCH",
     headers: { "content-type" : "application/json"},
     body: JSON.stringify(updateSer)

    })
    .then(res => res.json())
    .then(() => {

      

    



        const reamings = manageServiceAdd.filter(d => d._id !== update.id)
        const updates = manageServiceAdd.find(d => d._id == update.id)
        updates.yourEmail
        
         setmanageServiceAdd([updates, ...reamings])
        
        
// console.log([[updates], ...reamings])


       
    })

    setUpdate(false)
        
    }

   setUpdate(false)

  });





}



    
    return (

      
 <div>
    {
        update ?
        
        
<div className="my-4">

<div className="xl:w-1/2 lg:w-1/2 w-full">

<form onSubmit={updateServices}>

       <div>
       <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="serviceImageUrl">Service Image URL:</label>
        <input placeholder="Enter Your Service Image URL:" className=" outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" defaultValue={update?.serviceImageUrl} name="serviceImageUrl" type="text" id="serviceImageUrl" />
        </div>
        
        <div>
        <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="serviceName"> Service Name:</label>
        <input defaultValue={update?.serviceName} placeholder="Enter Your Service Name:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="serviceName" type="text" id="serviceName" />
        </div>

      
        
        <div>
        <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="yourName">Your name:</label>
        <input className="outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" defaultValue={update?.yourName} name="yourName" type="text" id="yourName" />
        </div>


        <div>
        <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="yourEmail">Your email:</label>
        <input className=" outline-none border-[1px] font-medium font-dosis my-2 rounded-md w-full p-3" defaultValue={update?.yourEmail} name="yourEmail" type="email" id="yourEmail" />
        </div> 


        <div>
        <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="price">Price:</label>
        <input defaultValue={update?.price} placeholder="Enter Your Price:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="price" type="text" id="price" />
        </div>



         <div>
        <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="serviceArea">Service Area:</label>
        <input defaultValue={update?.serviceArea} placeholder="Enter Your Service Area:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="serviceArea" type="text" id="serviceArea" />
        </div>
    
        <div>
        <label className="font-semibold text-black text-[18px] font-dosis" htmlFor="description"> Service Description:</label>

        <textarea defaultValue={update?.description} placeholder="Enter Your Description:" className=" outline-none border-[1px] font-medium font-dosis rounded-md my-2 w-full p-3" name="description" type="text" id="description" />
        </div>



<input className="px-6 rounded-md cursor-pointer font-dosis py-3 mx-auto block bg-orange-600 text-white text-[20px]" type="submit" value="Update Service" />


</form>

{

    update == false && navigate(loacation.pathname)
}

</div>
    </div>
        
        
        : <div>
        <h2 className="text-center font-dosis font-bold my-4">Manage Service Updated</h2>
                    {
                        manageServiceAdd.map(manageService => {
        
        
                            return (
                                <>
                                
                                <div className=" rounded-md" key={manageService._id}>
                                <div className="border-[1px] xl:w-[400px] lg:w-[400px] mx-auto my-4">
                                <img className="w-[100px] mx-auto h-[120px] p-4" src={manageService?.serviceImageUrl} alt="logo" />
                                <h2 className="text-center">{manageService.serviceName}</h2>
                                <div className="flex justify-center gap-x-4 my-2">
                                    <button onClick={() => deleteBtn(manageService._id)} className="bg-red-500 px-4 py-2 font-dosis text-white rounded-md font-bold hover:bg-red-600">Delete</button>
        
                                
                                <button onClick={() => setUpdate({ id: manageService._id, serviceName: manageService.serviceName, serviceImageUrl: manageService?.serviceImageUrl, description: manageService.description, price: manageService.price, serviceArea: manageService.serviceArea, photoURL: manageService.photoURL, yourEmail: manageService.yourEmail, yourName: manageService.yourName})} className="bg-green-500 px-4 py-2 font-dosis text-white rounded-md font-bold hover:bg-green-600">Update</button>
                            
                                </div>
                                </div>
                                </div>
                                
                                </>
                            )
                        })
                    }
        
                <div>
        
                 
                </div>
        
        </div>
    }     


            
        </div>






    );
};

export default Manage_Service;