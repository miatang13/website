import "./App.css";
import React, { useEffect, useRef } from "react";
import WebGLApp from "./webgl-app";

function App() {
  const containerRef = useRef(null);
  const webglApp = useRef(null);

  useEffect(() => {
    if (containerRef.current === null) return;

    webglApp.current = new WebGLApp(containerRef.current);
    webglApp.current.setup();
    webglApp.current.createObjs();
    webglApp.current.render(true);

    // Handler to call on window resize
    function onWindowResize() {
      webglApp.current.handleResize();
    }

    window.addEventListener("resize", onWindowResize, false);

    return () => {
      webglApp.current.render(false);
      window.removeEventListener("resize", onWindowResize, false);
    };
  }, []);

  return <div className="App" ref={containerRef}></div>;
}

export default App;
