import styled from "styled-components/macro";
import {
  Button,
  ButtonContainer,
  GoToTopButton,
  Image,
  ImageContainer,
  Text,
} from "../Ui";
import UploadcareImage from "../UploadcareImage";
import React from "react";
import Container from "../SectionContainer";
import Progress from "../Progress";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <Container color="#246a73">
        <a name="about"></a>

          <h2>hey there!</h2>
          <ImageContainer style={{ paddingBottom: "40px", marginTop: "40px" }}>
            <UploadcareImage
              uuid="6b826330-9ead-430b-86a7-9b14bfcb9b85"
              alt="Eniko Kosztolanyi"
            />
          </ImageContainer>

          <Text>Hello bello</Text>
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
