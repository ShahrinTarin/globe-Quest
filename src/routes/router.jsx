import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import MyProfile from "../pages/MyProfile";
import Errorpage from "../pages/Errorpage";
import DetailsPage from "../components/DetailsPage";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/Service.json'),
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>,
        Component: Home,

      },
      {
        path: '/myprofile',
        Component: MyProfile,
      },
      

      {
        path: '/details/:id',
        loader: () => fetch('/Service.json'),
        hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>,
        Component: DetailsPage,
      },


    ]

  },
  {
    path: '/about',
    Component: About,
  },
  {
    path:'/auth',
   Component:AuthLayout,
   children:[
    {
      path: '/auth/login',
      Component:Login ,
    },
    {
      path: '/auth/logout',
      Component:Logout ,
    }
   ]
  }
])

export default router