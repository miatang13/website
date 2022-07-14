export const fadeAnimationOnIntersect = (tl, refToAnimate) => {
  tl.to(refToAnimate.current, {
    opacity: 0,
    duration: 0,
  });
  tl.to(refToAnimate.current, {
    opacity: 1,
    duration: 1.2,
    ease: "power1.out",
  });
};

export const tiltAnimationOnIntersect = (tl, refToAnimate) => {
  tl.to(refToAnimate.current, {
    y: -5,
    duration: 0,
    skewX: "-4deg",
    skewY: "-4deg",
  });
  tl.to(refToAnimate.current, {
    y: 0,
    duration: 1.2,
    skewX: "0deg",
    skewY: "0deg",
    ease: "power4.out",
  });
};
