import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "https://cdn.skypack.dev/three@0.132.2";

const container = document.querySelector("#scene-container");

const scene = new Scene();

scene.background = new Color("skyblue");

const fov = 60;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 1000;

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 10);

const length = 2;
const width = 2;
const height = 2;

const geometry = new BoxBufferGeometry(length, width, height);

const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

scene.add(cube);

const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

// add canvas to DOM
container.append(renderer.domElement);

renderer.render(scene, camera);
