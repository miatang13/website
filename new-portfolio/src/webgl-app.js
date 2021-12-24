import { Clock } from "three";
import {
  Scene,
  Color,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  GridHelper,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class WebGLApp {
  constructor(htmlElem) {
    this.htmlElem = htmlElem;
    this.rafId = 0;
    this.isRendering = false;
  }

  setup = () => {
    console.log("set up with DOM elem ", this.htmlElem);
    this.scene = new Scene();
    this.scene.background = new Color("Beige");
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.set(0, 5, 6);
    this.camera.lookAt(this.scene.position);
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.htmlElem.appendChild(this.renderer.domElement);
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.update();
    this.clock = new Clock();
    this.wheelData = { y: 0, position: 0 };
    window.addEventListener("wheel", this.handleWheel);
  };

  handleWheel = (event) => {
    this.wheelData.y = event.deltaY * 0.0007;
  };

  createGridHelper = () => {
    this.gridHelper = new GridHelper(10, 10);
    this.scene.add(this.gridHelper);
    console.log("created grid helper", this.gridHelper);
  };

  createCube = () => {
    let geometry = new BoxGeometry(2, 2, 2);
    let material = new MeshBasicMaterial({
      color: new Color("Orange"),
      wireframe: true,
    });
    this.cube = new Mesh(geometry, material);
    this.scene.add(this.cube);
    console.log("created cube", this.cube);
  };

  createObjs = () => {
    this.createGridHelper();
    this.createCube();
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  handleResize = () => {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    this.camera.aspect = newWidth / newHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(newWidth, newHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };

  update = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    // this.controls.update();
    const elapsedTime = this.clock.getElapsedTime();

    // update on scroll
    this.wheelData.position += this.wheelData.y;
    this.wheelData.y *= 0.9; // gradual stop
    this.camera.position.y = this.wheelData.position;

    // render scene
    this.rafId = requestAnimationFrame(this.update);
    this.renderScene();
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
