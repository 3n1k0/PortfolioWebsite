import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      console.log(document.body.scrollT);

      setScrollPercentage(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollPercentage;
};

export default useScrollPosition;
