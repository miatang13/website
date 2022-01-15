// https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks

import { useEffect, useState, useRef } from "react";

export default function useIntersectionObserver(ref, threshold = 0.6) {
  const observerRef = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const options = { rootMargin: "0px" }; //threshold: 0.6

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      options
    );
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
