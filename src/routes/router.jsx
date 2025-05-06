import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import MyProfile from "../pages/MyProfile";
import Errorpage from "../pages/Errorpage";
import DetailsPage from "../components/DetailsPage";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";
import ForgotPage from "../pages/forgotPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        loader: () => fetch('/Service.json'),
        hydrateFallbackElement: <Loading></Loading>,
        Component: Home,

      },
      {
        path: '/myprofile',
       element:<PrivateRoute>
        <MyProfile></MyProfile>
       </PrivateRoute>
      },


      {
        path: '/details/:id',
        loader: () => fetch('/Service.json'),
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
      },


    ]

  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
      {
        path: '/auth/forget',
        Component: ForgotPage,
      }
    ]
  }
])

export default router