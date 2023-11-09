import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Pending = () => {

const [id, setId] = useState()
const allData = useLoaderData()

const title = "Pending"
const title_des = "Our Best Book Service worldWide"
 useEffect(() => {
  document.title=title + " - " + title_des
 }, []);

const chnageStatus = (e) => {

e.preventDefault();
const form = e.target;
const statusInfo = form.statusInfo.value;

const information = {statusInfo, id}


fetch("https://backend-five-tau.vercel.app/statusupdateded", {


method: "PATCH",
headers: {"content-type" : "application/json"},
body: JSON.stringify(information)
})
.then(res => res.json())
.then(see => {

    if(see.modifiedCount > 0){
        Swal.fire("Updated status successfully")
    }
})



}

    return (
        <div>
            {/* <h2>Pending</h2> */}
            {
                allData.filter(d => d.status == "pending" || d.status == "inprogress" || d.status == "completed" ? d.status : "pending").map(d => {

                    return (
                        <>
  <div key={d._id} className="border-2 p-5 m-4 rounded-md">
<h2>{d.serviceName}</h2>




<form onSubmit={chnageStatus}>

    <div className="border-[1px] px-[5px] py-[5px] w-max ">
    <label htmlFor="statusInfo">Status:</label> 
<select className="outline-none" name="statusInfo" id="statusInfo">
  <option value="pending">{d.status == "pending" || d.status == "inprogress" || d.status == "completed" ? d.status : "pending"  }</option>
  <option value="pending">Pending</option>
  <option value="inprogress">In Progress</option>
  <option value="completed">Completed</option>
</select>
    </div>

<div className="my-2">
<input onClick={() => setId(d._id)} className="bg-orange-500 hover:bg-orange-600 px-5 cursor-pointer py-2 font-dosis font-bold text-white rounded-md" type="submit" value="Update Status" />
</div>
</form>




                        </div>
                        
                        </>
                    )
                })
            }
        </div>
    );
};

export default Pending;