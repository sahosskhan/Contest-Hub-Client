


// eslint-disable-next-line react/prop-types
const PostCard = ({items}) => {
    const {userName, userPhoto, formattedTime, formattedDate, userEmail,  userTopic, userImage, userPost} = items || {};
    // console.log(items);
    return (
        <div>
           <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={userImage}alt=""/>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                    {userTopic}
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                 {userPost}
                </p>
   <p className="text-base text-red-600 mt-2"><i className="fa-solid fa-calendar-days"> </i><span> {formattedTime}, <span> {formattedDate}</span></span></p>

                <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={userPhoto}alt=""/>

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{userName}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400"><i className="fa-solid fa-at"></i><span> {userEmail}</span></p>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default PostCard;