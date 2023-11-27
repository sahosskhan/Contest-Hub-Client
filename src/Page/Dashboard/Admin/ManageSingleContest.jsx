

// eslint-disable-next-line react/prop-types
const ManageSingleContest = ({items, MakeApprove, handleDelete}) => {
    const {_id,status,creatorName, nameContest,price,tags,deadline,} = items || {};
    

    return (
        <>
        <tbody>
        <tr className="text-base ">
            <td>{nameContest}</td>
            <td>{tags}</td>
            <td >{price}</td>
            <td>{deadline}</td>
            <td>{creatorName}</td>
            <td>{status}</td>
            <td>
              <div className="flex gap-5">
                  <button disabled={status==="approved"} onClick={() => MakeApprove(_id)} className="btn bg-green-500">Confirm</button>
                  <button onClick={() => handleDelete(_id)} className="btn bg-red-500">Delete</button>
              </div>
            </td>
            
          </tr>
        </tbody>
        </>
    );
};

export default ManageSingleContest;