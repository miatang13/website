// library
import React, { useEffect, useRef } from "react";
// css
import "./styles/reset.scss";
import "./App.scss";
import "./styles/utility.scss";
// components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
// data
import projects from "./settings/projects.json";
// util
import { initRefArray } from "./webgl/utility/array";
// gl
import WebGLApp from "./webgl-app";
import SmoothScroll from "./components/Animation/SmoothScroll";

const hasGL = false;

function App() {
  const containerRef = useRef(null);
  const webglApp = useRef(null);
  const cssContainerRef = useRef(null);

  const thumbnailRefs = useRef([]);
  const descriptionRefs = useRef([]);
  initRefArray(thumbnailRefs, projects.length);
  initRefArray(descriptionRefs, projects.length);

  const setupBasicGL = () => {
    if (containerRef.current === null) return;
    if (webglApp.current !== null) return;
    console.log("Setting up basic scene");

    webglApp.current = new WebGLApp(containerRef.current);
    webglApp.current.setupBasic();
    webglApp.current.render(true);
  };

  useEffect(() => {
    if (!hasGL) return;

    setupBasicGL();

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

  const setPathname = (pathname) => {
    console.log("**", pathname);
    if (!hasGL) return;

    if (webglApp.current === null) {
      setupBasicGL();
    }

    if (pathname === "/" && hasGL) {
      console.log(cssContainerRef);
      webglApp.current.setupWorkGallery(
        cssContainerRef.current,
        thumbnailRefs.current.map((r) => r.current),
        descriptionRefs.current.map((r) => r.current)
      );
    } else {
      // remove work objs
      webglApp.current.removeWorkGallery();
    }
  };

  return (
    <div className="App">
      <div id="webgl" ref={containerRef}></div>
      <div id="outer-container">
        <NavBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

        <SmoothScroll>
          <main id="page-wrap">
            <Routes
              setPathname={setPathname}
              thumbnailRefs={thumbnailRefs}
              descriptionRefs={descriptionRefs}
              cssContainerRef={cssContainerRef}
            />
          </main>
        </SmoothScroll>
      </div>
    </div>
  );
}

export default App;
