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
width: 80%;
height: 80%;
padding: 40px;
position: relative;
`

const TextBox = styled.div`
width: 90%;
height: 60%;
background: white;
color: black;
border-radius: 10px;
text-align: center;
position: absolute;
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
              labore eu ullamco. Ex proident nisi aliquip anim officia duis
              aute. Culpa eiusmod cillum ipsum ea in cillum fugiat tempor nisi
              aliquip dolor ad tempor aliqua. Cupidatat eu qui aliquip Lorem.
              Consequat non duis cillum nisi commodo. Dolor sunt magna excepteur
              ullamco amet anim adipisicing officia. Lorem id elit sint id
              laboris incididunt ipsum reprehenderit nulla ea ea. Proident
              officia ea dolore labore sint. Sint elit ea magna nisi dolore non
              velit sint sunt in dolor. Anim mollit deserunt incididunt
              cupidatat et ea nulla irure magna. Anim occaecat id laboris
              consequat consectetur laborum deserunt adipisicing voluptate
              proident eu reprehenderit. Laborum commodo velit quis cupidatat
              cillum mollit qui ea dolor occaecat anim minim. Minim deserunt sit
              tempor deserunt excepteur incididunt non dolor do enim non.
              Consectetur ut esse est consectetur ullamco magna cillum magna
              laborum culpa exercitation proident laboris. Cillum sunt sit
              aliquip esse sit consectetur ex aliquip veniam laborum
              reprehenderit eiusmod pariatur esse. Consequat do reprehenderit
              cupidatat pariatur quis nulla et aliquip incididunt aliqua.
              Commodo ipsum cupidatat velit proident id reprehenderit occaecat
              incididunt anim. Consequat quis laborum quis tempor mollit. Et
              dolore ex eu veniam qui ipsum consectetur.
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
