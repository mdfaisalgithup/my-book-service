import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";


import { Typewriter } from 'react-simple-typewriter'
import Swal from "sweetalert2";

const Home = () => {

  const title = "MyBookSwap"
  const title_des = "Our Best Book Service worldWide"
   useEffect(() => {
    document.title=title + " - " + title_des
   }, []);

  

const [dataService, setDataService] = useState([]);

const [seeDataService, setSeeDataService] = useState(4)

// https://backend-five-tau.vercel.app/
// https://backend-five-tau.vercel.app


useEffect(() => {

    fetch("https://backend-five-tau.vercel.app/dataservice")
    .then(res => res.json())
    .then(data => setDataService(data))

}, [])


const messageBox = (e) => {
  e.preventDefault()

  Swal.fire("Message Submit Successfully. Your Check Your email")
}

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
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/k8VdCQV/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt=""/>
  <h2 className="text-center">Poland DAM</h2>
  <div className="justify-center flex">
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
 <AiOutlineStar className="text-orange-400"></AiOutlineStar>

  </div>
  <p className="text-center ">Awesome Service and Best Service</p>
</div>


<div className="w-full border-[1px] rounded-md p-4 font-dosis">
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/Ld9ZMjK/download.jpg" alt=""/>
  <h2 className="text-center">Dnald Sotom</h2>
  <div className="justify-center flex">
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar className="text-orange-400"></AiOutlineStar>
  <AiOutlineStar></AiOutlineStar>
  </div>
  <p className="text-center ">Awesome service, excellent!</p>
</div>

<div className="w-full border-[1px] rounded-md p-4 font-dosis">
<img className="w-[50px] mx-auto object-cover h-[50px] rounded-full" src="https://i.ibb.co/TRv6Qjr/images.jpg" alt=""/>
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


<div>
</div>



<div className="xl:mx-[240px] lg:mx-[100px] my-4 mx-[10px]">
<div>

<div className='App'>
      <h1 className="text-center py-4 font-dosis font-bold" style={{ paddingTop: '4rem', margin: 'auto 0', fontWeight: 'normal' }}>
      <span className="font-dosis font-bold"></span>{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>

          <Typewriter
            words={['Subscribe Now!']}
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


<p className="text-center font-dosis font-normal">Write details about your book swap.</p>
<form onSubmit={messageBox}>
<div className="xl:w-1/2 lg:w-1/2 w-full mx-auto">
<input className="border-[1px] rounded-md p-4 outline-none my-2 w-full" type="text" placeholder="Enter Your Email" name="email" />
<textarea placeholder="Write Your Message" className="border-[1px] rounded-md outline-none p-4 my-2 w-full" name="message" cols="30" rows="10"></textarea>
<input className="mx-auto block cursor-pointer px-6 rounded-md text-white bg-orange-500 py-2 font-dosis font-bold" type="submit" value="Send" />
</div>
</form>
</div>
</div>


</div>
    );
};

export default Home;