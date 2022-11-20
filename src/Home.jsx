import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useStateContext } from "./ContextApi";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const { updateHomePage } = useStateContext();

  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
