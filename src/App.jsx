import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import WorkFlow from "./Components/WorkFlow";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Features/>
      <WorkFlow/>
      <Pricing/>
    </>
  );
};

export default App;
