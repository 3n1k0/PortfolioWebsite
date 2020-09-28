import styled from "styled-components/macro";
import { fonts } from "./config";
import { device } from "./mediaquery";

const SectionContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  background: ${({ color }) => color};
  //scroll-snap-align: start;
  position: relative;

  h2 {
    font-size: 50px;
    letter-spacing: 0px;
    text-transform: none;
    line-height: 1em;
    font-family: ${fonts.titles};
    text-align: center;

    color: papayawhip;
    text-align: center;
    padding-bottom: 50px;
    opacity: 0.8;
  }

  @media ${device.desktop} {
    width: 100%;
    min-height: 80vh;
    background: ${({ color }) => color};
    //scroll-snap-align: start;
    position: relative;
  }
`;

export default SectionContainer;
