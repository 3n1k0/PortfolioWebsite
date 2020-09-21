import React, { lazy, useEffect, useState, useRef } from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import Typewriter from "typewriter-effect";
import GlobalStyle from "../globalStyles";
import Progress from "../Progress";
import Navigation from "./Navigation";
import About from "./Aboutme";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import SectionContainer from "../SectionContainer";
import useScrollPosition from "../useScrollPosition";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% 100;
  filter: brightness(50%);
  position: fixed;
`;

const MainImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
`;

const OverlayText = styled.div`
  position: relative;
  color: white;
  font-family: "Raleway", sans-serif;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 2em;
  top: 60%;
  padding: 40px;
  font-weight: 900;
  font-style: italic;
  text-align: center;

  @media ${device.tablet} {
    font-size: 3em;
    text-align: right;
    padding-right: 50px;
  }
  @media ${device.desktop} {
    font-size: 3.5em;
    text-align: right;
    padding-right: 100px;
  }
`;

const Home = () => {
  const mainContainerRef = useRef(null);
  const scrollPercentage = useScrollPosition({ elementRef: mainContainerRef });

  return (
    <MainContainer ref={mainContainerRef}>
      <GlobalStyle />
      <Navigation />
      <SectionContainer>
        <a name="home"></a>
        <Progress progress={scrollPercentage + "%"} />
      </SectionContainer>

      <SectionContainer>
        <Portfolio />
      </SectionContainer>
      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </MainContainer>
  );
};

export default Home;
