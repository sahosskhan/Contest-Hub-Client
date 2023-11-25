
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
             <div className="flex">
            <div className="w-64 min-h-screen bg-red-500 ">
                <ul className="menu p-4 text-xl text-white">
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">Participated Contest</NavLink>
                    </li>
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">Winning Contest</NavLink>
                    </li>
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">My Profile</NavLink>
                    </li>
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">Add Contest</NavLink>
                    </li>
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">Created Contest</NavLink>
                    </li >
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">Submitted Contest</NavLink>
                    </li >
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/dashboard/manage-user">Manage User</NavLink>
                    </li >
                    <li className="hover:bg-black rounded-lg">
                        <NavLink to="/">Manage Contest</NavLink>
                    </li >
                    <div className="divider divider-neutral"></div>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;