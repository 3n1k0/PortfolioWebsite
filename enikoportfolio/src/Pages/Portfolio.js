import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    text-align: center;
    padding-top: 60px;
  }
`;

const ProjectContainer = styled.div`
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  &:hover {
    filter: brightness(60%);
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

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer color="#f9d56e">
        <a name="portfolio"></a>
        <PortfolioContainer>
          <h2>Projects</h2>
          <ProjectContainer>
            {" "}
            <ProjectImage
              alt="Project2"
              src={
                "https://ucarecdn.com/67aa2ecc-c09c-4aaa-aca7-0b2090ebe3e0/-/preview/-/format/webp/"
              }
              loading="lazy"
            ></ProjectImage>
            <ProjectDetails>
              <h1>Fast & responsive photography website</h1>
              <ul>
                <li>Optimized SEO</li>
                <li>Responsive minimalist design</li>
                <li>Uses React</li>
              </ul>
            </ProjectDetails>
          </ProjectContainer>

          <ProjectContainer>
            <a href="https://anniekostolany.com" target="_blank">
              <ProjectImage
                alt="Project1"
                src={
                  "https://ucarecdn.com/a66c973c-23ca-4c56-a178-b263080a3907/-/preview/-/format/webp/"
                }
                loading="lazy"
              ></ProjectImage>{" "}
            </a>
            <ProjectDetails>
              <h1>Developer portfolio website</h1>
              <ul>
                <li>Optimized SEO</li>
                <li>Responsive minimalist design</li>
                <li>Uses React</li>
              </ul>
            </ProjectDetails>
          </ProjectContainer>
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
