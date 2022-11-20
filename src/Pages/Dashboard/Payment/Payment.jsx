import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Payment() {
  const { result: booking } = useLoaderData();
  console.log(booking);
  return (
    <div>
      <h3 className="text-3xl font-semibold">Payment</h3>
    </div>
  );
}