import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_PK)

export default function Payment() {
  const { result } = useLoaderData();
  const {treatment, price, appointmentDate, slot} = result;
  console.log(result);
  return (
    <div>
      <h3 className="text-3xl font-semibold">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay $<strong>{price}</strong> for your appointment at {appointmentDate} {slot}
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise} >
          <CheckOutForm
          result={result}
          />
        </Elements>
      </div>
    </div>
  );
}