import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomablePicture(props) {
  return (
    <Zoom
      overlayBgColorEnd="rgba(0, 0, 0, 1.0)"
      overlayBgColorStart="rgba(255, 255, 255, 0)"
    >
      <img alt="Sorry something went wrong" src={props.src} width="100%" />
    </Zoom>
  );
}
