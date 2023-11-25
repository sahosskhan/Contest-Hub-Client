import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCommunity = () => {
const axiosPublic = useAxiosPublic();
const { data: upload = [] } = useQuery({
    queryKey: ['upload'],
    queryFn: async() => {
        const res = await axiosPublic.get('/community-post');
        return res.data;
        
    }
})

return upload;
};
export default useCommunity;