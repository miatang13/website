import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";

export const setupCSSRenderer = (webglApp) => {
  webglApp.cssRenderer = new CSS3DRenderer();
  webglApp.cssRenderer.setSize(window.innerWidth, window.innerHeight);
  webglApp.cssRenderer.domElement.style.position = "absolute";
  webglApp.cssRenderer.domElement.style.top = 0;
  webglApp.cssElem.appendChild(webglApp.cssRenderer.domElement);
};
