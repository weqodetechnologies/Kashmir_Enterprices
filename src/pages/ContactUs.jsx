import React from "react";
import Hero from "../components/ContactUs/Hero";
import ContactQuerySection from "../components/ContactUs/ContactQuerySection";
import FAQ from "../components/ContactUs/FAQ";
import HeroSection from "../components/HomePage/ViewPage";

export default function ContactUs() {
  return (
    <div>
      <Hero />
      <ContactQuerySection />
      <FAQ />
      <HeroSection />
    </div>
  );
}
