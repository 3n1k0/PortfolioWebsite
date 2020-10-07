import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";
import { device } from "../mediaquery";
import UploadcareImage from "../UploadcareImage";
import ToolsandSkills from "./Tools";

const PortfolioButton = styled.a`
  width: 150px;
  height: 44px;
  border: none;
  outline: none;
  border-radius: 6px;
  color: papayawhip;
  font-size: 16px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.4);
  font-family: "Raleway";
  cursor: pointer;
  color: papayawhip;
  background-color: #1863c4;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Raleway";
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 5px;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    margin: 30px;
  }
`;

const Tools = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 3, 0.2);
  border-radius: 6px;
  height: 100%;
  padding: 20px;
  margin: 20px;
  text-decoration: none;

  h1 {
    padding: 20px;
    text-align: center;
  }

  @media ${device.desktop} {
    width: 60%;
  }
`;

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  ul {
    list-style: none;
    color: papayawhip;
    text-align: center;
    font-size: 19px;
    line-height: 27px;
    letter-spacing: -0.56px;
    font-style: normal;
  }
`;

const Projects = styled.div`
  display: grid;

  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.84px;
    font-style: normal;
    opacity: 0.8;
  }

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  border-radius: 20px;
  background: transparent;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: papayawhip;
  width: 430px;
  height: 450px;
  padding: 20px;
  margin: 30px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }

  @media ${device.desktop} {
    padding: 40px;
    margin: 50px;
    width: 550px;
    height: 550px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.p`
  text-align: center;
  width: 100%;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer>
        <a name="portfolio"></a>
        <PortfolioContainer>
          <h2 data-aos="fade-right">Featured projects</h2>

          <Projects data-aos="zoom-in-down">
            <div class="container">
              <Card>
                <CardBody>
                  <h3 class="card-title">Responsive photography website </h3>
                  <UploadcareImage uuid="67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0" />
                </CardBody>
                <CardText>
                  A single page website built to showcase responsive web
                  development and mobile design skills. Optimized SEO.
                  <br />
                  <br />
                  Skillset:
                  <br />
                  HTML&nbsp;&nbsp;|&nbsp;&nbsp; CSS - Media Queries
                  &nbsp;&nbsp;| React&nbsp;&nbsp; | &nbsp;&nbsp; VSCode
                </CardText>
                <PortfolioButton href="https://anniekostolany.com">
                  <p>Visit website</p>
                </PortfolioButton>
              </Card>
            </div>

            <div class="container">
              <Card>
                <CardBody>
                  <h3 class="card-title">COVID-19 Information Website </h3>
                  <UploadcareImage uuid="6e552d8d-3b2c-41a9-a601-e95fcc00aaf7" />
                  <p class="card-text">
                    A single page website built to apply Responsive Web Design
                    skills alongside with API integration.
                  </p>
                  Skillset:
                  <br />
                  HTML&nbsp;&nbsp;|&nbsp;&nbsp; CSS | API Integration
                  &nbsp;&nbsp;| React&nbsp;&nbsp; | RESTful services
                  <PortfolioButton href="https://github.com/3n1k0/Covid19-information">
                    <p>
                      See on GitHub <i class="fab fa-github"></i>
                    </p>
                  </PortfolioButton>
                </CardBody>
              </Card>
            </div>

            <div class="container">
              <Card>
                <CardBody>
                  <h3 class="card-title">RGB Colorgame </h3>
                  <UploadcareImage uuid="b7b481db-dae3-4c48-9b52-48308b077342" />

                  <p class="card-text">
                    A simple game to teach about the RGB color model.
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | JavaScript | VSCode
                  </p>

                  <PortfolioButton href="https://github.com/3n1k0/Color-Guessing-Game">
                    <p>
                      See on GitHub <i class="fab fa-github"></i>
                    </p>
                  </PortfolioButton>
                </CardBody>
              </Card>
            </div>

            <div class="container">
              <Card>
                <CardBody>
                  <h3 class="card-title">Cat Memory Game </h3>
                  <UploadcareImage uuid="66d89e57-f70f-4bd1-bc4a-75446629affb" />
                  <p class="card-text">
                    A JavaScript game.
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | SASS | JavaScript | VSCode
                  </p>

                  <PortfolioButton href="https://github.com/3n1k0/The-Cat-Memory-Game">
                    <p>
                      See on GitHub <i class="fab fa-github"></i>
                    </p>
                  </PortfolioButton>
                </CardBody>
              </Card>
            </div>
          </Projects>
          <ToolsandSkills />
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
