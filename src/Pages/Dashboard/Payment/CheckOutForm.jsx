import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

export default function CheckOutForm({ result }) {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const element = useElements();

  // price
  const { price } = result;

  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    // validation checkup
    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    // check validation
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
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
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">
        <small>{cardError}</small>
      </p>
    </>
  );
}
