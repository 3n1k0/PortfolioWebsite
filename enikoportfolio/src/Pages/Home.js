import React, { lazy } from "react";
import { device } from "../mediaquery";
import styled from "styled-components/macro";

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
`;

const OverlayText = styled.div`
position: absolute;
right: 50px;
top: 100px;
color: white;
`

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <MainImageContainer>
          <MainImage src="https://ucarecdn.com/6b826330-9ead-430b-86a7-9b14bfcb9b85/-/preview/-/format/webp/"></MainImage>
        </MainImageContainer>
        <OverlayText>
          <h1>
            Hello, my name is Enikő.
            <br /> I'm a freelance photographer & frontend developer.
          </h1>
        </OverlayText>
      </div>
    );
  }
}

export default Home;
