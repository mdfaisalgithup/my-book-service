import { useEffect, useState } from "react";


import { Link } from "react-router-dom";


const Services = () => {
const [data, setData] = useState([])
const [search, setSearchData] = useState("");
const [showAll, setShow] = useState(4);


const searchBtn = (e) => {
  e.preventDefault()
const form = e.target;
const seachText = form.search.value;
setSearchData(seachText)

}
console.log(search)
useEffect(() => {
  
  fetch("http://localhost:5000/alladdservice")
  .then(d => d.json())
  .then(s => setData(s))

}, [showAll])






    return (
      <>
        <div className="xl:mx-[240px] lg:mx-[250px] mx-[50px]">
      
         <h2 className="text-center font-dosis font-bold my-4">Book Services Swap Search</h2>
   
            
          <div className="xl:w-1/2 lg:w-1/2 w-full mx-auto">
          <form onSubmit={searchBtn}>
           <input className="w-full border-[1px] font-dosis outline-none rounded-md p-5" type="text" name="search" placeholder="Search Your Book Service" />
            <input className="px-6 rounded-md block mx-auto my-2 py-2 bg-orange-400 hover:bg-orange-600 cursor-pointer font-bold text-white" type="submit" value="Search" />
            </form>
          </div>
        </div>
      

        <div className="lg:mx-[140px] xl:mx-[240px] md:mx-[50px] mx-[10px] my-8">
<div><h2 className="text-center font-dosis text-[20px] font-bold mb-2">Swap-Read-Enjoy </h2></div>
<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[20px] xl:w-1/2 mx-auto">

{
            data.filter((dataAll) => search == "" ? dataAll : dataAll.serviceName.toLowerCase().includes(search.toLowerCase())).slice(0, showAll).map(all => {


return (
    <>
    


<div className="w-full rounded-md border-2 p-4">
    <img className="w-full rounded-md h-[400px]" src={all?.serviceImageUrl} alt="" />
 <div className="m-2 space-y-4">
    <h2 className="font-dosis font-semibold">Service Name: {all?.serviceName && all?.serviceName.split(" ").slice(0, 3).map(d => d)}</h2>
<div>

<div>
<p><span className="font-dosis font-bold">Description: </span> <span className="text-[15px]">{all?.description.length > 100 ? all?.description.slice(0, 100) + "..." : all?.description}</span></p>
</div>

</div>

<div className="flex gap-x-2">
    <span className="font-bold">Service Price:</span>
  <h2 className="font-medium">${all?.price}</h2>  
</div>
    
<Link to={`/single/${all._id}`}><button className="bg-orange-500 px-6 py-2  font-dosis font-bold block mx-auto text-white rounded-md hover:bg-orange-600">View Detail</button></Link>

 </div>

<div className="flex gap-x-2 items-center justify-center mt-6">
<h2 className="font-dosis font-semibold">Service Provider:</h2>
 <div className="flex gap-x-1 items-center border-[1px] rounded-full  py-[1px]">
    <h2 className="font-dosis font-medium text-black mx-2">{ all?.yourName}</h2>
    <img className="w-[30px] rounded-full" src={all?.photoURL} alt="" />
 </div></div>



</div>



    
    
    </>
)


  })



}


</div>

   <button className={`bg-orange-400 text-white rounded-md hover:bg-orange-600 block mx-auto px-6 py-2 font-dosis font-bold ${data.length == showAll && "hidden"}`} onClick={() => setShow(data.length)}>Show All</button>

</div>
      
      </>
    );
};

export default Services;