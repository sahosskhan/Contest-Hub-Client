import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";



const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'> 
            <Navbar/>
          <Outlet/>  
        </div>
    );
};

export default Root;