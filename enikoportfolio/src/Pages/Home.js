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
import { Image, ImageContainer } from "../Ui";

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
  height: 100%;
  width: 100%;
  padding-top: 50px;
  background: url("https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80");
  object-fit: fill;
`;

const Hello = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h2 {
    text-align: center;
    text-shadow: 1px 1px;
  }

  i {
    fill: papayawhip;
    font-size: 40px;
    -moz-animation: bounce 1s infinite linear;
    -o-animation: bounce 1s infinite linear;
    -webkit-animation: bounce 1s infinite linear;
    animation: bounce 1s infinite linear;
    position: relative;
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

      <SectionContainer color="#e8505b">
        <a name="home"></a>
        <Progress progress={scrollPercentage + "%"} />
        <HomeContainer>
          <Hello>
            <h2>Hello! My name is Eniko and I create shitty websites.<br/></h2>
            <i class="fas fa-angle-double-down"></i>
          </Hello>
        </HomeContainer>
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
