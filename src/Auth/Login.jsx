import { useForm } from "react-hook-form";
import { Link,  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Googlebtn from "../Shared/Googlebtn";



const Login = () => {
    const [error, setError] = useState("");
    const { signIn,  loading,} = useContext(AuthContext);
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (loading) {
        return (
          <span className="lg:mx-[600px] mx-[200px] my-[100px] loading loading-infinity loading-lg"></span>
        );
      }



      
    const onSubmit = data => {
        console.log(data);
        console.log(data.email);
        console.log(data.password);
        signIn(data.email, data.password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            title: "Successfully!",
            text: "You login with account ",
            icon: "success",
            confirmButtonText: "Done",
          });

          navigate(location?.state ? location?.state : "/");
        })
        .catch((err) => {
          console.log(err);
          setError("Oops! Password is not correct please try again.");
        });
    };

    return (
        <div>
                      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex  justify-center mx-auto">
        <img className="w-auto h-14 " src="https://i.ibb.co/sFTY2DJ/image.png" alt=""/>
      
    </div>

<div className="flex  justify-center mx-auto mt-2">
<h1 className="text-2xl font-bold">Welcome, Login here!!</h1>
</div>
<form  onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 form-control">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                {...register("email", { required: true })}
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
                  {errors.email && <span className="text-red-600">Email is required</span>}
              </div>

              <div className="mt-4 form-control">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                </div>

                <input
                  {...register("password", { required: true })} 
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  
                />
                {errors.password && <span className="text-red-600">password is required</span>}
                {error && (
                <p className="text-red-700 font-bold mt-5  ">
                  {" "}
                  <i className="fa-solid fa-triangle-exclamation"></i> {error}
                </p>
              )}
              </div>
              <div className="mt-6 form-control">
                <button className="w-full px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  LogIn
                </button>
              </div>
            </form>

<Googlebtn/>
 
<Link to ="/registration">
    <p className="mt-8 text-lg text-center font-light  text-gray-600"> Do not have an account? <a href="#" className="font-medium text-red-400 hover:underline">Register</a>
    </p>
    </Link>
</div>  
        </div>
    );
};

export default Login;