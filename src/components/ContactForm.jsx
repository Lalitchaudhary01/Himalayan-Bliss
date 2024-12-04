import React from "react";
import { motion } from "framer-motion";

function ContactForm() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Details</h2>
      <motion.div
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Founder: Gaurav FauzDar
          </h3>
          <p className="text-gray-600">Email: john.doe@example.com</p>
          <p className="text-gray-600">Phone: +91 9520968520</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Organizer: Somya Gupta
          </h3>
          <p className="text-gray-600">Email: jane.smith@example.com</p>
          <p className="text-gray-600">Phone: +91 9876543210</p>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactForm;
