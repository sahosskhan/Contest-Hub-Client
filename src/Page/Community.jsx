import { Button } from "@mui/material";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../Component/Community/PostCard";
import useCommunity from "../Hooks/useCommunity";


const Community = () => {
  const upload = useCommunity();
  console.log(upload);
    // const [Upload, setUpload] = useState([]);
    // useEffect(() => {
    //     fetch(
    //       `http://localhost:5000/community-post`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => setUpload(data));
    //   }, [ ]);
//  console.log(Upload);

  return (
    <div>
      <h1 className="text-center text-5xl text-black mt-12 uppercase font-bold">
        Welcome to Our<span className="text-red-500"> Contest Hub </span>
        Community
      </h1>
      <h1 className="text-center text-lg text-black/60 mt-5 mb-12 uppercase font-semibold">
     <q>You Can Find Here Our All Community Member Post <br /> & Also You Can Upload Your Own Post.</q>
      </h1>
     <div className="flex justify-center items-center">
     <Link to='/addpost'><Button variant="contained" color="error">Add Your Post</Button></Link>

     </div>
      <div className="flex justify-center items-center flex-col mb-24">
        {upload?.map((items) => (
          <PostCard key={items} items={items}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Community;
