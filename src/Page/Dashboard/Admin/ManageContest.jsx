import Swal from "sweetalert2";
import useAddedContest from "../../../Hooks/useAddedContest";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import ManageSingleContest from "./ManageSingleContest";


const ManageContest = () => {
  const axiosSecure = useAxiosSecure();
  const {addedContest, refetch} = useAddedContest();
  console.log(addedContest);
const MakeApprove = (id) =>{

axiosSecure.patch(`/contest-patch/${id}`).then((res) => {
  console.log(res.data);
  if (res.data.modifiedCount > 0) {
  
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Contest Approved",
      showConfirmButton: false,
      timer: 1500,
    });
    refetch()
  }
});
}
const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(
        `https://contest-hub-server-beige.vercel.app/contest-delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Contest has been deleted.",
              "success"
            );
          }
          refetch()
        });
    }
  });
};
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-xl  text-red-500 ">
              <td>Contest Name</td>
              <td>Tags</td>
              <td>Price</td>
              <td>Deadline</td>
              <td>Creator</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
          {addedContest?.map((items) => (
            <ManageSingleContest
              key={items}
              items={items}
              handleDelete={handleDelete}
              MakeApprove={MakeApprove}
            ></ManageSingleContest>
          ))}
           </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
