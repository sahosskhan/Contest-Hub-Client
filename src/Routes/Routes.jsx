
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Page/Home";
import Root from "../Layout/Root";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import Community from "../Page/Community";
import AddPost from "../Component/Community/AddPost";
import PrivateRoute from './PrivateRoutes';
import Visualization from "../Page/Visualization";



  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
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
            path: "/community",
            element: <PrivateRoute> <Community/></PrivateRoute>,
        },
        {
            path: "/addpost",
            element: <PrivateRoute> <AddPost/></PrivateRoute>,
        },
  
      ]
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
  