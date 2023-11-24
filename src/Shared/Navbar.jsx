import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  const nav = <>
      <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a >Home</a></li></NavLink> 
      <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a >Contest</a></li></NavLink> 
   <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a>Timeline</a></li></NavLink> 
   <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a>Community</a></li></NavLink> 
  </>

const EndMenu =  <>
<Button variant="outlined" color="error">Login</Button>
</>
  

  return (
    <div>
      <div className="navbar  rounded-lg  bg-black  max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <i className="text-white text-xl fa-solid fa-bars"></i>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4  bg-black rounded-btn w-52">
      
  {nav}

      </ul>
    </div>
    <img className="lg:h-10 md:h-7 h-7 " src="https://i.ibb.co/sFTY2DJ/image.png" alt="" />
    <h1 className=" lg:text-xl md:text-lg text-lg ml-1 font-bold text-white ">ContestHub</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-2 ">

{nav}

    </ul>
  </div>
  <div className="navbar-end">
  {EndMenu}
  </div>
</div>
    </div>
  );
};

export default Navbar;