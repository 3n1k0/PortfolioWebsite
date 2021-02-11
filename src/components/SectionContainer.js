import styled from "styled-components/macro";
import { device } from "../config/mediaquery";

const SectionContainer = styled.div`
  width: 100%;
  background: ${({ color }) => color};
  position: relative;
  height: 100%;
  padding-top: 50px;

  h2 {
    font-size: 50px;
    letter-spacing: 0px;
    text-transform: none;
    text-align: center;
    color: papayawhip;
    text-align: center;
    padding-bottom: 50px;
    opacity: 0.5;
  }

  @media ${device.desktop} {
    width: 100%;
    background: ${({ color }) => color};
    position: relative;
  }
`;

export default SectionContainer;
