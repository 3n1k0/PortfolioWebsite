import styled from "styled-components/macro";

 const SectionContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background: ${({color}) => color};
  scroll-snap-align: start;
  position: relative;


  h2 {
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
    padding-bottom: 30px;
    font-style: italic;
    text-align: center;
  }

  p {
    font-size: 18px;
    text-align: left;
    text-justify: inter-word;
    font-size: 1em;
    line-height: 1.5;
    letter-spacing: 0.005em;
    padding: 13.5px 0px;
  }
`;

export default SectionContainer;