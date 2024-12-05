import React from "react";
import HeroSection from "../components/HeroSection";
import Itinerary from "../components/Itinerary";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div>
      <HeroSection />
      <Itinerary />
      <Gallery />
      <ContactForm />
      <FAQ />
    </div>
  );
}

export default Home;
