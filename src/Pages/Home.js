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
import { fonts } from "../config";
import Footer from "./Footer";
import { BounceArrow } from "../BounceArrow.css";

const UpArrowWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 70px;
  right: 30px;
  font-size: 50px;
  cursor: pointer;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const HomeContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Hello = styled.div`
  display: grid;
  justify-items: center;

  span {
    display: none;
  }

  h2 {
    font-weight: 400;
    opacity: 1;
    padding-bottom: 0;
    margin: 0;
  }

  p {
    padding-top: 0;
    margin: 0;
    padding-bottom: 30px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 50px;
  }

  @media ${(device.desktop, device.tablet)} {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    text-align: center;
    font-size: 50px;
  }

  i {
    -moz-animation: bounce 1s infinite linear;
    -o-animation: bounce 1s infinite linear;
    -webkit-animation: bounce 1s infinite linear;
    animation: bounce 1s infinite linear;
    fill: papayawhip;
    font-size: 38px;
    position: relative;
    padding-top: 100px;
  }
`;

const Home = () => {
  const mainContainerRef = useRef(null);
  const scrollPercentage = useScrollPosition();

  return (
    // <MainContainer ref={mainContainerRef}>
    <>
      <GlobalStyle />

      <SectionContainer>
        <a name="home"></a>
        <Progress progress={scrollPercentage + "%"} />
        <HomeContainer>
          <Hello>
            <h2>Hello, I'm Enikő!</h2>
            <p>[ ˈɛnikøː]</p>
            <span>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 21,
                  delay: 80,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .start()
                    .typeString("I'm a <b>FrontEnd Developer</b>")

                    .pauseFor(1000)
                    .deleteChars(18)
                    .pauseFor(500)
                    .typeString("<b>Problem Solver</b>")
                    .pauseFor(500)
                    .deleteChars(14)
                    .pauseFor(500)
                    .typeString("<b>Creative</b>")
                    .pauseFor(500)
                    .deleteChars(8)
                    .pauseFor(500)
                    .typeString("<b>Fast Learner</b>")
                    .pauseFor(500);
                }}
              />
            </span>
            <i class="fas fa-angle-double-down"></i>
          </Hello>
        </HomeContainer>
      </SectionContainer>

      <SectionContainer>
        <About />
      </SectionContainer>

      <SectionContainer>
        <Portfolio />
      </SectionContainer>

      <SectionContainer>
        <Contact />
      </SectionContainer>

      <UpArrowWrapper style={{ opacity: scrollPercentage / 10 }}>
        <i
          onClick={() => {
            mainContainerRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          class="fas fa-arrow-circle-up"
        ></i>
      </UpArrowWrapper>

      <Footer />
      <Navigation />
    </>
  );
};

export default Home;
