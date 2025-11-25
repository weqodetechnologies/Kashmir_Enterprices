import React from "react";
import Hero from "../components/HomePage/Hero";
import AboutUs from "../components/HomePage/About";
import Services from "../components/HomePage/Services";
import Projects from "../components/HomePage/Project";
import ContactUs from "../components/HomePage/ContactUs";
import Testimonials from "../components/HomePage/Testimonial";
import HeroSection from "../components/HomePage/ViewPage";

function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <ContactUs />
      <Testimonials />
      <HeroSection />
    </div>
  );
}

export default Home;
