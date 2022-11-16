import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <MainHeader>
        <NavLink>
          <div className="logo">Zaib Web Developer</div>
        </NavLink>
        <Navbar />
      </MainHeader>
    </>
  );
};

//!-----------This is Style Components Css-----------
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: ${({ theme }) => theme.colors.logo};
    max-width: 100%;
    font-size: 2rem;
    font-weight: 900;
  }
`;

export default Header;
