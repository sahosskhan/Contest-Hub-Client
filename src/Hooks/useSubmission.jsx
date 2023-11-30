import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSubmission= () => {
const axiosPublic = useAxiosPublic();
const { data: submission = [], refetch} = useQuery({ 
    queryKey: ['submit'],
    queryFn: async() => {
        const res = await axiosPublic.get('/added-submission');
        return res.data;
        
    }
    
})


return {submission, refetch} ;
};
export default useSubmission;