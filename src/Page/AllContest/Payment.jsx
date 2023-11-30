import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);



const Payment = () => {
  const data = useLoaderData();
  console.log(data);
const {nameContest, price,}= data;
  return (
    <div className=" flex  flex-col justify-center items-center m-5">
      <h3 className="text-4xl text-center">
        Payment for <span className="text-bold  text-red-500">{nameContest}</span>
      </h3>
      <p className="text-xl text-center font-semibold my-4">
        You need to pay for amount of 
        <span className="text-bold  text-green-500"> {price} $</span>
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <Checkout submission={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;