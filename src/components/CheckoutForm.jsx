import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      // Backend request
      try {
        const response = await axios.post("http://localhost:5000/payment", {
          amount: 1000, // Amount in cents ($10.00)
          id,
        });

        if (response.data.success) {
          setPaymentStatus("Payment Successful!");
        }
      } catch (error) {
        setPaymentStatus("Payment Failed. Try again!");
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <p>{paymentStatus}</p>
    </form>
  );
};

export default CheckoutForm;
