import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../hooks/intersection";
import anime from "animejs";
import "../../styles/animation/slant-text.scss";

export default function SlantAppearText(props) {
  const textRef = useRef();
  const animationRef = useRef();
  const isIntersected = useIntersectionObserver(textRef, 0.0);

  useEffect(() => {
    // split text, add specific index to have specific class for each indiv text
    var str = textRef.current.textContent;
    //console.log(str);
    var words = str.split(" ");
    //console.log(words);
    var newInnerHTML = "";
    words.forEach((w) => {
      let withSpaceWord = w + " ";
      newInnerHTML =
        newInnerHTML +
        `<span class='letter letter-${props.index}-${props.type}'>${withSpaceWord}</span>`;
    });
    textRef.current.innerHTML = newInnerHTML;
    // init animation
    animationRef.current = anime.timeline({ autoplay: false });
    animationRef.current.add({
      targets: `.animate_text .letter-${props.index}-${props.type}`,
      translateY: [100, 0],
      rotateZ: ["-10deg", 0],
      rotateY: ["-10deg", 0],
      //   skewX: ["-4deg", 0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i,
    });
  });

  useEffect(() => {
    // animate on appear
    animationRef.current.play();
  }, []);

  useEffect(() => {
    if (isIntersected) {
      animationRef.current.play();
    }
  }, [isIntersected]);

  return (
    <span className="animate_text" ref={textRef}>
      {props.text}
    </span>
  );
}
