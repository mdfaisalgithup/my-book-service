
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const My_Booking = () => {

    const title = "My Booking"
    const title_des = "Our Best Book Service worldWide"
     useEffect(() => {
      document.title=title + " - " + title_des
     }, []);

const mybook = useLoaderData()


const conform = (id) => {



    const anystatas = {status: "confirmed", id: id}


  // somealladdservicedata
  fetch("https://backend-five-tau.vercel.app/somealladdservicedata", {

    method: "PATCH",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(anystatas)

  })
  .then(res => res.json())
  .then(show => {

     
      if(show.modifiedCount > 0){
        Swal.fire("Service Conformed")
      }
  })
  




       }

    
       const deletebooking = (id) => {




fetch("https://backend-five-tau.vercel.app/bookingdelete", {

method: "DELETE",
headers: {"content-type" : "application/json"},
body: JSON.stringify({id})

})
.then()
.then(() => {
    Swal.fire("Deleted Service Success.")
})

       }


    return (
        <div>
            <h2 className="font-bold font-dosis my-2 text-center">My_Booking</h2>




            <div>
                {
                    mybook.map(data => {

                   


             
                        return(
                            <>
                            
                            <div key={data._id} className="border-[1px] rounded-md p-4 m-4">     
                            <h2>{data.serviceName}</h2>
                            <div className="flex justify-center gap-2">

                            

                            
                                <button onClick={data.status == "pending" || data.status == "inprogress" || data.status == "completed" ? null : () => conform(data._id)} className="bg-green-500 px-[10px] text-white font-bold rounded-md py-[4px]">{data.status ? data.status : "Conform"}</button>
                            

                            <div>
                            <button  onClick={() => deletebooking(data._id)} className="bg-red-500 py-[4px] px-[10px] text-white font-bold rounded-md">Delete</button>
                            </div>
                            </div>
                            </div>
                            </>
                        )


                    })
                }
            </div>
        </div>
    );
};

export default My_Booking;