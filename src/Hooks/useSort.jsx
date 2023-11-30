import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSort = () => {
const axiosPublic = useAxiosPublic();
const { data: SortContest = [], isLoading, refetch} = useQuery({ 
    queryKey: ['sort'],
    queryFn: async() => {
        const res = await axiosPublic.get('/added-contest-sort');
        return res.data;
        
    }
    
})


return {SortContest, refetch, isLoading} ;
};
export default useSort;