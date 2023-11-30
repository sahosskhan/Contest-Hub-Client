import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleContestPage = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    pcount,
    nameContest,
    price,
    imageContest,
    deadline,
    description,
    winingStatus,
    winnerName,
    winnerImage,
  } = data;

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    // Update remaining time every second
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime() {
    // Set the target date (in 'year-month-date' format)
    const targetDateString = deadline;
    console.log(targetDateString);
    const targetDate = new Date(targetDateString);

    // Get the current date and time
    const currentDate = new Date();
    console.log(currentDate);

    // Calculate the difference in milliseconds
    const difference = targetDate - currentDate;

    // Calculate remaining time in days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Return an object with the remaining time
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  const handleRegister = () => {
    const targetDateString = deadline;
    console.log(targetDateString);
    const targetDate = new Date(targetDateString);

    const currentDate = new Date();
    console.log(currentDate);
    if (targetDate === currentDate) {
      Swal.fire({
        icon: "warning",
        title: "Sorry",
        text: "You cannot register this contest because it is no available now.",
        confirmButtonText: "OK",
      });
    } else {
      window.location.href = `/singleRegister/${_id}`;
    }
  };

  return (
    <div>
  
      <div className="card my-3  mx-auto lg:w-[700px] shadow-2xl">
        <h1 className="bg-red-500 absolute text-center p-2 w-36 text-black rounded-r-xl text-xl font-bold">
          Participate: {pcount}
        </h1>
        <figure>
          <img className="]" src={imageContest} alt="Shoes" />
        </figure>

        <h1 className="bg-red-500 absolute text-center p-2 w-36 text-black rounded-r-xl text-xl font-bold">
          Participate: {pcount}
        </h1>

        <h2 className="text-center text-2xl font-semibold rounded-xl rounded-t-none text-white bg-black p-2 w-full">
          {nameContest}
        </h2>
        <p className="text-xl text-black/70 p-5  text-left">{description}</p>
        <div className="flex justify-start ml-4 mt-2 items-center">
          <h1 className="text-center -mt-5 mb-4  text-xl w-44 bg-red-600 rounded-xl text-white font-semibold p-2">
            Price: {price} $
          </h1>
        </div>
        {winingStatus == "winner" ||
          <>
            <h1 className="text-xl text-center font-semibold text-red-500 ">
              For Submit Deadline Remaining
            </h1>
            <div className="flex justify-center items-center my-4">
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": remainingTime.days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": remainingTime.hours }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": remainingTime.minutes }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": remainingTime.seconds }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </>
        }

        <div className="flex justify-center items-center">
  {winingStatus =="winner" ||         <button
            className="btn w-1/2 my-4  bg-red-500 text-black"
            onClick={handleRegister}
          >
            Register Contest
          </button>}
        </div>
        {winingStatus == "winner" &&
          <>
            <div className=" bg-red-200">
              <h1 className="text-center text-2xl my-3 font-bold">
                This Contest Win By <span>{winnerName}</span>
              </h1>
              <div className="flex justify-center items-center mb-2">
                <img className="h-16 rounded-box" src={winnerImage} alt="" />
              </div>
            </div>
          </>
       }
 <div className="flex justify-center items-center">
       {winingStatus == "winner" &&
       <button
            disabled
            className="btn w-1/2 my-4  bg-red-500 text-black"
            onClick={handleRegister}
          >
           Sorry Registration Closed
          </button>
       }
       </div>
      </div>
    </div>
  );
};

export default SingleContestPage;
