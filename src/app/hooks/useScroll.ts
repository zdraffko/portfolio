import { useState, useLayoutEffect } from "react";

const useScroll = (elementId: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const element = document.getElementById(elementId);

    if (element === null) {
      return () => {};
    }

    const scrollListener = () => {
      const elementPosition = element.getBoundingClientRect();

      if (elementPosition.top <= 1 && elementPosition.bottom >= window.innerHeight - 1) {
        setIsVisible(true);
      }

      if (elementPosition.bottom <= 1 || elementPosition.top >= window.innerHeight - 1) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [elementId]);

  return { isVisible, elementId };
};

export default useScroll;
