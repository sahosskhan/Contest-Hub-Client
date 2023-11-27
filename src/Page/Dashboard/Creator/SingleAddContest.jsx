import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SingleAddContest = ({items, handleDelete}) => {
    const {_id,status, creatorName, nameContest,price,tags,deadline, } = items || {};
    return (
     <>
      <tbody>
      <tr className="text-base">
          <td>{nameContest}</td>
          <td>{tags}</td>
          <td>{price} $</td>
          <td>{deadline}</td>
          <td>{creatorName}</td>
          <td>{status}</td>
          <td>
            <div className="flex gap-5">
            <Link to={`/dashboard/updateContest/${_id}`}>
                <button disabled={status === "approved"} className="btn bg-green-500">Edit</button>
                </Link>
                <button disabled={status === "approved"} onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
            </div>
          </td>
          
        </tr>
      </tbody>
      </>
    );
};

export default SingleAddContest;