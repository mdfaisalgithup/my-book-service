import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SingleService = () => {

    const {userSee} = useContext(AuthContext)

const data = useLoaderData()
const {description, price, serviceArea, photoURL, serviceImageUrl, serviceName, yourEmail, yourName } = data;
console.log(data)


const ok = () => {

const addedBookService = {
    description, price, serviceArea, photoURL, serviceImageUrl, serviceName, yourEmail, yourName
}
  fetch("https://backend-five-tau.vercel.app/addservice", {
method: "POST",
headers: { "content-type" : "application/json"},
body: JSON.stringify(addedBookService)


  })  
  .then(res => res.json())
  .then(see => console.log(see))

    console.log(addedBookService)
}

const addBook = () => {




    Swal.fire({  
         
        imageUrl: `${serviceImageUrl}`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        title: "Are you sure?", 
       


        html: `<div>
        <h2><span style="font-weight: bold">Service Name:</span> ${serviceName}</h2>

        <h2><span style="font-weight: bold">Service Provider email:</span> ${yourEmail}</h2>

        <h2><span style="font-weight: bold">User email:</span> ${userSee.email}</h2>
        
        <h2><span style="font-weight: bold">User email:</span> ${userSee.email}</h2>
        
        
        </div>`,

  





  
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Purchase this Service"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            {
            title: `${serviceName}`,
            text: "Add Book Swap Service Successfully",
            icon: "success", 
     
          });

          ok()

        }
      });
}










    return (
        <div className="mx-[240px] my-10">
            <div className="w-1/2 mx-auto border-[1px] rounded-md">
                <img className="w-[250px] rounded-[20px] mx-auto p-2" src={serviceImageUrl} alt="" />


           


           <div className="p-4">
            <h2 className="font-dosis font-bold">Service Provider Details:</h2>

            <div>
                <span className="font-bold font-dosis">Service Name: </span>
                <span className="font-dosis">{serviceName}</span>      
             
            </div>
            <div>
            <span className="font-dosis"><span className="font-bold">Price: </span>$ {price}</span>
            </div>

              <div>
                <span className="font-bold font-dosis">Service Description: </span>
                <span className="font-dosis">{description}</span>
            </div>

            <button onClick={addBook} className="bg-orange-500 px-6 py-2  font-dosis font-bold block mx-auto text-white rounded-md hover:bg-orange-600">Add Book</button>

           </div>

           <div className=" border-t-[1px] my-10 p-4">
           <h2 className="font-dosis font-bold">Service Provider Information:</h2>
              <div className="flex gap-x-2 items-center w-fit border-2 py-[3px] rounded-full"> 
                 <img className="w-[30px] rounded-full" src={photoURL} alt="image" />
                 <span className="pr-2 font-dosis">{yourName}</span>
            </div>  
            <p><span className="font-dosis font-bold">Service Provider Location:</span> {serviceArea}
           </p>
           </div>
              
                  
            </div>
        </div>
    );
};

export default SingleService;