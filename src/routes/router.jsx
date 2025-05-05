import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import MyProfile from "../pages/MyProfile";
import Errorpage from "../pages/Errorpage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
              path:'/' ,
              loader:()=>fetch('/Service.json'),
              hydrateFallbackElement:<span className="loading loading-dots loading-2xl"></span>,
              Component:Home, 
              
            },
            {
              path:'/about' ,
              Component:About, 
            },
            {
              path:'/myprofile' ,
              Component:MyProfile, 
            },
            
        ]
        
    }
])

export default router