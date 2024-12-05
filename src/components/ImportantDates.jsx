import React from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";

function ImportantDates() {
  // Registration deadline and trip start date
  const registrationDeadline = new Date("2025-01-05T23:59:59");
  const tripStartDate = "10th January 2025";

  return (
    <div className="container mx-auto my-10 px-4 text-center">
      {/* Registration Deadline Section */}
      <motion.div
        className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-2">
          Last Date of Registration: 5th January 2025
        </h2>
        <p className="text-lg font-medium">Time left to register:</p>
        <div className="text-3xl font-extrabold mt-2">
          <Countdown date={registrationDeadline} />
        </div>
      </motion.div>

      {/* Trip Start Date Section */}
      <motion.div
        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-2xl font-bold mb-2">Trip Start Date:</h2>
        <p className="text-3xl font-extrabold">{tripStartDate}</p>
      </motion.div>
    </div>
  );
}

export default ImportantDates;
