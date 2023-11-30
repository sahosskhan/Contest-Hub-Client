


// eslint-disable-next-line react/prop-types
const SingleRegisterContest = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const{nameContest,yourSubmission, winingStatus,  paymentStatus }=items;
    return (
        <tr className="text-xl ">
          <td>{nameContest}</td>
          <td>{yourSubmission}</td>
          <td>{paymentStatus}</td>
          <td>{winingStatus}</td>
          
            </tr>
    );
};

export default SingleRegisterContest;