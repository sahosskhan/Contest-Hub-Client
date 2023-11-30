import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ items }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, image, name, email, role } = items;
  return (
    <div>
      <div className="max-w-4xl mt-5 p-8 sm:flex sm:space-x-6 rounded-xl shadow-xl bg-red-100 dark:text-gray-100">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className="text-xl text-red-500 font-semibold">
              <i className="fa-solid fa-user"></i> {role}
            </span>
          </div>

          <span className="text-black font-semibold text-xl">
            {" "}
            <i className="fa-solid fa-envelope"></i> {email}
          </span>
        </div>
        <Link to={`/dashboard/my-profile-edit/${_id}`}>
      <button className="btn bg-red-500">Edit</button>
      </Link>
      </div>
     
   
  
    </div>
  );
};

export default ProfileCard;
