
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Error404 = () => {
    
const error404 = "404"
const errorNotFound = "Not Found"
 useEffect(() => {
  document.title=error404 + " - " + errorNotFound
 }, []);

    


    return (
        <div className="h-[100vh] flex justify-center items-center">
           <div>
           <h2 className="font-dosis font-extrabold text-[80px] text-center">{error404}</h2>

           <div>
           <h2 className="font-extrabold font-dosis text-[30px] text-center">{errorNotFound}</h2>
           </div>
           <p>Make sure you have entered the correct URL. Typos or incorrect capitalization can lead to a 404 error.</p>

           <Link to="/"><button className="px-6 py-2 bg-[#353535] my-2 hover:bg-[#252525] block mx-auto text-white font-bold rounded-md">Back Now</button></Link>

           </div>
        </div>
    );
};

export default Error404;