import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";




const UpdateContest = () => {
  
const navigate = useNavigate()
    const {user}=useAuth();

  // console.log(data)
 const data = useLoaderData();

const {_id,nameContest,price,money,imageContest,tags,deadline,description, submission} = data;
    const {
        register,
        handleSubmit, reset
      } = useForm()
      
      const creatorName = user?.displayName;
      const creatorEmail = user?.email;
      const creatorImage = user?.photoURL;
      const status = "pending";
      const pcount ="0";

      const onSubmit = (data) => {
const nameContest = data.name;
const price = data.cprice;
const money = data.money;
const imageContest = data.image;
const tags = data.tags;
const deadline = data.deadline;
const description = data.description;
const submission = data.submission; 
reset({
  name: "",
  cprice:"",
  money:"",
  image:"",
  tags:"",
  deadline:"",
  description:"",
  submission:""
});
const ContestUpdate =
{creatorName, creatorEmail,creatorImage,status,pcount, nameContest,price,money,imageContest,tags,deadline,description, submission };
console.log(ContestUpdate);
fetch(
  `https://contest-hub-server-beige.vercel.app/updatedContest/${_id}`,
  {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ContestUpdate),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Update Contest Successfully",
        icon: "success",
        confirmButtonText: "Done",
      }).then((result) => {
        if (result.isConfirmed) { 
          navigate('/dashboard/added-contest'); 
        }
      });
    }
  });
   




}
      


    return (
        <div>
      <div className="w-full mt-2 max-w-4xl p-6 m-auto mx-auto bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
            <h1 className="text-center text-red-500 font-bold text-3xl">Update Your Contest Here!!!!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
     
          <div className="" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Name
            </label>
            <input  type="text" 
              name="name"
              defaultValue={nameContest}
              placeholder="Enter name"
              {...register("name")}
              className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300  border-black "/>   
          </div>
    
      <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Price
            </label>
            <input  type="text" 
            placeholder="Enter Price"
            defaultValue={price}
              name="cprice"
              {...register("cprice")}
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
          </div>

            <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Price Money
            </label>
            <input  type="text" 
            placeholder="Enter Price Money"
            defaultValue={money}
              name="money"
              {...register("money")}
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
          </div>
   

      <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Image
            </label>
            <input  type="text" 
              name="image"
              defaultValue={imageContest}
              placeholder="Enter image"
              {...register("image")}
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
          </div>

<div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
            Tags
            </label>
            <select {...register("tags")} defaultValue={tags} className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black" placeholder="Select Tags" >

        <option value="Business">Business</option>
        <option value="Medical">Medical</option>
        <option value="Writing">Writing</option>
        <option value="Gaming">Gaming</option>
      </select>
          </div>

          <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Deadline
            </label>
            <input  type="date"
            defaultValue={deadline} 
              name="deadline"
              {...register("deadline")}
              placeholder="Enter deadline"
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
          </div>
<div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Description
            </label>
            <input  type="text" 
            placeholder="Enter description"
              name="description"
              defaultValue={description}
              {...register("description")}
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
                
          </div>
          <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Submission Task
            </label>
            <input  type="text" 
              name="submission"
              defaultValue={submission}
              {...register("submission")}
              placeholder="Enter task"
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
                
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-red-400 btn-block text-xl text-black"
            >
              Update Contest
            </button>
          </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateContest;