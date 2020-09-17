import styled from "styled-components/macro";
import { Button, ButtonContainer, GoToTopButton, Image, ImageContainer, Text } from '../Ui'
import UploadcareImage from "../UploadcareImage";
import React from 'react'; 


const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  color: #585656;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-bottom: 50px;

  h2 {
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding-bottom: 30px;
    font-style: italic;
    text-align: center;
  }

  p {
    font-size: 18px;
    text-align: left;
    text-justify: inter-word;
    font-size: 1em;
    line-height: 1.5;
    letter-spacing: 0.005em;
    padding: 13.5px 0px;
  }
`;

class About extends React.Component {
  render() {
    return (
      <div className="About">

        <Container>
          <h2>hey there!</h2>
          <ImageContainer style={{ paddingBottom: "40px", marginTop: "40px" }}>

          <UploadcareImage
            uuid="6b826330-9ead-430b-86a7-9b14bfcb9b85"
            alt="Annie Kostolany professional photographer"
          />
          </ImageContainer>

          <Text>
      
             Hello bello
          </Text>
          </Container>
        <ButtonContainer>
            <Button to={"/contact"}> Contact Annie </Button>
            <GoToTopButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Go to top{" "}
            </GoToTopButton>
          </ButtonContainer>

      </div>
      
    );
  }
}

export default About;
