import { useState, useEffect } from "react";

const useScrollPosition = ({ elementRef }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollPercentage(
        (elementRef.current.scrollTop /
          (elementRef.current.scrollHeight - document.body.clientHeight)) *
          100
      );
    };

    elementRef.current.addEventListener("scroll", onScroll);

    return () => {
      elementRef.current.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollPercentage;
};

export default useScrollPosition;
