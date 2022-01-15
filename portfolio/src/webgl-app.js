import {
  Clock,
  HemisphereLight,
  MeshMatcapMaterial,
  PlaneGeometry,
} from "three";
import {
  Scene,
  Color,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  GridHelper,
  SphereGeometry,
  PointLight,
  Object3D,
  Vector2,
  Vector3,
  MeshLambertMaterial,
} from "three";
import { createElemObject } from "./webgl/utility/cssObj";
import * as dat from "dat.gui";
import {
  ambient_light_color,
  ambient_light_ground,
  ambient_light_intensity,
  background_color,
  camera_pos,
  cursor_light_color,
  cursor_light_distance,
  cursor_light_intensity,
  cursor_light_radius,
  plane_color,
} from "./webgl/params/scene";
import { normalizeWheel } from "./webgl/utility/wheel.js";

const hasGui = false;

export default class WebGLApp {
  constructor(htmlElem) {
    this.htmlElem = htmlElem;
    this.rafId = 0;
    this.isRendering = false;
    this.mousePos = new Vector2();
    this.parallax = camera_pos;
    this.cursorLightPos = new Vector3();
    this.wheelData = { y: 0, position: 0 };
    this.capY = -document.documentElement.scrollHeight / 100;
  }

  setupBasic = () => {
    console.log("set up with DOM elem ", this.htmlElem);
    this.scene = new Scene();
    this.scene.background = new Color(background_color);
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.set(0, 0, camera_pos.z);
    const light = new HemisphereLight(
      ambient_light_color,
      ambient_light_ground,
      ambient_light_intensity
    );
    this.scene.add(light);

    if (hasGui) {
      this.gui = new dat.GUI();
      this.gui.add(this.camera.position, "y").min(-20).max(0);
    }
    this.clock = new Clock();
    this.setupRenderers();
    console.log(this.camera.position);
    this.initScene();
  };

  setupRenderers = () => {
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.htmlElem.appendChild(this.renderer.domElement);
  };

  // Init basic scene
  initScene = () => {
    // this.createGridHelper();
    window.addEventListener("mousewheel", this.handleWheel, false);
    window.addEventListener("DOMMouseScroll", this.handleWheel, false); // for Firefox
    this.addCursorLight();
    // this.createCube();
    this.createPlane();
  };

  createPlane = () => {
    const w = 85;
    const geom = new PlaneGeometry(w, w);
    let material = new MeshLambertMaterial({
      color: new Color(plane_color),
      // wireframe: true,
    });
    const plane = new Mesh(geom, material);
    plane.position.set(0, 0, -5);
    if (hasGui) {
      this.gui.add(plane.position, "z").min(-50).max(0);
    }

    this.scene.add(plane);
  };

  setupWorkGallery = (cssElem, thumbnailRefs, descriptionRefs) => {
    return;
    // this.cssElem = cssElem;
    // setupCSSRenderer(this);
    // this.thumbnailRefs = thumbnailRefs;
    // this.descriptionRefs = descriptionRefs;
    // this.addDomElems();
    // console.log("Finished set up work gallery");
  };

  removeWorkGallery = () => {
    if (this.domElems !== null || this.domElems !== undefined) {
      this.scene.remove(this.domElems);
    }
  };

  addCursorLight = () => {
    const sphereGeom = new SphereGeometry(cursor_light_radius, 32, 16);
    const sphereMesh = new Mesh(
      sphereGeom,
      new MeshMatcapMaterial({ color: cursor_light_color })
    );

    //lights
    const light = new PointLight(
      cursor_light_color,
      cursor_light_intensity,
      cursor_light_distance
    );
    light.add(sphereMesh);
    light.position.set(0, 0, 0);
    this.scene.add(light);
    this.cursorLight = light;
    if (hasGui) {
      this.gui.add(light, "intensity").min(0).max(10);
      this.gui.add(light, "distance").min(-10).max(150);
    }
    document.addEventListener("mousemove", this.handleMouseMove, false);
  };

  addDomElems = () => {
    this.domElems = new Object3D();
    let that = this;
    let cap = 0; // we need to know maximum Y to clamp scroll
    this.thumbnailRefs.forEach((r, index) => {
      let elem = createElemObject(r, 0.03);
      let description = createElemObject(this.descriptionRefs[index], 0.02);
      let newY = -window.innerHeight * 0.025 * 0.56 * index;
      elem.position.set(-2.5, newY, 0);
      description.position.set(5, newY - 3, 1);
      that.domElems.add(elem);
      that.domElems.add(description);
      cap = Math.min(newY - window.innerHeight * 0.025 * 0.4, cap);
    });
    this.scene.add(this.domElems);
    this.capY = cap;
  };

  handleWheel = (event) => {
    // TO-DO: add responsiveness and clamp
    // event.deltaY < 0 when we scroll up, > 0 when we scroll down
    if (this.camera.position.y >= 0 && event.deltaY < 0) return;
    if (this.camera.position.y <= this.capY && event.deltaY > 0) return;
    // var direction = event.detail < 0 || event.wheelDelta > 0 ? 1 : -1;
    const normalized = normalizeWheel(event).spinY;
    console.log(normalized);
    // up = 1, down = -1
    this.wheelData.y = -normalized * 0.5;
  };

  handleMouseMove = (event) => {
    event.preventDefault();
    this.mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mousePos.y = -(event.clientY / window.innerHeight) * 2 + 1;
    var vector = new Vector3(this.mousePos.x, this.mousePos.y, 0.5);
    vector.unproject(this.camera);
    var dir = vector.sub(this.camera.position).normalize();
    var distance = -this.camera.position.z / dir.z;
    var pos = this.camera.position.clone().add(dir.multiplyScalar(distance));
    this.cursorLightPos = pos;
    // parallaxOnMouseMove(event, this);

    var centerX = window.innerWidth * 0.5;
    var centerY = window.innerHeight * 0.5;
    const mt = 0.0003;
    this.parallax.x = (event.clientX - centerX) * mt;
    this.parallax.y = (event.clientY - centerY) * mt;
  };

  createGridHelper = () => {
    this.gridHelper = new GridHelper(10, 10);
    this.scene.add(this.gridHelper);
    console.log("created grid helper", this.gridHelper);
  };

  createCube = () => {
    let w = 9;
    let geometry = new SphereGeometry(w, 32, 16);
    let material = new MeshLambertMaterial({
      color: new Color("white"),
      wireframe: true,
    });
    this.cube = new Mesh(geometry, material);
    this.cube.position.set(7, 3, -9);
    this.scene.add(this.cube);
    console.log("created cube", this.cube);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
    if (this.cssRenderer) {
      this.cssRenderer.render(this.scene, this.camera);
    }
  };

  handleResize = () => {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    this.camera.aspect = newWidth / newHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(newWidth, newHeight);

    if (this.cssRenderer) {
      this.cssRenderer.setSize(newWidth, newHeight);
    }

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  update = () => {
    // const elapsedTime = this.clock.getElapsedTime();
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;

    // update on scroll
    this.wheelData.position += this.wheelData.y;
    this.wheelData.position = Math.max(
      this.capY,
      Math.min(this.wheelData.position, 0)
    );
    this.wheelData.y *= 0.095; // gradual stop
    if (!hasGui) {
      this.camera.position.y = this.wheelData.position;
    }

    // update follow cursor
    if (this.cursorLight) {
      this.cursorLight.position.lerp(this.cursorLightPos, 0.2);
    }

    this.camera.position.lerp(this.parallax, 0.1);

    // render scene
    this.renderScene();
    this.rafId = requestAnimationFrame(this.update);
  };

  render = (render) => {
    if (this.isRendering === render) return;
    this.isRendering = render;
    if (render) {
      this.update();
    } else {
      cancelAnimationFrame(this.rafId);
    }
  };
}
