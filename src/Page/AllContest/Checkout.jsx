import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const Checkout = ({submission}) => {
    // eslint-disable-next-line react/prop-types
    const {price, yourEmail, nameContest,_id} = submission;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [success, setSuccess] = useState("");
  const [transID, setTransID] = useState("");

  useEffect(() => {
    fetch("https://contest-hub-server-beige.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data?.clientSecret);
      })
      .catch((err) => setFetchError(err.message));
  }, [price]);

const navigate = useNavigate()

const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: nameContest,
            email: yourEmail,
          },
        },
      });

    if (paymentError) {
      setCardError(paymentError.message);
      return;
    }
    setSuccess("");
    setTransID("");
    if (paymentIntent.status === "succeeded") {
      const payment = {
        payAmount: price,
        transId: paymentIntent.id,
        yourEmail: yourEmail,
        nameContest,
        id: _id,
      };
      fetch("https://contest-hub-server-beige.vercel.app/payments", {
        method: "POST",
        headers: {
            "content-type": "application/json",
          },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            setSuccess("Congrats! Your Payment Complete");
            setTransID(paymentIntent?.id);
            Swal.fire({
                title: "Successfully Payment Done!",
                text: "Your Registration Complete ",
                icon: "success",
                confirmButtonText: "Done",
              }).then((result) => {
                if (result.isConfirmed) { 
                  navigate("/dashboard/my-register-contest"); 
                }
              });
          }
        })
        .catch((err) => setFetchError(err.message));
    }
  };

  return (
    <div>
      {cardError && <p className="py-3 text-red-500">{cardError}</p>}
      <form onSubmit={handleSubmit}>
        <CardElement
          className="bg-white text-black w-96 rounded p-6 "
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn bg-red-500 btn-block my-4"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {success && <p className="text-green-500 my-4">{success}</p>}
      {transID && (
        <p className="text-green-500 my-4">
          Your TransID is{" "}
          <span className="text-orange-400 font-semibold">{transID}</span>
        </p>
      )}
      {fetchError && (
        <p className="text-red-500"> Fetching error is {fetchError}</p>
      )}
    </div>
  );
};

export default Checkout;