import styled from "styled-components/macro";
import React from "react";
import SectionContainer from "../components/SectionContainer";
import { device } from "../config/mediaquery";

const AboutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  overflow: hidden;

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
  text-align: center;
  
  h1 {
    color: black;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  color: papayawhip;
  text-align: left;
  font-size: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    width: 60%;
  }
`;

const DownloadCV = styled.a`
  width: 250px;
  height: 45px;
  border: none;
  outline: none;
  box-shadow: 0 3px 2px 0 grey;
  color: #fff;
  font-size: 14px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  margin-bottom: 40px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  i {
    padding-left: 20px;
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
    width: 400px;
  }
`;

class About extends React.Component {
  render() {
    return (
      <SectionContainer>
        <a href="/about" name="about"> </a>
        <h2 data-aos="fade-right">About me</h2>
        <AboutContainer>
          <Description>
            <TextBox data-aos="fade-up">
              <p>
                {" "}
                I'm Eniko and I am a web developer based in Amsterdam. My
                passion is to create dynamic and intuitive user experience. I
                love new technologies and always invested in bringing unique
                ideas into life by building highly functioning websites and
                applications.
              </p>
              <p>
                Contributing to the creation of user-centered high-quality
                products is what drives my work ethic.
              </p>
              <p>
                I am a resourceful problem solver with great attention to
                detail, who's constantly learning new technologies and
                methodologies in order to help businesses grow.
              </p>
              <DownloadCV
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "30px" }}
                a
                href="http://eniko.dev/eniko-kosztolanyi-CV.pdf"
              >
                Download my CV<i class="fas fa-download"></i>
              </DownloadCV>
            </TextBox>
          </Description>
          <Wrapper data-aos="fade-down">
            <picture>
              <img src="//ucarecdn.com/4d78fa47-41cd-4dfa-97e5-79ce16fc0070/-/format/auto/" alt="eniko-kosztolanyi" />
            </picture>
          </Wrapper>
        </AboutContainer>
      </SectionContainer>
    );
  }
}

export default About;
