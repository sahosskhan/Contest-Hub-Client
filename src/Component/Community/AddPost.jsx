import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddPost = () => {
    const { user } = useAuth();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
console.log(formattedDate);
const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

console.log('Current Time:', formattedTime);

const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const userEmail = user?.email;
    const userTopic = data.topic;
    const userImage= data.image;
    const userPost = data.post;
    reset({
        topic: "",
        image: "",
        post: "",
      });


    const PostAdd =
    { userName, userPhoto, userEmail, formattedTime, formattedDate, userTopic, userImage, userPost } || {};
  console.log(PostAdd);



  fetch(
    "https://contest-hub-server-beige.vercel.app/add-community-post",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PostAdd),
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
        });
      }
    });








  }



    return (
        <div>
          
                  <section className="w-full my-10 max-w-3xl p-6 m-auto mx-auto bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
                    <h1 className="text-center text-red-600 text-4xl font-bold my-6">Upload  Your Post For Community</h1>

                    <div className="flex justify-start mb-5 items-center gap-5">
                    <div className="avatar online">
  <div className="w-14 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
                    <h1 className="text-xl font-semibold">{user?.displayName}</h1>
                    </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Topic
            </label>
            <input  type="text" placeholder={`Write's topic on your mind, ${user?.displayName}`}
              name="topic"
              {...register("topic")}
              className="block w-full placeholder:text-white text-white font-bold px-4 py-3 mt-2 text-lg border-2 rounded-lg bg-red-500 border-black "/>
                
          </div>
          <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Image
            </label>
            <input  type="text" placeholder={`Write's image on your mind, ${user?.displayName}`}
              name="image"
              {...register("image")}
              className="block w-full placeholder:text-white text-white font-bold px-4 py-3 mt-2 text-lg border-2 rounded-lg bg-red-500 border-black "/>
                
          </div>
   <div className="mt-6" >
            <label className="block text-2xl font-bold text-black dark:text-gray-200">
              Post
            </label>
            <textarea cols="30" rows="8" type="text" placeholder={`Write's on your mind, ${user?.displayName}`}
              name="post"
              {...register("post", { required: true })}
              className="block w-full placeholder:text-white text-white font-bold px-4 py-3 mt-2 text-lg border-2 rounded-lg bg-red-500 border-black "/>
              {errors.name && <span className="text-red-600">Write Something is required for post</span>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="btn bg-red-400 btn-block text-xl text-black"
            >
              Upload
            </button>
          </div>

        </form>
       <div className="flex  mt-8">
        <Link to="/community">
       <button
              type="submit"
              className="btn bg-black text-xl text-red-500"
            >
              See Post
            </button>
            </Link>
       </div>
      </section>
        </div>
    );
};

export default AddPost;