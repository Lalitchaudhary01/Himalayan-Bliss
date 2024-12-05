import React, { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the last date to register?",
      answer:
        "The last date for registration is 5th January 2025. Please ensure you register before this date.",
    },
    {
      question: "When will the trip begin, and how long will it last?",
      answer:
        "The trip begins on 10th January 2025 and will last for 6 days & 5 night include traveling. We'll return on 15th January 2025.",
    },
    {
      question: "How do I register for the trip?",
      answer:
        "To register, fill out the online form and make the payment. For any queries, contact the organizer.",
    },
    {
      question: "What are the costs involved?",
      answer:
        "The total cost of the trip, including travel, accommodation, and food, is ₹6499 per person.",
    },
    {
      question: "Who is organizing the trip?",
      answer:
        "The trip is organized by Gaurav Fauzdar. Contact him at work.himallyanbliss@gmail.com or +91 9520968520.",
    },
    {
      question: "What places will we visit?",
      answer:
        "Key attractions include Solang Valley, Mall Road, Hadimba Temple & sissu or koksar in Manali, and Parvati Valley, Chalal Trek, and Manikaran Sahib in Kasol.",
    },
    {
      question: "Can I bring a friend?",
      answer:
        "Yes, you can bring friends! They also need to register by 5th January 2025.",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        FAQ: Manali-Kasol Trip
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 font-medium text-left text-gray-700"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span>{openQuestion === index ? "➖" : "➕"}</span>
            </button>
            {openQuestion === index && (
              <div className="p-4 text-gray-600 bg-gray-50 rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
