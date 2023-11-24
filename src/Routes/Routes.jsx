
import {createBrowserRouter,} from "react-router-dom";
import Home from "../Page/Home";
import Root from "../Layout/Root";



  
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
  ]);
  