import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SearchCard = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const {nameContest, _id} =items;
    return (
        <div>
        <div className="">
     <h1>{nameContest}</h1>
    <Link to={`/singleContest/${_id}`}> 
                <button  className="btn btn-sm bg-red-400 my-2">See Details</button>
                </Link>
    </div>
   
</div>  
   

     
    );
};

export default SearchCard;