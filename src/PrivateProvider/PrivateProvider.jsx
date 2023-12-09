import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";




const PrivateProvider = ({children}) => {

    const {userSee, loading} = useContext(AuthContext)


  if(loading){

    return <>
  <div className="mx-auto w-max">
  <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
    <div className="sr-only">Loading...</div>
  </div>
  </div>
    </>
  }


  if(userSee){

    return children
  }

return <Navigate state={location.pathname} to="/login" replace></Navigate>


};

export default PrivateProvider;