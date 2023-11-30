import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser= () => {
const axiosPublic = useAxiosPublic();
const { data: userList = [], refetch} = useQuery({ 
    queryKey: ['user'],
    queryFn: async() => {
        const res = await axiosPublic.get('/user-list');
        return res.data;
        
    }
    
})


return {userList, refetch} ;
};
export default useUser;