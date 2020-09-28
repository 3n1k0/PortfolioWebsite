import styled from "styled-components/macro";
import React from "react";
import SectionContainer from "../SectionContainer";
import { Button } from "./Contact";

const AboutContainer = styled.div`
  width: 85%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding-top: 40px;
  margin: 0 auto;

  img {
    width: 250px;
    height: auto;
    border-radius: 50%;
  }
`;

const Description = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h1 {
    color: black;
  }
`;

const TextBox = styled.div`
  width: 90%;
  height: 100%;
  color: papayawhip;
  border-radius: 10px;
  text-align: center;
  font-size: 19px;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  height: 100%;
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
              My name is Eniko and I am a Web Developer based in Amsterdam.
              My passion is to create dynamic and intuitive user experience.
             I love new technologies and always invested in bringing unique
              ideas into life by building highly functioning websites and
              applications.<br /> Contributing to the creation of user-centered high-quality
              products is what drives my work ethic. <br /> <br /> I am
              a resourceful problem solver with great attention to detail.
              I am constantly learning new technologies and methodologies in
              order to help businesses grow. 
              <br /> <br /> 
              <Button a href="http://eniko.dev/assets/eniko-kosztolanyi-CV.pdf">
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
