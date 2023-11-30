import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddContest = () => {
  const navigate = useNavigate();
const {user}=useAuth();
    const {
        register,
        handleSubmit, reset,
      } = useForm()
      const creatorName = user?.displayName;
      const creatorEmail = user?.email;
      const creatorImage = user?.photoURL;
      const status = "pending";
      const pcount = 0;
      const winnerImage ="null";
      const winnerName ="null";
      const winingStatus="pending";
      const onSubmit = (data) => {
        console.log(data);
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
const ContestAdd =
{creatorName, winnerImage,winnerName,winingStatus, creatorEmail,creatorImage,status,pcount, nameContest,price,money,imageContest,tags,deadline,description, submission } || {};
console.log(ContestAdd);


fetch(
    "https://contest-hub-server-beige.vercel.app/add-contest",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ContestAdd),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Successfully!",
          text: "Your Post Upload Done ",
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
        <div className="w-full mt-2 max-w-4xl p-6 m-auto mx-auto bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
            <h1 className="text-center text-red-500 font-bold text-3xl">Add Your Contest Here!!!!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
     
          <div className="" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Name
            </label>
            <input  type="text" 
              name="name"
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
              placeholder="Enter image"
              {...register("image")}
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
          </div>

<div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
            Tags
            </label>
            <select {...register("tags")} className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black" placeholder="Select Tags" >

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
              {...register("description")}
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
                
          </div>
          <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
             Submission Task
            </label>
            <input  type="text" 
              name="submission"
              {...register("submission")}
              placeholder="Enter task"
               className="block w-full placeholder:text-black text-black font-medium px-4 py-3 mt-2 text-lg  rounded-lg bg-gray-300 border-black "/>
                
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-red-400 btn-block text-xl text-black"
            >
              Add Contest
            </button>
          </div>
            </form>
        </div>
    );
};

export default AddContest;