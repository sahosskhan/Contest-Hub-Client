import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Googlebtn from "../Shared/Googlebtn";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
          };
          console.log(userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created successfully");
              reset();
              Swal.fire({
                title: "Wow!",
                text: "Sign Up Successfully",
                icon: "success",
                confirmButtonText: "Okay",
              });
              navigate("/");
            }
        })
        .catch((error) => console.log(error));
    });
  });
}
  return (
    <div>
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex  justify-center mx-auto">
          <img
            className="w-auto h-14 "
            src="https://i.ibb.co/sFTY2DJ/image.png"
            alt=""
          />
        </div>

        <div className="flex  justify-center mx-auto mt-2">
          <h1 className="text-2xl font-bold">Welcome, Registration here!!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.name && <span className="text-red-600">Name is required</span>}
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Photo URL
            </label>
            <input
              type="text"
              {...register("photoURL",)}
              name="photoURL"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm text-gray-800 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             {errors.email && <span className="text-red-600">Email is required</span>}
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-gray-800 dark:text-gray-200">
                Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
          
        </form>

       
        <Googlebtn/>
        <Link to="/login">
          <p className="mt-4 text-lg text-center font-light  text-gray-600">
            {" "}
            Already have an account?{" "}
            <a href="#" className="font-medium text-red-400 hover:underline">
              Login
            </a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
