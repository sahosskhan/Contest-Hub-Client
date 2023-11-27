import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ContestCard = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,pcount, nameContest,imageContest,description, } = item;
    const descriptionMain = description;
  
    const descriptionSlice = descriptionMain.slice(0, 70);
    
    return (
        <div>
           <div className="card lg:w-[490px] md:w-[490px]  h-[450px] my-3 bg-base-100 shadow-xl">
            <figure><img src={imageContest} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-6 py-1 rounded-lg bg-slate-900 text-white">Participate: {pcount} </p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-2xl">{nameContest}</h2>
                <p className="text-xl">{descriptionSlice} <span className ="text-xl text-red-400">....</span> </p>
                <div className="card-actions justify-end">
                <Link to={`/singleContest/${_id}`}> 
                <button  className="btn bg-red-500 ">Details</button>
                </Link>
                </div>
            </div>
        </div>   
        </div>
    );
};

export default ContestCard;