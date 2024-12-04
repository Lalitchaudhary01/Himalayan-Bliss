import React from "react";

function HeroSection() {
  return (
    <header
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://media2.thrillophilia.com/images/photos/000/083/371/original/1525435150_shutterstock_633164246.jpg?w=753&h=450&dpr=1.5')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-6xl font-bold tracking-widest drop-shadow-md animate-fade-in">
          Explore Manali & Kasol
        </h1>
        <p className="mt-4 text-xl text-gray-200 animate-slide-up opacity-90">
          Embark on a journey through the stunning landscapes and
          adventure-filled mountains.
        </p>
        <a
          href="https://chat.whatsapp.com/HlePSFRcFjRJxKlPVHW1dZ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          Join the Journey
        </a>
      </div>
    </header>
  );
}

export default HeroSection;
