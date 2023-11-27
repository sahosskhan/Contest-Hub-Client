

import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAuth from './../Hooks/useAuth';
import Swal from 'sweetalert2';

const Googlebtn = () => {
  const navigate = useNavigate();
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const handleGoogle = () => {
    googleLogin().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Successfully!",
          text: "You login with google ",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate("/");
      });
    });
  };
    return (
        <div>
              <div className="flex items-center mt-6 -mx-2">
        <button onClick={handleGoogle}   type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:bg-red-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Login with Google</span>
        </button>

  
  
    </div> 
        </div>
    );
};

export default Googlebtn;