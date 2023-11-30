
import useSubmission from "../../../Hooks/useSubmission";
import SingleRContest from "./SingleRContest";


const ManageRContest = () => {
  const {submission,refetch}= useSubmission();
  console.log(submission);

  if(submission.length == 0){
    return <div>
<h1 className="text-4xl text-red-500 font-bold min-h-screen text-center">There Is No Contest That AnyOne Participate</h1>

    </div>
  }
 





  
    return (
        <div>
                 <div className="overflow-x-visible">
          <table className="table ">
        
<thead><tr className="text-xl text-red-500">
<td>Contest Name</td>
              <td>Participate Name</td>
              <td>Participate Email</td>
              <td>Submitted Task</td>
              <td>Payment Status</td>
              <td>Wining Status</td>
    
    </tr></thead>
    <tbody>
    {submission?.map((items) => (
           <SingleRContest key={items._id}
           items={items} refetch={refetch}></SingleRContest>
           ))}
           </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageRContest;