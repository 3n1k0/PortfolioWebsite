import styled from "styled-components/macro";
import { fonts } from './config'

 const SectionContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  background: ${({color}) => color};
  //scroll-snap-align: start;
  position: relative;

padding: 30px;


  h2 {
    font-size: 60px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1em;
    font-family: ${fonts.titles};
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