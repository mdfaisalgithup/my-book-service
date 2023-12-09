import { useEffect, useState } from "react";


import { Link, useLoaderData } from "react-router-dom";


const Services = () => {
// const [data, setData] = useState([])
const [search, setSearch] = useState("")
const [dataShow, setDataShow] = useState(4)




const title = "Service"
const title_des = "Our Best Book Service worldWide"
 useEffect(() => {
  document.title=title + " - " + title_des
 }, []);

const searchBtn = (e) => {
  e.preventDefault()
const form = e.target;
const searchtext = form.search.value;
setSearch(searchtext.toLowerCase())

}


const data = useLoaderData()
// useEffect(() => {
  
//   fetch("https://my-book-service.vercel.app/alladdservice")
//   .then(d => d.json())
//   .then(s => setData(s))

// }, [])

console.log(data)

const d = data.filter(d => d.serviceName.toLowerCase().includes(search)).slice(0, dataShow)



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
 d.map(all => {

    return (
        <>
        
  
    <div key={all._id} className="w-full rounded-md border-2 p-4">
        <img className="w-full rounded-md h-[400px]" src={all?.serviceImageUrl} alt="" />
     <div className="m-2 space-y-4">
        <h2 className="font-dosis font-semibold">Service Name: {all?.serviceName}</h2>
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

   <button onClick={() => setDataShow(data.length)} className={`bg-orange-400 text-white rounded-md hover:bg-orange-600 block mx-auto px-6 py-2 font-dosis font-bold ${dataShow == data.length && 'hidden'}`}>Show All</button>

</div>
      
      </>
    );
};

export default Services;