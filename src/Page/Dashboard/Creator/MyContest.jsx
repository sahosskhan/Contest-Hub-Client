import Swal from "sweetalert2";
import useAddedContest from "../../../Hooks/useAddedContest";
import useAuth from "../../../Hooks/useAuth";
import SingleAddContest from './SingleAddContest';


const MyContest = () => {
  const {addedContest, refetch}= useAddedContest();
    console.log(addedContest);
    const {user} = useAuth()
    const FilterEmail = user?.email;
    console.log(FilterEmail);
    const filteredContests = addedContest.filter(contest => contest.creatorEmail === FilterEmail);

    console.log(filteredContests);
if(filteredContests.length == 0){
  return <div className=" flex justify-center items-center min-h-screen">

    <h1 className="text-red-500 font-semibold text-4xl text-center"><i className="fa-solid fa-circle-xmark"></i> Sorry, You Have No Contest <br /> That Is Created By You!</h1>
  </div>
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
        `http://localhost:5000/contest-delete/${id}`,
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
                 <div className="overflow-x-visible">
          <table className="table table-zebra ">
        
<thead><tr className="text-base text-red-500">
    <td>Name</td>
    <td>Tags</td>
    <td>Price</td>
    <td>Deadline</td>
    <td>Creator</td>
    <td>Status</td>
    
    
    </tr></thead>
            {filteredContests?.map((items) => (
          <SingleAddContest key={items} items={items}handleDelete={handleDelete}></SingleAddContest>
        ))}
            
          </table>
        </div>
        </div>
    );
};

export default MyContest;