import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);

  const MakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now Admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const MakeCreator = (user) => {
    axiosSecure.patch(`/users/creator/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now creator`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const MakeUser = (user) => {
    axiosSecure.patch(`/users/user/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now user`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-5">
        <h1 className="lg:text-5xl font-semibold">Total User: {users.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="w-12 h-12 ">
                      <img className="rounded-md" src={user.image} alt="" />
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" && (
                      "Admin"
                    ) 
                    }
                       {user.role === "user" && (
                      "User"
                    ) 
                    }
                     {user.role === "creator" && (
                      "Creator"
                    ) 
                    }
                   
                    
                  </td>
                  
                  <td>
{user.role === "admin"&&(   <button
                        disabled
                        className="w-36 btn btn-sm text-white bg-red-400"
                      >
                        Already Admin
                      </button>)}
                      {user.role === "user"&&(   <button
                      onClick={() => MakeCreator(user)}
                        className="w-36 btn btn-sm mr-3 text-white bg-red-400"
                      >
                        Make Creator
                      </button>)}
                      {user.role === "user"&&(   <button
                       onClick={() => MakeAdmin(user)}
                        className="w-28 btn btn-sm text-white bg-red-400"
                      >
                        Make Admin
                      </button>)}
{user.role ==="creator"&&( 
<button  onClick={() => MakeAdmin(user)}
                        className="w-28 btn btn-sm mr-3 text-white bg-red-400">
                          Make Admin</button>)}


                          {user.role ==="creator"&&( 
<button  onClick={() => MakeUser(user)}
                        className="w-28 btn btn-sm text-white bg-red-400">
                          Make User</button>)}


                  </td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;