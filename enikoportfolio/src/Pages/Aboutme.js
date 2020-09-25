import styled from "styled-components/macro";
import React from "react";
import SectionContainer from "../SectionContainer";
import Progress from "../Progress";

const AboutContainer = styled.div`
  width: 100%;
  min-height: 150vh;
  background: url("https://images.unsplash.com/photo-1558346648-9757f2fa4474?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80");
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: center;

  h2 {
    color: black;
  }

  img {
    width: 200px;
    height: auto;

    border-radius: 50%;
  }
`;

const Description = styled.div`
  width: 90%;
  padding: 20px;
`;

const TextBox = styled.div`
  width: 90%;
  height: 100%;
  color: black;
  border-radius: 10px;
  text-align: center;

  padding: 20px;
  font-size: 25px;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 200px;
`;

const ListofSkills = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  padding-left: 50px;

  ul {
    list-style: none;
  }
`;

class About extends React.Component {
  render() {
    return (
      <SectionContainer color="#f3ecc2">
        <a name="about"></a>
        <AboutContainer>
          <Description>
            <h2>About me</h2>
            <TextBox>
              Aute et consequat voluptate proident sunt nisi nisi. Dolor culpa
              quis culpa non quis aliquip incididunt deserunt consectetur esse
              sunt. Deserunt qui ex ipsum nostrud Lorem exercitation anim aute
              proident consectetur. Quis incididunt qui cillum enim sint minim
              aliquip dolore cillum dolor tempor aute. Dolore eiusmod in
              voluptate culpa culpa aute commodo qui. In quis velit duis ullamco
              irure esse id Lorem cillum cupidatat do consectetur. Dolor ea ad
              laborum eu eiusmod quis ut anim nisi tempor et. Magna laborum
              nostrud dolore pariatur dolor sit commodo labore duis id. Pariatur
              tempor minim esse dolore et reprehenderit incididunt ad. Dolor ex
              in esse velit ipsum cillum dolor officia eiusmod magna commodo
              enim exercitation laborum. Eiusmod occaecat esse deserunt amet
              adipisicing labore.
            </TextBox>
          </Description>
          <Wrapper>
            <img
              alt="Project1"
              src={
                "https://ucarecdn.com/4d78fa47-41cd-4dfa-97e5-79ce16fc0070/-/preview/-/format/webp/"
              }
              loading="lazy"
            ></img>
            <ListofSkills>
              <ul>
                <li>nincs</li>
                <li>nem letezett</li>
                <li>nem is volt soha</li>
              </ul>
            </ListofSkills>
          </Wrapper>
        </AboutContainer>
      </SectionContainer>
    );
  }
}

export default About;
