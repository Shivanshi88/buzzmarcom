import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrustedBySection from "../components/TrustedBySection";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <TrustedBySection />
      <CTASection />
    </>
  );
}

export default Home;