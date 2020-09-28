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

const UpArrowWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 70px;
  right: 30px;
  font-size: 50px;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
`;

const OverlayText = styled.div`
  position: relative;
  color: white;
  font-size: 15px;
  padding: 10px;
  font-family: "Courier New", monospace;
  text-align: center;

  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.desktop} {
    font-size: 15px;
  }
`;

const HomeContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  min-height: 100vh;
`;

const Hello = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  font-size: 50px;

  h2 {
    text-align: center;
    text-shadow: 1px 1px;
    font-family: ${fonts.others};
  }

  i {
    fill: papayawhip;
    font-size: 38px;
    -moz-animation: bounce 1s infinite linear;
    -o-animation: bounce 1s infinite linear;
    -webkit-animation: bounce 1s infinite linear;
    animation: bounce 1s infinite linear;
    position: relative;
    padding-top: 100px;
  }

  @-webkit-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-moz-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-o-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-ms-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
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
        <HomeContainer>
          <Hello>
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
                  .typeString("Hello, I'm Enikő! <br/> ")
                  .typeString("I'm a FrontEnd Developer")

                  .pauseFor(1000)
                  .deleteChars(18)
                  .pauseFor(500)
                  .typeString("Problem Solver")
                  .pauseFor(500)
                  .deleteChars(14)
                  .pauseFor(500)
                  .typeString("Creative")
                  .deleteChars(8)
                  .pauseFor(500)
                  .typeString("Fast Learner")
                  .pauseFor(500);
              }}
            />
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
      <UpArrowWrapper>
        <i
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          class="fas fa-arrow-circle-up"
        ></i>
      </UpArrowWrapper>
      <Footer />
    </MainContainer>
  );
};

export default Home;
