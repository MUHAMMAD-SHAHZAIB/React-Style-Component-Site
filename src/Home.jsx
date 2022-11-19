import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useStateContext } from "./ContextApi";

const Home = () => {
  const { updateHomePage } = useStateContext();
  

  useEffect(() => {
    updateHomePage();
  },[]);
  return <HeroSection/>;
};

export default Home;
