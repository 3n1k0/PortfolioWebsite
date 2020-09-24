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
  background: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80");
  display: flex;
  justify-content: center;
  padding-top: 60px;

  h2 {
    color: black;
    margin: 0;

  }

  /* img {
    width: 500px;
    height: auto;
    position: absolute;
    left: 100px;
    border-radius: 20%;

  } */
`;

const Description = styled.div`
background-color: white;
opacity: 0.7;
width: 90%;
height: 100%;
padding: 20px;

`

const TextBox = styled.div`
width: 90%;
height: 100%;
background: white;
color: black;
border-radius: 10px;
text-align: center;

padding: 20px;
font-size: 25px;
`


class About extends React.Component {
  render() {
    return (
      <SectionContainer color="#f3ecc2">
        <a name="about"></a>
        <AboutContainer>

          <Description>
          <h2>About me</h2>
            <TextBox>
              Aute et consequat voluptate proident sunt nisi nisi. Dolor culpa
              quis culpa non quis aliquip incididunt deserunt consectetur esse
              sunt. Deserunt qui ex ipsum nostrud Lorem exercitation anim aute
              proident consectetur. Quis incididunt qui cillum enim sint minim
              aliquip dolore cillum dolor tempor aute. Dolore eiusmod in
              voluptate culpa culpa aute commodo qui. In quis velit duis ullamco
              irure esse id Lorem cillum cupidatat do consectetur. Dolor ea ad
              laborum eu eiusmod quis ut anim nisi tempor et. Magna laborum
              nostrud dolore pariatur dolor sit commodo labore duis id. Pariatur
              tempor minim esse dolore et reprehenderit incididunt ad. Dolor ex
              in esse velit ipsum cillum dolor officia eiusmod magna commodo
              enim exercitation laborum. Eiusmod occaecat esse deserunt amet
              adipisicing labore. Incididunt qui est nisi dolore. Exercitation
              pariatur dolore sit in sunt ullamco eu dolore non laboris deserunt
              laborum proident. Veniam tempor est sint eiusmod officia irure
              laboris. Amet cupidatat dolore elit sit excepteur voluptate mollit
              dolore Lorem excepteur commodo ut. Do culpa in ea laborum. Nostrud
              elit sunt aliqua voluptate id reprehenderit ipsum amet nostrud
              nisi. Eu excepteur incididunt enim duis nisi laboris incididunt
              non esse velit magna duis. Aliquip exercitation consequat sit
              mollit. Ut duis minim sit officia culpa nisi magna culpa do
              commodo quis incididunt ex. Laborum occaecat minim sunt cillum.
              Veniam dolor aliqua anim deserunt nulla. Enim magna culpa dolor
              labore laboris ea Lorem exercitation pariatur. Laboris ea in
              voluptate esse eiusmod nisi ad id exercitation in. Aliqua sunt
              consectetur fugiat tempor qui aliqua labore. Dolore cillum ad esse
              Lorem. Exercitation excepteur occaecat proident occaecat nostrud
              adipisicing ea Lorem et non. Dolor aliquip aliqua fugiat
              incididunt sit. Nulla velit non cillum tempor elit cupidatat
              aliqua. Officia officia et Lorem aliqua proident laborum minim.
              Proident commodo labore do aute duis. Mollit consequat veniam esse
              irure nulla incididunt et irure occaecat qui est. Tempor
              incididunt proident non exercitation aute consectetur qui tempor
   
            </TextBox>
          </Description>
          {/* <img
            alt="Project1"
            src={
              "https://ucarecdn.com/6b826330-9ead-430b-86a7-9b14bfcb9b85/-/preview/-/format/webp/"
            }
            loading="lazy"
          ></img> */}
        </AboutContainer>
      </SectionContainer>
    );
  }
}

export default About;
