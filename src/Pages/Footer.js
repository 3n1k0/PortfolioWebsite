import React from "react";
import styled from "styled-components/macro";
import { device } from "../mediaquery";

const FooterText = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway";
  font-weight: 100;
  margin-top: 80px;
`;

const InsideWrapper = styled.a`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-decoration: none;
`;

const Text = styled.div`
  font-family: "Raleway";
  font-size: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 80px;
  text-align: center;
  overflow: hidden;

  p {
    width: 80%;

    @media ${device.desktop} {
      width: 100%;
    }
  }
`;

const IconContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${device.desktop} {
    justify-content: center;
  }
  i {
    color: papayawhip;
    padding: 30px 30px;
    font-size: 50px;

    &:hover {
      text-decoration: none;
    }

    p {
      font-size: 15px;
      font-family: "Raleway";
      padding-top: 40px;
    }

    @media ${device.desktop} {
      width: 100%;
      font-size: 100px;
    }
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>Let's work together!</h1>
        <p>
          Do you have a project in mind or would you like me to join your team?
          Don't hesitate to contact me:
        </p>

        <IconContainer>
          <InsideWrapper
            a
            aria-label="Click here to send me an email"
            href="mailto:eniko.kosztolanyi@gmail.com"
            rel="noreferrer noopener"
          >
            <i class="far fa-envelope" aria-hidden="true"></i>
          </InsideWrapper>

          <InsideWrapper
            rel="noreferrer noopener"
            aria-label="Reach me via phone"
          >
            <i class="fas fa-mobile-alt" aria-hidden="true"></i>
            <Text>+31647880400</Text>
          </InsideWrapper>

          <InsideWrapper
            rel="noreferrer noopener"
            aria-label="I am based in Amsterdam."
          >
            <i class="fas fa-map-marked"></i>
            <Text>Amsterdam, Netherlands</Text>
          </InsideWrapper>
        </IconContainer>

        <FooterText>Designed and coded with ❤︎ by Enikő.</FooterText>
      </Wrapper>
    );
  }
}

export default Footer;
