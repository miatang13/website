import gsap from "gsap";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/intersection";
import { fadeAnimationOnIntersect } from "../../animations/onIntersect";

export default function FadeOnIntersect(props) {
  const wrapperRef = useRef();
  const isIntersected = useIntersectionObserver(wrapperRef, 0.0);

  const tl = gsap.timeline();

  useEffect(() => {
    // animate on appear
    fadeAnimationOnIntersect(tl, wrapperRef);
  }, []);

  useEffect(() => {
    if (isIntersected) {
      fadeAnimationOnIntersect(tl, wrapperRef);
    }
  }, [isIntersected]);

  return <div ref={wrapperRef}>{props.children}</div>;
}
