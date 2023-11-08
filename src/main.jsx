import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import('preline')

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootMain from './RootMain/RootMain';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Share/Login/Login';
import Registration from './Share/Registration/Registration';
import My_Booking from './Pages/Dashboard/My Schedules/My Booking/My_Booking';
import Pending from './Pages/Dashboard/My Schedules/Pending/Pending';
import My_Schedules from './Pages/Dashboard/My Schedules/My_Schedules';
import Add_Service from './Pages/Dashboard/Add Service/Add_Service';
import Manage_Service from './Pages/Dashboard/Manage Service/Manage_Service';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateProvider from './PrivateProvider/PrivateProvider';
import SingleService from './Pages/SingleService/SingleService';



const router = createBrowserRouter(
  
  [
  {
    path: "/",
    element: <RootMain></RootMain>,
    errorElement: <h2>Error Pages Back</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    {
      path: "/service",
      element: <Services></Services>
    },

    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/registration",
      element: <Registration></Registration>
    },
    {
   path: "/single/:id",
   element:  <PrivateProvider><SingleService></SingleService></PrivateProvider>,
   loader: ({params}) => fetch(`https://backend-five-tau.vercel.app/dataservice/${params.id}`)
    },

    {
      path: "/dashboard",
      element:<PrivateProvider> <Dashboard></Dashboard> </PrivateProvider>,
      children: [
        {
          path: "addservice", 
          element: <Add_Service></Add_Service>
        
        },

        {
          path: "manageservice", 
          element: <Manage_Service></Manage_Service>,
          loader: () => fetch("https://backend-five-tau.vercel.app/alladdservice"),
         
      
        },
        {
          path: "myschedules",
          element: <My_Schedules></My_Schedules>,
          children:[
            {
              path: "mybooking",
              element: <My_Booking></My_Booking>,
              loader: () => fetch("https://backend-five-tau.vercel.app/alladdservicedata")

             },
             {
              path: "pending",
              element: <Pending></Pending>,
              loader: () => fetch("https://backend-five-tau.vercel.app/alladdservicedata")
             }
        ]
        }
      
      
      ]
    }
 

    ]


  }




]



);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
