import styled from "styled-components/macro";
import React from "react";
import SectionContainer from "../SectionContainer";
import { fonts } from "../config";
import { Button } from "./Contact";

const AboutContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding-top: 190px;

  img {
    width: 300px;
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
  color: black;
  border-radius: 10px;
  text-align: center;
  font-size: 25px;
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

        <hr />
        <AboutContainer>
          <Description>
            <TextBox>
              Aute et consequat voluptate proident sunt nisi nisi. Dolor culpa
              quis culpa non quis aliquip incididunt deserunt consectetur esse
              sunt.
              <br /> Deserunt qui ex ipsum nostrud Lorem exercitation anim aute
              proident consectetur. Quis incididunt qui cillum enim sint minim
              aliquip dolore cillum dolor tempor aute. <br /> <br />
              Dolore eiusmod in voluptate culpa culpa aute commodo qui. <br />
              <br /> In quis velit duis ullamco irure esse id Lorem cillum
              cupidatat do consectetur. <br />
              <br />
              <Button a href="">
                Download my CV<i class="fas fa-download"></i>
              </Button>
            </TextBox>
          </Description>
          <Wrapper>
            <img
              alt="Project1"
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
