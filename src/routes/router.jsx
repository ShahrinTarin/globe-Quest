import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
              path:'/' ,
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