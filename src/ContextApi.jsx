// To create context
import React, { createContext, useContext, useReducer } from "react";
import { Reducer } from "./Reducer";
const AppContext = createContext();

//! define intialState for useReducer
const intialState = {
  name: "",
  image: "",
};

const AppProvider = ({ children }) => {

  // !create useReducer hook
  const [state, dispatch] = useReducer(Reducer, intialState);

  //! this home page method 
  const updateHomePage = () => {
    return dispatch({
      type: "Home_Update",
      payload: {
        name: "Zaib Web Developer",
        image: "./images/hero.svg",
      },
    });
  };

  //! this is update page method
  const updatAboutPage = () => {
    return dispatch({
      type: "About_Update",
      payload: {
        name: "Zaib Web Designer",
        image: "./images/about1.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updatAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

//!create custom hooks
export const useStateContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
