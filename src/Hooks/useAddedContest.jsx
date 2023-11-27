import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAddedContest = () => {
const axiosPublic = useAxiosPublic();
const { data: addedContest = [], refetch} = useQuery({ 
    queryKey: ['upload'],
    queryFn: async() => {
        const res = await axiosPublic.get('/added-contest');
        return res.data;
        
    }
    
})


return {addedContest, refetch} ;
};
export default useAddedContest;