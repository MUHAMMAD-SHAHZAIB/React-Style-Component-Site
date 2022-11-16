import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        {/* for left side of hero section */}
        <div className="section-hero-data">
          <p className="hero-top-data">This is Me</p>
          <h1 className="hero-heading">Zaib Developer</h1>
          <p className="hero-para">
            {" "}
            I'm Mhuammad Shahzaib. A Full stack Developer, youtuber and
            freelancer. A Full stack Developer, youtuber and freelancer.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>

        {/* for right side of hero section */}
        <div className="section-hero-image">
          <picture>
            <img
              src="./images/hero.svg"
              alt="hero image"
              className="hero-img "
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

//!--------Components Styles-----------
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
`;

export default HeroSection;
