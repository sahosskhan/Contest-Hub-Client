import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const SingleRegister = () => {
    const {user}=useAuth();
    const data = useLoaderData();
    const {_id, creatorName, creatorEmail,creatorImage, nameContest,price,money,imageContest,tags,deadline, submission, pcount} =data;
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        const yourName = data.yourName;
        const yourEmail = data.yourEmail;
        const yourImage = data.yourImage;
        const yourSubmission = data.yourSubmission;
        const id = _id;
        const winingStatus="pending";
        const paymentStatus="not paying"
        const ContestSubmitAdd =
  
        {id,pcount,winingStatus,paymentStatus, yourName, yourEmail, yourImage, yourSubmission, creatorName, creatorEmail,creatorImage,nameContest,price,money,imageContest,tags,deadline} ;
        console.log(ContestSubmitAdd); 

        fetch(
            "https://contest-hub-server-beige.vercel.app/contestSubmission",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(ContestSubmitAdd),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Your Registration On Processing...",
                  text: "Now Please Pay For Complete The Registration  ",
                  icon: "success",
                  confirmButtonText: "Pay",
                }).then((result) => {
                  if (result.isConfirmed) { 
                    navigate(`/paymentGateway/${data.insertedId}`); 
                  }
                });
              }
            });


      }



    return (
        <div>
             <div className="max-w-2xl mx-auto my-10 overflow-hidden bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
        <img className="h-[500px] w-full mx-auto" src={imageContest} alt="Article" />

        <div className="p-6">
        <p className="text-center text-3xl mb-4 font-bold">{nameContest}</p>
          <div className="flex justify-center items-center gap-5">
<p className="bg-red-500 p-2 text-xl text-black w-1/2 text-center rounded-xl"><i className="fa-solid fa-dollar-sign "></i> {price} USD </p>

          </div>

          <h1 className="bg-black text-red-500 my-5 p-5 text-xl rounded-xl"><span className="text-white">Submission Task:</span> {submission}</h1>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Your Name 
                </label>
                <input
             readOnly
             defaultValue={user?.displayName}
             {...register("yourName", { required: true })}
                  name="yourName"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>

              <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Your Email
                </label>
                <input
               readOnly
                defaultValue={user?.email}
                  name="yourEmail"
                  {...register("yourEmail", { required: true })}
                  className="lock w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
                {errors.name && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Your Image URL
                </label>
                <input
               readOnly
                defaultValue={user?.photoURL}
                  name="yourImage"
                  {...register("yourImage", { required: true })}
                  className="lock w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
                {errors.name && <span className="text-red-600">Image is required</span>}
              </div>

         
         <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Your Submission
                </label>
                <input
                  name="yourSubmission"
                  {...register("yourSubmission", { required: true })}
                placeholder="Enter your submission "
                  className="lock w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
                {errors.name && <span className="text-red-600">Submission is required</span>}
              </div>

         
      
              <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Register Now
            </button>
          </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleRegister;