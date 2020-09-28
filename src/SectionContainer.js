import styled from "styled-components/macro";
import { fonts } from './config'

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
    line-height: 1em;
    font-family: ${fonts.titles};
    text-align: center;
  }


`;

export default SectionContainer;