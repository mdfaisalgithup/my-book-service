import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";

 

const RootMain = () => {

const navigation = useNavigation()
  
    return (
        <>
        <div className="border-b-[1px]"><Header></Header></div>
  
  {
    navigation.state === 'loading' ? <> <div className="flex justify-center w-full"><div className="animate-spin my-6 inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
    <span className="sr-only">Loading...</span> 
  </div></div> </> :  <Outlet></Outlet>

  }
               
  
        <Footer></Footer>
        </>
    );
};

export default RootMain;