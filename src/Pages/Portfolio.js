import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";
import { device } from "../mediaquery";
import UploadcareImage from "../UploadcareImage";
import ToolsandSkills from "./Tools";

const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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

const Projects = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  width: 80%;

  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.84px;
    font-style: normal;
    opacity: 0.8;
  }

  @media ${(device.desktop, device.tablet)} {
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
  width: 85%;

  padding: 20px;
  margin: 30px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }

  @media ${device.desktop} {
    padding: 40px;
    margin: 50px;
    max-width: 500px;
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
  padding-bottom: 10px;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer>
        <a name="portfolio"></a>
        <PortfolioContainer>
          <h2 data-aos="fade-right">Featured projects</h2>

          <Projects data-aos="zoom-in-down">
            <Card>
              <CardBody>
                <h3 class="card-title">Responsive photography website </h3>
                <UploadcareImage uuid="0df2c7b6-a815-4c86-a70b-c768a865626f" />
              </CardBody>
              <CardText>
                A single page website built showcasing professional photography
                portfolio and responsive web development combined with mobile
                design skills. Optimized SEO.
                <br />
                <br />
                Skillset:
                <br />
                &nbsp;&nbsp;HTML&nbsp;&nbsp;| &nbsp;&nbsp;CSS - Media Queries
                &nbsp;&nbsp;|&nbsp;&nbsp; React&nbsp;&nbsp;|&nbsp;&nbsp;
                VSCode&nbsp;&nbsp;
              </CardText>
              <PortfolioButton
                target="_blank"
                rel="noreferrer noopener"
                href="https://anniekostolany.com"
              >
                <p>Visit website</p>
              </PortfolioButton>
            </Card>

            <Card>
              <CardBody>
                <h3 class="card-title">COVID-19 Information Website </h3>
                <UploadcareImage uuid="f72095fc-953d-478d-bd03-578ad3dded09" />
              </CardBody>
              <CardText>
                A single page website built to apply Responsive Web Design
                skills alongside with API integration.
                <br />
                <br />
                Skillset:
                <br />
                RESTful API&nbsp;&nbsp;| &nbsp;&nbsp;HTML &nbsp;&nbsp;|
                &nbsp;&nbsp;CSS - Media Queries&nbsp;&nbsp;|
                &nbsp;&nbsp;React&nbsp;&nbsp;
              </CardText>
              <PortfolioButton
                target="_blank"
                rel="noreferrer noopener"
                href="https://5f7e216a97b0fa0dc8f4f09a--project-covid-19-2020.netlify.app/"
              >
                <p>Visit website</p>
              </PortfolioButton>
            </Card>

            <Card>
              <CardBody>
                <h3 class="card-title">RGB Colorgame </h3>
                <UploadcareImage uuid="b7b481db-dae3-4c48-9b52-48308b077342" />

                <p class="card-text">
                  A simple game to teach about the RGB color model.
                  <br />
                  Technologies and tools used:
                  <br />
                  HTML&nbsp;&nbsp; |&nbsp;&nbsp; JavaScript&nbsp;&nbsp;
                  |&nbsp;&nbsp; VSCode
                </p>
                <PortfolioButton
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/3n1k0/Color-Guessing-Game"
                >
                  <p>
                    See on GitHub <i class="fab fa-github"></i>
                  </p>
                </PortfolioButton>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 class="card-title">Cat Memory Game </h3>
                <UploadcareImage uuid="66d89e57-f70f-4bd1-bc4a-75446629affb" />
                <p class="card-text">
                  A JavaScript game.
                  <br />
                  Technologies and tools used:
                  <br />
                  HTML&nbsp;&nbsp; | &nbsp;&nbsp;SASS&nbsp;&nbsp; |&nbsp;&nbsp;
                  JavaScript &nbsp;&nbsp;| &nbsp;&nbsp;VSCode
                </p>

                <PortfolioButton
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/3n1k0/The-Cat-Memory-Game"
                >
                  <p>
                    See on GitHub <i class="fab fa-github"></i>
                  </p>
                </PortfolioButton>
              </CardBody>
            </Card>
          </Projects>
          <ToolsandSkills />
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
