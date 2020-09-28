import React from "react";
import styled from "styled-components/macro";

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
`

const Text = styled.div`
font-family: 'Raleway';
font-size: 15px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 80px;
`;
const IconContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  i {
    color: papayawhip;
    padding: 30px 70px;

    p {
      font-size: 20px;
      font-family: "Raleway";
      padding-top: 20px;
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
          <InsideWrapper a href="mailto:eniko.kosztolanyi@gmail.com">
            <i class="far fa-envelope"></i>
            <Text></Text>
          </InsideWrapper>

          <InsideWrapper>
            <i class="fas fa-mobile-alt"></i>
            <Text>+31647880400</Text>
          </InsideWrapper>

          <InsideWrapper>
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
