import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAddedContest = () => {
const axiosPublic = useAxiosPublic();
const { data: addedContest = [], isLoading, refetch} = useQuery({ 
    queryKey: ['contest'],
    queryFn: async() => {
        const res = await axiosPublic.get('/added-contest');
        return res.data;
        
    }
    
})


return {addedContest, refetch,isLoading} ;
};
export default useAddedContest;