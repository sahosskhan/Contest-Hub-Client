import SingleRegisterContest from "./SingleRegisterContest";
import useSubmission from './../../../Hooks/useSubmission';
import useAuth from "../../../Hooks/useAuth";



const RegisteredContest = () => {
  const {submission}= useSubmission();
  console.log(submission);
  const {user}=useAuth();
  const filter = submission.filter(item => item.yourEmail === user?.email);
  if(filter.length == 0){
    return <div>
<h1 className="text-4xl text-red-500 font-bold min-h-screen text-center">There Is No Contest That You Participate</h1>

    </div>
  }
    return (
        <div>
<div className="overflow-x-visible">
          <table className="table ">
        
<thead><tr className="text-xl text-red-500">
<td>Contest Name</td>
 <td>Submitted Task</td>
 <td>Payment Status</td>
  <td>Wining Status</td>
    
    </tr></thead>
    <tbody>




          {filter?.map((items) => (
           <SingleRegisterContest key={items}
           items={items}></SingleRegisterContest>
           ))}
    </tbody>
    </table>
        </div>
        </div>
    );
};

export default RegisteredContest;