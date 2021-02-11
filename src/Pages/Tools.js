import React from "react";
import styled from "styled-components/macro";
import { device } from "../config/mediaquery";

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
  overflow: hidden;

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
  width: 85%;
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
    font-size: 45px;

    @media ${(device.desktop, device.tablet)} {
      font-size: 67px;
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

class ToolsandSkills extends React.Component {
  render() {
    return (
      <>
        <Tools>
          <h1 data-aos="fade-right">Tools and Technologies</h1>
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

        <ServiceWrapper>
          <h1 data-aos="fade-right">Services</h1>
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
      </>
    );
  }
}

export default ToolsandSkills;
