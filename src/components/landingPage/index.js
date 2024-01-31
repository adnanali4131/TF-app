import React from "react";
import Header from "../shared/header";
import HeroSection from "./heroSection";
import Features from "./features";
import Works from "./works";
import Footer from "../shared/footer";


const LandingPage = () => {


  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Works />
      <Footer />
    </>
  )
}

export default LandingPage