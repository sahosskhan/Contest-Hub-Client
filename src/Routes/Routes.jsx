
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Page/Home";
import Root from "../Layout/Root";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";



  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element: <Home/>,
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
  