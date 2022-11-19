import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useStateContext } from "./ContextApi";

const About = () => {
  const { updatAboutPage } = useStateContext();
  useEffect(() => {
    updatAboutPage();
  }, []);

  return <HeroSection />;
};

export default About;
