import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log("Payment Method Created: ", paymentMethod);
      // Pass paymentMethod.id to your server to complete the payment.
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Card Details</label>
          <div className="border p-3 rounded-lg">
            <CardElement />
          </div>
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default App;
