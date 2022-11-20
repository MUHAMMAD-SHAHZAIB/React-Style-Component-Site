// To create context
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Reducer } from "./Reducer";
const AppContext = createContext();

//!-------Call Api-------
const API = "https://dummyjson.com/products";

//! define intialState for useReducer
const intialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  // !create useReducer hook
  const [state, dispatch] = useReducer(Reducer, intialState);
  // !-- ==========  Home page method Start========== -->
  const updateHomePage = () => {
    return dispatch({
      type: "Home_Update",
      payload: {
        name: "Zaib Web Developer",
        image: "./images/hero.svg",
      },
    });
  };
  //!-- ========== Home page method End ========== -->

  //!-- ==========Update Page Method Start ========== -->
  const updatAboutPage = () => {
    return dispatch({
      type: "About_Update",
      payload: {
        name: "Zaib Web Designer",
        image: "./images/about1.svg",
      },
    });
  };
  //!-- ==========Update Page Method End ========== -->

  //!-- ==========Service Page Method Start========== -->

  // to get api data
  const getServices = async url => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({
        type: "Get_Services",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //automatic call api
  useEffect(() => {
    getServices(API);
  }, []);

  //!-- ==========Service Page Method  End========== -->

  return (
    <AppContext.Provider
      value={{ ...state, updateHomePage, updatAboutPage, getServices }}
    >
      {children}
    </AppContext.Provider>
  );
};

//!create custom hooks
export const useStateContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
