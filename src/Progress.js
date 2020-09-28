import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgba(250, 224, 66, 0.8) ${(props) => props.progress},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
`;

export default Progress;
