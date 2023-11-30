
import useAuth from "../../../Hooks/useAuth";
import useSubmission from "../../../Hooks/useSubmission";
import WinCard from "./WinCard";


const WinPage = () => {
    const {user}=useAuth()
    const {submission}= useSubmission();
    console.log(submission);
    const filterData = submission.filter(item => item.yourEmail === user?.email);
    const filterWin = filterData.filter(win => win.winingStatus === "winner");
    if(filterWin.length == 0) {
        return <div>
<h1 className="text-4xl text-red-500 font-bold min-h-screen text-center">There Is No Contest That You Win</h1>
        </div>
    }


    return (
        <div className="grid lg:grid-cols-2 gap-8 my-5">

     {filterWin?.map((items) => (
    <WinCard key={items} items={items}></WinCard>
  ))}



        </div>
    );
};

export default WinPage;