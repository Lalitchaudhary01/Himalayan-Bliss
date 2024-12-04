import React from "react";

function HeroSection() {
  return (
    <header
      className="bg-cover bg-center h-96 text-white flex items-center justify-center bg-gradient-to-r from-blue-800 via-indigo-600 to-purple-700 shadow-lg transition-all duration-500 ease-in-out"
      style={{
        backgroundImage:
          "url('https://media2.thrillophilia.com/images/photos/000/083/371/original/1525435150_shutterstock_633164246.jpg?w=753&h=450&dpr=1.5')",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl text-black font-extrabold tracking-wide transform transition-all duration-500 hover:scale-110">
          Explore Manali & Kasol
        </h1>
        <p className="mt-4 text-black text-lg font-medium opacity-90 hover:opacity-100 transition-opacity duration-300">
          Embark on a journey through the stunning landscapes and
          adventure-filled mountains.
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 rounded-full text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          Join the Journey
        </button>
      </div>
    </header>
  );
}

export default HeroSection;
