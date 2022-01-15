import { Object3D } from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";

// returns a Object3D that has a mesh and a css3D object
export const createElemObject = (domRef, scale_factor) => {
  // styling the dom element
  domRef.style.width = undefined;
  domRef.style.height = undefined;

  // we use a "container" to chain together the mesh and css3dobj
  var obj = new Object3D();
  obj.scale.set(scale_factor, scale_factor, scale_factor);
  var css3dObject = new CSS3DObject(domRef);
  obj.css3dObject = css3dObject;
  obj.add(css3dObject);

  return obj;
};
