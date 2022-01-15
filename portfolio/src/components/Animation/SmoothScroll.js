// scroll
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";
import "../../styles/scroll.scss";
import { useLocation } from "react-router-dom";

export default function SmoothScroll(props) {
  const scroller = useRef(null);

  const options = { damping: 0.07, continuousScrolling: true };
  useEffect(() => {
    scroller.current = Scrollbar.init(
      document.querySelector("#scroll"),
      options
    );
  }, []);

  const location = useLocation();
  useEffect(() => {
    console.log("*", location.pathname);
    // props.setPathname(location.pathname);
    const target = document.querySelector("#scroll");
    const targetPosition = target.getBoundingClientRect();
    scroller.current.scrollTo(0, targetPosition.top - 100, 600);
  }, [location]);

  return <div id="scroll">{props.children}</div>;
}
