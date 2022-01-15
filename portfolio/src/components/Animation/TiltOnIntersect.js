import gsap from "gsap";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/intersection";
import { tiltAnimationOnIntersect } from "../../animations/onIntersect";

export default function TiltOnIntersect(props) {
  const wrapperRef = useRef();
  const isIntersected = useIntersectionObserver(wrapperRef, 0.0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (isIntersected) {
      tiltAnimationOnIntersect(tl, wrapperRef);
    }
  }, [isIntersected]);

  return <div ref={wrapperRef}>{props.children}</div>;
}
