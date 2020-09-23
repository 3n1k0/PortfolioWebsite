import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  h2 {
    text-align: center;
    padding-top: 60px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
`;

const ProjectImage = styled.img`
    width: 500px;
    height: 400px;

    &:hover {
      filter: brightness(70%);
    }
`;

const ProjectDescription = styled.div`
  background-color: #f9d56e;
  width: 500px;
  max-height: 400px;
  border: 2px solid black;
`;

class Portfolio extends React.Component {
  render() {
    return (
      <SectionContainer color="#f9d56e">
        <a name="portfolio"></a>
        <PortfolioContainer>
          <h2>Projects</h2>
          <ProjectContainer>
            <ProjectImage
              alt="Project1"
              src={`https://ucarecdn.com/ca53983a-1dc1-48f6-bc21-7cfde7943e69/-/preview/-/format/auto/`}
              loading="lazy"
            ></ProjectImage>
            <ProjectDescription></ProjectDescription>
          </ProjectContainer>
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
