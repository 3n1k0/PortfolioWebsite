import React, { lazy } from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";
import Typewriter from "typewriter-effect";
import GlobalStyle from "../globalStyles";

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 100% 100;
  filter: brightness(60%);
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
  font-size: 0.8em;
  top: 60%;
  padding: 20px;
  font-weight: 900;
  font-style: italic;
  padding: 10px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 1em;
    text-align: right;
    padding-right: 50px;
  }
  @media ${device.desktop} {
    font-size: 3.5em;
    text-align: right;
    padding-right: 50px;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <GlobalStyle />
        <MainImageContainer>
          <MainImage src="https://ucarecdn.com/6b826330-9ead-430b-86a7-9b14bfcb9b85/-/preview/-/format/webp/"></MainImage>
          <OverlayText>
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                deleteSpeed: 21,
                delay: 80,
              }}
              onInit={(typewriter) => {
                typewriter
                .typeString()
                .pauseFor(1000)
                .typeString('Hello! I\'m Enikő. <br /> I\'m  a photographer  <br /> & web-developer.')
                .pauseFor(2000)
                .deleteChars(38)
                .typeString('I create websites that are <br /> <strong>beautiful</strong>')
                .pauseFor(500)
                .deleteChars(9)
                .typeString('<strong>fast</strong>')
                .pauseFor(500)
                .deleteChars(4)
                .pauseFor(500)
                .typeString('<strong>responsive</strong>')
                .pauseFor(500)
                .deleteChars(11)
                .typeString('<strong>easy to use.</strong>')
                .start();
                  
              }}
            />
          </OverlayText>
        </MainImageContainer>
      </div>
    );
  }
}

export default Home;
