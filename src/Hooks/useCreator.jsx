import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCreator = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isCreator, isPending: isCreatorLoading } = useQuery({
        queryKey: [user?.email, 'isCreator'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/creator/${user.email}`);
            console.log(res.data);
            return res.data?.creator;
        }
    })
    return [isCreator, isCreatorLoading]
};

export default useCreator;