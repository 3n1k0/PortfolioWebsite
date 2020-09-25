import styled from "styled-components/macro";

 const SectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({color}) => color};
  //scroll-snap-align: start;
  position: relative;



  h2 {
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1.2em;
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

  }
`;

export default SectionContainer;