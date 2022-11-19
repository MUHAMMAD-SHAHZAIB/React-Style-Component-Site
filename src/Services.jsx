import React from "react";
import { useStateContext } from "./ContextApi";

const Services = () => {
  const name = useStateContext();
  return <div>services {name}</div>;
};

export default Services;
