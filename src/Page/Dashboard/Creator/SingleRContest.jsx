import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


// eslint-disable-next-line react/prop-types
const SingleRContest = ({items,refetch}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const axiosSecure=useAxiosSecure();
  // eslint-disable-next-line react/prop-types
  const {_id, id, nameContest,yourSubmission, winingStatus,  paymentStatus, yourName,yourEmail, yourImage}=items;
const WinnerData= {yourName, yourImage,id};
  const MakeWinner = (id) =>{

    axiosSecure.patch(`/winner-patch/${id}`,WinnerData).then((res) => {
      console.log(res.data);
      if (res.data.result.modifiedCount > 0 && res.data.result2.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Make Winner Announce Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    });
    }


    return (
  
     
      <tr className="text-xl ">
          <td>{nameContest}</td>
          <td>{yourName}</td>
          <td>{yourEmail}</td>
          <td>{yourSubmission}</td>
          <td>{paymentStatus}</td>
          <td>{winingStatus}</td>
          <td>
            <div className="flex gap-5">
                <button  disabled={winingStatus === "winner"} onClick={() => MakeWinner(_id)}   className="btn bg-green-500">Make Winner</button>
            </div>
          </td>
          
        </tr>
 
    );
};

export default SingleRContest;