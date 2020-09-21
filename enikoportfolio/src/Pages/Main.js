import React, { lazy } from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import Typewriter from "typewriter-effect";
import GlobalStyle from "../globalStyles";
import Progress from "../Progress";
import Navigation from "./Navigation";
import About from "./Aboutme";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Element from "../SectionContainer";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
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

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <Section>
 
          <a name="home"></a>

            <GlobalStyle />
            <Navigation />
            {/* <Progress scroll="25%" /> */}

            <MainImageContainer>
              {/* <MainImage src="https://ucarecdn.com/6b826330-9ead-430b-86a7-9b14bfcb9b85/-/preview/-/format/webp/"></MainImage> */}
              <OverlayText>
                {/* <Typewriter
              options={{
                autoStart: true,
                loop: false,
                deleteSpeed: 10,
                delay: 80,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString()
                  .pauseFor(1000)
                  .typeString(
                    "Hello! I'm Enikő. <br /> I'm  a photographer  <br /> & web-developer."
                  )
                  .pauseFor(2000)
                  .deleteChars(38)
                  .typeString(
                    "I create websites <br />that look cute."
                  )
                  .pauseFor(500)
                  .deleteChars(10)
                  .typeString("<strong>are functional, <br /> responsive and beautiful. </strong>")
                  .pauseFor(500)
                  .start();
              }}
            /> */}
              </OverlayText>
            </MainImageContainer>

        </Section>

        <Section>
          <Portfolio />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Contact />
        </Section>
      </MainContainer>
    );
  }
}

export default Home;
