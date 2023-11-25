import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {
const {user,logOut} = useAuth();
const handleLogOut = () => {
  logOut()
  .then(() =>{})
  .catch(error => console.log(error));
}
  const nav = <>
      <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a >Home</a></li></NavLink> 
      <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a >Contest</a></li></NavLink> 
   <NavLink to="/visualization"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a>Visualization</a></li></NavLink> 
   <NavLink to="/community"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a>Community</a></li></NavLink> 
  </>

const EndMenu =  <>
{user?(<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user?.displayName}
          </a>
        </li>
        <li><a>Dashboard</a></li>
        <li onClick={handleLogOut} className="btn btn-xs bg-red-500 py-4 w-1/2"><a>Logout</a></li>
      </ul>
    </div>) 
:(
<NavLink to='login'><Button variant="outlined" color="error">Login</Button></NavLink>
)}





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
    <h1 className=" lg:text-xl md:text-lg text-lg ml-1 font-bold text-white ">Contest Hub</h1>
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