import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import OurWork from "../components/OurWork";
import AppointmentSection from "../components/AppointmentSection";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <OurWork />
      <AppointmentSection />
      <Reviews />
    </main>
  );
};

export default Home;
