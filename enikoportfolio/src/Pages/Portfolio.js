import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";
import "../cards.css";

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  img {
    max-width: 500px;
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
    color: black;
    text-align: center;
    font-size: 23px;
  }
`;

const ProjectDetails = styled.div`
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  visibility: none;
  opacity: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    li {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      list-style: none;
      font-size: 25px;
      letter-spacing: 1px;
    }
  }
`;

const Projects = styled.div`
display: flex;

`

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer>
        <a name="portfolio"></a>
        <PortfolioContainer>
          <h2>Featured projects</h2>

          <Projects>
            {" "}
            <div class="container">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Responsive photography website </h5>
                  <p class="card-text">
                    REACT / CSS / JSX
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
                  <h5 class="card-title">Responsive portfolio website </h5>
                  <p class="card-text">
                    REACT / CSS / JSX
                    <h1>Features</h1>
                    <img
                      alt="Project1"
                      src={
                        "https://ucarecdn.com/a66c973c-23ca-4c56-a178-b263080a3907/-/preview/-/format/webp/"
                      }
                      loading="lazy"
                    ></img>
                    <li>Optimized SEO</li>
                    <li>Responsive minimalist design</li>
                    <li>Uses React</li>
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <ul>
              <li>HTML, CSS & Bootstrap</li>
              <li>Wordpress, Squarespace</li>
              <li>HTML, CSS & Bootstrap</li>
              <li>Heroku & Netlify</li>
              <li>Goorm IDE</li>
              <li>VS Code</li>
            </ul>
          </Projects>
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
