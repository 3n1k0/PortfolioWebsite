import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgba(250, 224, 66, 0.8) 100%,
    transparent 0
  );
  width: 0%;
  height: 4px;
  z-index: 3;
`;

const AnimatingProgress = () => {
  const progressIndicatorRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const progress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      progressIndicatorRef.current.style.width = progress + "%";
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return <Progress ref={progressIndicatorRef}></Progress>;
};

export default AnimatingProgress;
