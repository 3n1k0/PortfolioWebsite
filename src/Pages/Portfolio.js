import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";
import { device } from "../mediaquery";

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

const ServiceWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: rgba(0, 0, 3, 0.2);
  border-radius: 6px;
  padding: 40px;
  margin: 40px;
  text-decoration: none;

  @media ${device.desktop} {
    width: 60%;
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

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: papayawhip;
  font-size: 50px;

  i {
    padding: 30px;
    font-size: 67px;

    @media ${device.desktop} {
      padding: 20px;
    }
  }

  p {
    font-size: 15px;

    @media ${device.desktop} {
      font-size: 20px;
    }
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
const CardImage = styled.img`
  padding-bottom: 20px;
  width: 100%;
  height: width;
  filter: brightness(90%);
  max-width: 250px;
  max-height: 300px;

  @media ${device.desktop} {
    padding-bottom: 20px;
    width: 100%;
    max-width: 300px;
    max-height: 250px;
    filter: brightness(90%);
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
                  <CardImage
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></CardImage>
                </CardBody>
                <CardText>
                  A singlepage website built to showcase photography portfolio.
                  Responsive designed and optimized SEO.
                  <br />
                  Technologies and tools used:
                  <br />
                  HTML | CSS - Media Queries | VSCode
                </CardText>
                <PortfolioButton href="https://anniekostolany.com">
                  <p>Visit website</p>
                </PortfolioButton>
              </Card>
            </div>

            <div class="container">
              <Card>
                <CardBody>
                  <h3 class="card-title">Responsive photography website </h3>
                  <CardImage
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/6e552d8d-3b2c-41a9-a601-e95fcc00aaf7/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></CardImage>
                  <p class="card-text">
                    A singlepage website built to apply Responsive Web Design
                    skills.
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | CSS - Media Queries | VSCode
                  </p>

                  <PortfolioButton href="https://github.com/3n1k0/PortfolioWebsite">
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
                  <h3 class="card-title">Responsive photography website </h3>
                  <CardImage
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/b7b481db-dae3-4c48-9b52-48308b077342/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></CardImage>
                  <p class="card-text">
                    A simple game to teach how RGB colors work.
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
                  <h4 class="card-title">Responsive photography website </h4>
                  <CardImage
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/66d89e57-f70f-4bd1-bc4a-75446629affb/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></CardImage>
                  <p class="card-text">
                    A singlepage website built to apply Responsive Web Design
                    skills.
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
          <Tools data-aos="fade-down-right">
            <h1>Tools and Technologies</h1>
            <IconContainer>
              <Wrap>
                <i class="fab fa-html5"></i>
                <p>HTML </p>
              </Wrap>

              <Wrap>
                <i class="fab fa-css3-alt"></i>
                <p>CSS </p>
              </Wrap>
              <Wrap>
                <i class="fab fa-js-square"></i>
                <p>JavaScript </p>
              </Wrap>
              <Wrap>
                <i class="fab fa-react"></i>
                <p>React </p>
              </Wrap>
              <Wrap>
                <i class="fab fa-git-alt"></i>
                <p>Git </p>
              </Wrap>

              <Wrap>
                <i class="fab fa-node"></i>
                <p>Node </p>
              </Wrap>

              <Wrap>
                <i class="fab fa-squarespace"></i>
                <p>Squarespace </p>
              </Wrap>

              <Wrap>
                <i class="fab fa-sass"></i>
                <p>SASS </p>
              </Wrap>

              <Wrap>
                <i class="fas fa-database"></i>
                <p>MongoDB </p>
              </Wrap>

              <Wrap>
                <i class="fab fa-bootstrap"></i>
                <p>Bootstrap </p>
              </Wrap>
            </IconContainer>
          </Tools>

          <ServiceWrapper data-aos="fade-down-left">
            <h1>Services</h1>
            <IconContainer>
              <Wrap>
                <i class="fas fa-laptop-code"></i>
                <p>Web Development </p>
              </Wrap>
              <Wrap>
                <i class="fas fa-mobile-alt"></i>
                <p> Responsive Design </p>
              </Wrap>
              <Wrap>
                <i class="fas fa-search-location"></i>
                <p> SEO </p>
              </Wrap>
            </IconContainer>
          </ServiceWrapper>
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
