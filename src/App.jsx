import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import WorkFlow from "./Components/WorkFlow";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Features/>
      <WorkFlow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default App;
