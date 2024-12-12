import React, { useState } from "react";
import axios from "axios";

const RazorpayCheckout = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(
        "http://localhost:5000/create-order",
        {
          amount,
          currency: "INR",
        }
      );

      const {
        id: order_id,
        amount: order_amount,
        currency,
      } = orderResponse.data;

      const options = {
        key: "YOUR_KEY_ID", // Replace with your Razorpay key_id
        amount: order_amount,
        currency: currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order_id,
        handler: (response) => {
          console.log("Payment successful:", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#4CAF50", // Customize the color theme
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error in payment:", error);
      alert("Payment Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Razorpay Checkout
        </h1>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePayment}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          Pay Now
        </button>
        <p className="text-center text-gray-600 text-sm mt-4">
          Powered by{" "}
          <span className="text-blue-500 font-semibold">Razorpay</span>
        </p>
      </div>
    </div>
  );
};

export default RazorpayCheckout;
