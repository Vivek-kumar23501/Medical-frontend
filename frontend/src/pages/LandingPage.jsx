// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import FeaturesSection from "../components/FeatureCard";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <OurMission />
      {/* Later you can add Services, Product showcase, Footer, etc. */}
    </>
  );
};

export default LandingPage;
