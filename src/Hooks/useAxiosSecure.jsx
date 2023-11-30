import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://contest-hub-server-beige.vercel.app'
})
const useAxiosSecure= () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    // request interceptor
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    // console.log("token", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }),
    (err) => {
      return Promise.reject(err);
    };

  // response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log('status error in the interceptor', status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

    return axiosSecure;
};

export default useAxiosSecure;