import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";
import "../cards.css";

const ServiceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Tools = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  width: 100%;
`;

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  img {
    max-width: 500px;
    padding-bottom: 40px;
  }

  h2 {
    color: black;
    text-align: center;
    padding-bottom: 50px;
    padding-top: 50px;
    color: black;
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
    font-size: 24px;
    font-weight: 100;
    line-height: 1.5;
    letter-spacing: 0.84px;
    font-style: normal;
    text-transform: uppercase;
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
                  <p class="card-text">
                    <img
                      alt="Project2"
                      src={
                        "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
                      }
                      loading="lazy"
                    ></img>

                    <ul>
                      <li>Optimized SEO</li>
                      <li>Responsive minimalist design</li>
                      <li>Uses React</li>
                    </ul>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Visit website
                  </a>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Responsive photography website </h4>
                  <p class="card-text">
                    <img
                      alt="Project2"
                      src={
                        "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
                      }
                      loading="lazy"
                    ></img>
                    <ul>
                      <li>Optimized SEO</li>
                      <li>Responsive minimalist design</li>
                      <li>Uses React</li>
                    </ul>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Responsive photography website </h4>
                  <p class="card-text">
                    <img
                      alt="Project2"
                      src={
                        "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
                      }
                      loading="lazy"
                    ></img>
                    <ul>
                      <li>Optimized SEO</li>
                      <li>Responsive minimalist design</li>
                      <li>Uses React</li>
                    </ul>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Responsive photography website </h4>
                  <p class="card-text">
                    <img
                      alt="Project2"
                      src={
                        "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
                      }
                      loading="lazy"
                    ></img>
                    <ul>
                      <li>Optimized SEO</li>
                      <li>Responsive minimalist design</li>
                      <li>Uses React</li>
                    </ul>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </Projects>
          <Tools>
            <h1>Technologies and Tools</h1>
            <IconContainer>
              <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js-square"></i>
              <i class="fab fa-react"></i>
              <i class="fab fa-git-alt"></i>
              <i class="fab fa-node"></i>

              <i class="fab fa-sass"></i>
            </IconContainer>
          </Tools>

          <ServiceWrapper>
            <h1>Services</h1>
            <IconContainer></IconContainer>
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
