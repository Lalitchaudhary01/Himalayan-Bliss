import React from "react";
import { motion } from "framer-motion";

function Itinerary() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival and Sightseeing",
      activities: [
        "Arrive in Manali",
        "Check into your hotel",
        "Relax",
        "Evening on Mall Road",
        "Hadimba Devi Temple",
        "Shop at Market for local souvenirs",
      ],
    },
    {
      day: 2,
      title: "Adventure Day",
      activities: [
        "Visiting Solang Valley and Sissu or Koksar for adventurous activities",
        "Return to Manali in the evening",
      ],
    },
    {
      day: 3,
      title: "Kasol and Nature",
      activities: [
        "Visiting Manikaran Gurudwara",
        "Explore Kasol Camping",
        "Bonfire with Music 🎶 Night",
      ],
    },
    {
      day: 4,
      title: "Departure",
      activities: [
        "Check out from the hotel",
        "Last-minute shopping and packing",
        "Visit any missed local attractions",
        "Depart from Kasol in the Afternoon",
      ],
    },
  ];

  return (
    <div className="container  mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Itinerary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {itinerary.map((day, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative text-white p-6 rounded-lg shadow-md overflow-hidden"
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(90deg, #4caf50, #2196f3, #ff5722, #ffc107)",
                backgroundSize: "300% 300%",
              }}
            ></motion.div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4">
                Day {day.day}: {day.title}
              </h3>
              <ul className="list-disc pl-4">
                {day.activities.map((activity, idx) => (
                  <li key={idx} className="mb-2 text-sm">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Itinerary;
