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
import SectionContainer from "../SectionContainer";
import Progress from "../Progress";


const AboutContainer = styled.div`
width: 100%;
height: 100%;
background: url('https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1933&q=80');

`


class About extends React.Component {
  render() {
    return (

        <SectionContainer color="#f3ecc2">
        <a name="about"></a>
        <AboutContainer>

        </AboutContainer>
        </SectionContainer>

    );
  }
}

export default About;
