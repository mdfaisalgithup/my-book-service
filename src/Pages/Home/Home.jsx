import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

  const title = "MyBookSwap"
  const title_des = "Our Best Book Service worldWide"
   useEffect(() => {
    document.title=title + " - " + title_des
   }, []);

  

const [dataService, setDataService] = useState([]);

const [seeDataService, setSeeDataService] = useState(4)

// http://localhost:5000/
// http://localhost:5000


useEffect(() => {

    fetch("http://localhost:5000/dataservice")
    .then(res => res.json())
    .then(data => setDataService(data))

}, [])




    return (
        <div> 

      
      <div className="relative bg-[#f5f5f5]">
      <img className="w-full opacity-20 xl:h-[800px] lg:h-[600px] md:h-[600px] h-[500px]" src="https://i.ibb.co/k3Q2gq8/Book-Mockup.jpg" alt="banner" />


      <div className="absolute top-0 w-full h-full">

    <div className="flex justify-center items-center w-full h-full">
  <div className="xl:w-1/2 lg:w-1/2 w-[80%] space-y-8 font-dosis">
  <h2 className="xl:text-[40px] lg:text-[40px] text-[20px] text-black text-center">Swap <span className="text-orange-400 font-bold">Stories</span>, Not Just Books</h2>
  <p className="font-normal text-[18px]">A book swap is a delightful and communal literary exchange that fosters a sense of connection, adventure, and the love of reading. This concept revolves around the idea of trading books with others, creating a vibrant ecosystem where avid readers can share their favorite stories, discover new authors, and breathe life into well-loved books.</p>
  <Link to="./service"><button className="bg-orange-400 block mx-auto hover:bg-orange-500 px-6 py-2 text-[20px] text-white rounded-md">Book See</button></Link>
  </div>
    </div>

      </div>


      </div>
        


<div className="lg:mx-[140px] xl:mx-[240px] md:mx-[50px] mx-[10px] my-8">
<div><h2 className="text-center font-dosis text-[20px] font-bold mb-2">Swap-Read-Enjoy </h2></div>
<div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[20px] xl:w-1/2 mx-auto">

{
  dataService.slice(0, seeDataService).map(data => {


return (
    <>
    


<div key={data._id} className="w-full rounded-md border-2 p-4">
    <img className="w-full rounded-md h-[400px]" src={data?.serviceImageUrl} alt="" />
 <div className="m-2 space-y-4">
    <h2 className="font-dosis font-semibold">Service Name: {data?.serviceName?.split(" ").slice(0, 3).map(d => d)}</h2>
<div>

<div>
<p><span className="font-dosis font-bold">Description: </span> <span className="text-[15px]">{data?.description.length > 100 ? data?.description.slice(0, 100) + "..." : data?.description}</span></p>
</div>

</div>

<div className="flex gap-x-2">
    <span className="font-bold">Service Price:</span> 
  <h2 className="font-medium">${data?.price}</h2>  
</div>
    
<Link to={`/single/${data?._id}`}><button className="bg-orange-500 px-6 py-2  font-dosis font-bold block mx-auto text-white rounded-md hover:bg-orange-600">View Detail</button></Link>

 </div>

<div className="flex gap-x-2 items-center justify-center mt-6">
<h2 className="font-dosis font-semibold">Service Provider:</h2>
 <div className="flex gap-x-1 items-center border-[1px] rounded-full  py-[1px]">
    <h2 className="font-dosis font-medium text-black mx-2">{ data?.yourName}</h2>
    <img className="w-[30px] rounded-full" src={data?.photoURL} alt="" />
 </div></div>



</div>



    
    
    </>
)


  })
}


</div>

<div className={dataService.length == seeDataService && "hidden"}>
<button onClick={() => setSeeDataService(dataService.length)} className="bg-orange-500 mx-auto text-white block my-2 px-6 py-2 font-dosis font-bold hover:bg-orange-500 rounded-md">Show All</button>
</div>

</div>


<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px] my-10">

<h2 className="text-center my-4 font-bold"></h2>
<div className='App'>
      <h1 className="text-center py-4 font-dosis font-bold" style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
      <span className="font-dosis font-bold">Customer Review</span>{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>

          <Typewriter
            words={['Jshon', 'Poland DAM', 'Dnald Sotom', 'Donald Jheen']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
         
          />
        </span>
      </h1>
    </div>
<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">


<div className="w-full border-[1px] rounded-md p-4 font-dosis">
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/Z8G7K50/istockphoto-1485546774-170667a.webp" alt=""/>
  <h2 className="text-center">Jshon</h2>
  <div className="justify-center flex">
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar></AiOutlineStar>
  </div>
  <p className="text-center ">Good Service!</p>
</div>


<div className="w-full border-[1px] rounded-md p-4 font-dosis">
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/Z8G7K50/istockphoto-1485546774-170667a.webp" alt=""/>
  <h2 className="text-center">Poland DAM</h2>
  <div className="justify-center flex">
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
 <AiOutlineStar className="text-orange-400"></AiOutlineStar>

  </div>
  <p className="text-center ">Awesome Service and Best Service</p>
</div>


<div className="w-full border-[1px] rounded-md p-4 font-dosis">
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/Z8G7K50/istockphoto-1485546774-170667a.webp" alt=""/>
  <h2 className="text-center">Dnald Sotom</h2>
  <div className="justify-center flex">
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar></AiOutlineStar>
  </div>
  <p className="text-center ">Awesome service, excellent!</p>
</div>

<div className="w-full border-[1px] rounded-md p-4 font-dosis">
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/Z8G7K50/istockphoto-1485546774-170667a.webp" alt=""/>
  <h2 className="text-center">Donald Jheen</h2>
  <div className="justify-center flex">
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  </div>
  <p className="text-center ">Enjoy Book!! Besr Service</p>
</div>




</div>



  
</div>





</div>
    );
};

export default Home;