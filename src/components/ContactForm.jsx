import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiUser, FiInstagram } from "react-icons/fi";

function ContactForm() {
  return (
    <div className="container mx-auto my-10 px-4 w-150">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Contact Details
      </h2>
      <motion.div
        className="max-w-lg mx-auto p-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-6 text-white">
          <div className="flex items-center mb-3">
            <FiUser className="text-2xl mr-3" />
            <h3 className="text-2xl font-bold">Organizer: Gaurav Fauzdar</h3>
          </div>
          <div className="flex items-center mb-3">
            <FiMail className="text-2xl mr-3" />
            <p className="text-lg">Email: work.himallyanbliss@gmail.com</p>
          </div>
          <div className="flex items-center mb-3">
            <FiPhone className="text-2xl mr-3" />
            <p className="text-lg">Phone: +91 9520968520 </p>
          </div>
          <div className="flex items-center">
            <FiInstagram className="text-2xl mr-3" />
            <p className="text-lg">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/himalayan_blisss/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-200"
              >
                Himalayan_Blisss
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactForm;
