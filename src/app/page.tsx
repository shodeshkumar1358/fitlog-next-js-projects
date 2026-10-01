import React from "react";
import HeroSection from "./Components/Home/Hero";
import Workouts from "./workouts/Workouts";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Workouts></Workouts>
    </div>
  );
};

export default HomePage;
