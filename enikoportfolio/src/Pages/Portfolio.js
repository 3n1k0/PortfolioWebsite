import React from "react";
import SectionContainer from "../SectionContainer";
import styled from "styled-components/macro";

const PortfolioContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;


  h2 {
    text-align: center;
    padding-top: 60px;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
display: grid;
 
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  &:hover {
    filter: brightness(60%);
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
            <a href="https://anniekostolany.com" target ="_blank"><ProjectImage
              alt="Project1"
              src={`https://ucarecdn.com/ca53983a-1dc1-48f6-bc21-7cfde7943e69/-/preview/-/format/auto/`}
              loading="lazy"
            ></ProjectImage></a>
          </ProjectContainer>
        </PortfolioContainer>
      </SectionContainer>
    );
  }
}

export default Portfolio;
