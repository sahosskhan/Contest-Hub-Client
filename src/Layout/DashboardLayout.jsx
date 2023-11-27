import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import useCreator from "../Hooks/useCreator";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isCreator] = useCreator();

  const { user } = useAuth();

  const nameUser = user?.displayName;
  const slicedText = nameUser?.slice(0, 16);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn my-5 btn-error drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full bg-red-400 text-lg text-white">
            <li className="flex flex-row justify-center items-center  ">
              <div className="avatar">
                <div className="w-9 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>

              <span className=" text-xl">{slicedText}</span>
            </li>

            <h1 className="text-center text-black text-xl font-semibold my-2">
              User Navigation
            </h1>
            <li>
              <NavLink to="/">
                {" "}
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">
                <i className="fa-solid fa-circle-nodes"></i> Community
              </NavLink>
            </li>

            <div className="divider divider-neutral"></div>
            <h1 className="text-center text-black text-xl mb-3 font-semibold">
              User Action
            </h1>
            {isAdmin || isCreator || (
              <>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/">Participated Contest</NavLink>
                </li>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/">Winning Contest</NavLink>
                </li>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/">My Profile</NavLink>
                </li>
              </>
            )}

            {isCreator && (
              <>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/dashboard/add-contest">Add Contest</NavLink>
                </li>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/dashboard/added-contest">
                    Created Contest
                  </NavLink>
                </li>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/">Submitted Contest</NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/dashboard/manage-user">Manage User</NavLink>
                </li>
                <li className="hover:bg-black rounded-lg">
                  <NavLink to="/dashboard/manage-contest">
                    Manage Contest
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
