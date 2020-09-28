import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";
import "../cards.css";

const ServiceWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: rgba(0, 0, 3, 0.2);
  border-radius: 6px;
  padding: 40px;
  margin: 40px;
`;

const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 30px;
  align-items: center;
  justify-content: center;
`;

const Tools = styled.div`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: rgba(0, 0, 3, 0.2);
  border-radius: 6px;
  height: 100%;
  padding: 40px;
  margin: 40px;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  color: papayawhip;
  font-size: 80px;

  i {
    padding: 20px;
  }

  p {
    font-size: 20px;
  }
`;

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  img {
    padding-bottom: 40px;
    width: 100%;
  }

  h2 {
    color: papayawhip;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 50px;
    opacity: 0.8;
  }

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
  grid-template-columns: 1fr 1fr;

  h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.84px;
    font-style: normal;
    opacity: 0.8;
    /* text-transform: uppercase; */
  }
`;

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer>
        <a name="portfolio"></a>
        <PortfolioContainer>
          <h2>Featured projects</h2>

          <Projects>
          <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Responsive photography website </h4>
                  <img
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></img>
                  <p class="card-text">
                    A singlepage website built to showcase photography portfolio. Responsive designed and optimized SEO.
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | CSS - Media Queries | VSCode
                  </p>
                  <a href="https://anniekostolany.com" class="btn btn-primary">
                    Visit website
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Responsive portfolio website </h4>
                  <img
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/6e552d8d-3b2c-41a9-a601-e95fcc00aaf7/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></img>
                  <p class="card-text">
                    A singlepage website built to apply Responsive Web Design
                    skills.
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | CSS - Media Queries | VSCode
                  </p>
                  <a href="https://github.com/3n1k0/PortfolioWebsite" class="btn btn-primary">
                  See on GitHub <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">RGB Color Guessing Game </h4>
                  <img
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/b7b481db-dae3-4c48-9b52-48308b077342/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></img>
                  <p class="card-text">
                    A simple game to teach how RGB colors work. 
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | JavaScript | VSCode
                  </p>
                  <a href="https://github.com/3n1k0/Color-Guessing-Game" class="btn btn-primary">
                    See on GitHub <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Cat Memory Game </h4>
                  <img
                    alt="Project2"
                    src={
                      "https://ucarecdn.com/66d89e57-f70f-4bd1-bc4a-75446629affb/-/preview/-/format/webp/"
                    }
                    loading="lazy"
                  ></img>
                  <p class="card-text">
                    A singlepage website built to apply Responsive Web Design
                    skills.
                    <br />
                    Technologies and tools used:
                    <br />
                    HTML | SASS | JavaScript | VSCode
                  </p>
                  <a href="https://github.com/3n1k0/The-Cat-Memory-Game" class="btn btn-primary">
                  See on GitHub <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

          </Projects>
          <Tools>
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
                <p>Netlify </p>
              </Wrap>
            </IconContainer>
          </Tools>

          <ServiceWrapper>
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

          {/* <ul>
              <li>HTML, CSS & Bootstrap</li>
              <li>Wordpress, Squarespace</li>
              <li>HTML, CSS & Bootstrap</li>
              <li>Heroku & Netlify</li>
              <li>Goorm IDE</li>
              <li>VS Code</li>
            </ul> */}
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
