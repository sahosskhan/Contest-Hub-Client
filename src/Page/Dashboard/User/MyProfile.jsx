import { PieChart } from "react-minimal-pie-chart";
import useAuth from "../../../Hooks/useAuth";
import useSubmission from "../../../Hooks/useSubmission";
import useUser from "../../../Hooks/userUser";
import ProfileCard from "./ProfileCard";

const MyProfile = () => {
    const {userList}= useUser();
    console.log(userList)
    const {user}=useAuth()
    const filterUserList = userList.filter(contest => contest.email === user?.email);
    console.log(filterUserList);
    const {submission}= useSubmission();
    console.log(submission);
    const filterData = submission.filter(item => item.yourEmail === user?.email);
    const TotalJoin =filterData.length;
    const FAL= TotalJoin;
   
    const filterWin = filterData.filter(win => win.winingStatus === "winner");
  const FWL= filterWin.length;
  const WValue = ((FWL/FAL)*100).toFixed(2);
  console.log(WValue);
    return (
    <>
        <div className="flex justify-center items-center gap-20 ">

{filterUserList?.map((items) => (
    <ProfileCard key={items} items={items}></ProfileCard>
  ))}

      
{filterData.length > 0 && 
 <div className="flex justify-center items-center mt-5">
 <div className="rounded-xl shadow-xl bg-red-100 p-5 w-[550px]">


 <div className=" my-3">
        <h1 className=" text-xl text-center my-1">Total Attempted Contest: {FAL} </h1>
    <h1 className="bg-[#E38627] p-4 rounded-box"></h1>
    </div>

    <div className=" mb-5">
        <h1 className=" text-xl text-center my-1">Total Complete Contest:  {FWL} </h1>
    <h1 className="bg-[#C13C37] p-4 rounded-box"></h1>
    </div>

<h1 className="text-red-500 text-xl my-4 font-bold text-center">Wining Percentage: {WValue} %</h1>
 
 <PieChart animate={true} animationDuration="1500" radius="42"
  data={ [ 
    { title: 'Attempted ', value: FAL, color: '#E38627' },
    { title: 'Complete', value: FWL, color: '#C13C37' },
  ]}
/>
</div>
 </div>
}
 </div>
    </>
    );
};

export default MyProfile;