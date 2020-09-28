import styled from "styled-components/macro";
import React from "react";
import SectionContainer from "../SectionContainer";
import { Button } from "./Contact";
import { device } from "../mediaquery";

const AboutContainer = styled.div`
  width: 100%;
  max-height: 140vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 60vh;
  }
    @media ${device.tablet} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-height: 60vh;
  }
`;

const Description = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center

  h1 {
    color: black;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  color: papayawhip;
  text-align: center;
  font-size: 19px;
  line-height: 1.5;

  @media ${device.desktop}{
    width: 80%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 0%;

    @media ${device.desktop} {
      width: 250px;
      border-radius: 50%;
    }

    @media ${device.tablet} {
      width: 250px;
      border-radius: 50%;
    }
  }
`;

class About extends React.Component {
  render() {
    return (
      <SectionContainer>
        <a name="about"></a>
        <h2>About me</h2>
        <AboutContainer>
          <Description>
            <TextBox>
              My name is Eniko and I am a Web Developer based in Amsterdam. My
              passion is to create dynamic and intuitive user experience. I love
              new technologies and always invested in bringing unique ideas into
              life by building highly functioning websites and applications.
              <br /> Contributing to the creation of user-centered high-quality
              products is what drives my work ethic. <br /> <br /> I am a
              resourceful problem solver with great attention to detail. I am
              constantly learning new technologies and methodologies in order to
              help businesses grow.
              <br /> <br />
              <Button style={{marginTop:"30px"}} a href="http://eniko.dev/assets/eniko-kosztolanyi-CV.pdf">
                Download my CV<i class="fas fa-download"></i>
              </Button>
            </TextBox>
          </Description>
          <Wrapper>
            <img
              alt="Eniko Kosztolanyi"
              src={
                "https://ucarecdn.com/4d78fa47-41cd-4dfa-97e5-79ce16fc0070/-/preview/-/format/webp/"
              }
              loading="lazy"
            ></img>
          </Wrapper>
        </AboutContainer>
      </SectionContainer>
    );
  }
}

export default About;
