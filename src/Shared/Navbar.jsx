import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../Hooks/useAuth";
import DashboardIcon from '@mui/icons-material/Dashboard';
import useUser from "../Hooks/userUser";

const Navbar = () => {
const {user,logOut} = useAuth();

const{userList} =useUser();

const FilteruserList = userList.filter(item => item.email === user?.email);
const nameFilter = FilteruserList.map(user => user.name);
const imageFilter = FilteruserList.map(user => user.image);
const handleLogOut = () => {
  logOut()
  .then(() =>{})
  .catch(error => console.log(error));
}
  const nav = <>
      <NavLink to="/"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a >Home</a></li></NavLink> 
      <NavLink to="/allContest"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a >Contest</a></li></NavLink> 
   <NavLink to="/visualization"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a>Visualization</a></li></NavLink> 
   <NavLink to="/community"> <li className="lg:text-lg lg:font-bold font-semibold hover:text-red-600 uppercase text-white"> <a>Community</a></li></NavLink> 
  </>

const EndMenu =  <>
{user?(<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={imageFilter} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li className="mt-2">  
          <a className="">
          <div className="avatar online">
  <div className="w-7 rounded-full">
    <img src={imageFilter}  />
  </div>
</div>{nameFilter}
          </a>
        </li>
  <NavLink to='/dashboard'><li className="mt-2 hover:bg-red-200 "><a> <DashboardIcon/> Dashboard</a></li></NavLink>
        <li onClick={handleLogOut} className="btn mt-3 ml-3 btn-xs  bg-red-500 py-4 w-[70%]"><a>Logout</a></li>
      </ul>
    </div>) 
:(
<NavLink to='login'><Button variant="outlined"  color="error"> Login</Button></NavLink>
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