
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Page/Home";
import Root from "../Layout/Root";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import Community from "../Page/Community";
import AddPost from "../Component/Community/AddPost";
import PrivateRoute from './PrivateRoutes';
import Visualization from "../Page/Visualization";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUser from "../Page/Dashboard/Admin/ManageUser";
import AdminRoute from "./AdminRoute";
import CreatorRoute from "./CreatorRoute";
import AddContest from "../Page/Dashboard/Creator/AddContest";
import MyContest from "../Page/Dashboard/Creator/MyContest";
import ManageContest from "../Page/Dashboard/Admin/ManageContest";
import Error from "../Page/Error";
import UpdateContest from "../Page/Dashboard/Creator/UpdateContest";
import AllContest from "../Page/AllContest/AllContest";
import SingleContestPage from "../Page/AllContest/SingleContestPage";
import SingleRegister from "../Page/AllContest/SingleRegister";
import MyProfile from "../Page/Dashboard/User/MyProfile";

import UpdateProfile from "../Page/Dashboard/User/UpdateProfile";
import ManageRContest from "../Page/Dashboard/Creator/ManageRContest";
import RegisteredContest from './../Page/Dashboard/User/RegisteredContest';
import WinPage from './../Page/Dashboard/User/WinPage';
import Payment from "../Page/AllContest/Payment";





  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/visualization",
            element: <Visualization/>,
        },
        {
          path: "/allContest",
          element: <AllContest/>,
      },
        {
          path: "/singleContest/:id",
          element: <SingleContestPage/>,
          loader: ({params}) =>
          fetch(
            `https://contest-hub-server-beige.vercel.app/addedContestUser/${params?.id}`
          ),
      },

      {
        path: "/singleRegister/:id",
        element: <PrivateRoute><SingleRegister/></PrivateRoute> ,
        loader: ({params}) =>
        fetch(
          `https://contest-hub-server-beige.vercel.app/addedContestUser/${params?.id}`
        ),
    },

        {
            path: "/community",
            element: <PrivateRoute> <Community/></PrivateRoute>,
        },
        {
            path: "/addpost",
            element: <PrivateRoute> <AddPost/></PrivateRoute>,
        },
        {
          path: "/paymentGateway/:id",
          element: <PrivateRoute> <Payment/> </PrivateRoute>,
          loader: ({ params }) =>
          fetch(`https://contest-hub-server-beige.vercel.app/submited-contest/${params.id}`),
      },
  
      ]
    },
    {
      path: "/dashboard",
            element: <DashboardLayout/>,
            children:[
              {
                path: "/dashboard/manage-user",
                      element: <AdminRoute><ManageUser/></AdminRoute>  ,
              },
              {
                path: "/dashboard/manage-contest",
                      element: <AdminRoute><ManageContest/> </AdminRoute>  ,
              },
              {
                path: "/dashboard/add-contest",
                      element: <CreatorRoute> <AddContest/> </CreatorRoute> ,
              },
              {
                path: "/dashboard/added-contest",
                      element: <CreatorRoute> <MyContest/> </CreatorRoute> ,
              },
              {
                path: "/dashboard/register-contest",
                      element: <CreatorRoute> <ManageRContest/> </CreatorRoute> ,
              },
           
              {
                path: "/dashboard/updateContest/:id",
                      element: <CreatorRoute> <UpdateContest/> </CreatorRoute> ,
                      loader: ({params}) =>
        fetch(
          `https://contest-hub-server-beige.vercel.app/contest-update/${params?.id}`
        ),
              },
              {
                path: "/dashboard/my-profile",
                      element:  <MyProfile/>  ,
              },
              {
                path: "/dashboard/my-profile-edit/:id",
                      element:  <UpdateProfile/>  ,
                      loader: ({params}) =>
                      fetch(
                        `https://contest-hub-server-beige.vercel.app/user-list-update/${params?.id}`
                      )
              },
              {
                path: "/dashboard/my-register-contest",
                      element:  <RegisteredContest/>  ,
              },
              {
                path: "/dashboard/my-wining-contest",
                      element:  <WinPage/>  ,
              },
            ],
    },
    {
      path: "/login",
            element: <Login/>,
    },
    {
      path: "/registration",
            element: <Registration/>,
    }
  ]);
  