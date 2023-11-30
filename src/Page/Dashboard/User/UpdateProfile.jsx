
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProfile = () => {
    const navigate = useNavigate()
    const data = useLoaderData();
    const{name,image,_id} = data;
    const {
        register,
        handleSubmit,
      } = useForm()
      const onSubmit = (data) => {
 
const username = data.username;
const userimage = data.userimage;
const updateProfile = {username,userimage}
console.log(updateProfile);

fetch(
    `https://contest-hub-server-beige.vercel.app/update-user-list/${_id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Profile Update Successfully",
          icon: "success",
          confirmButtonText: "Done",
          
        }).then((result) => {
            if (result.isConfirmed) { 
              navigate('/dashboard/my-profile'); 
            }
          });
      }
    });

      }
    return (
        <div>
            <div className="w-full mt-2 max-w-4xl p-6 m-auto mx-auto bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
<form onSubmit={handleSubmit(onSubmit)}>
<div className="" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Name
            </label>
            <input  type="text" 
              name="username"
              {...register("username")}
              defaultValue={name}
              className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300  border-black "/>   
          </div>
          
          <div className="mt-5" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Image
            </label>
            <input  type="text" 
              name="userimage"
              {...register("userimage")}
             defaultValue={image}
              className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300  border-black "/>   
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-red-400 btn-block text-xl text-black"
            >
              Update Profile
            </button>
          </div>
</form>




            </div>
        </div>
    );
};

export default UpdateProfile;