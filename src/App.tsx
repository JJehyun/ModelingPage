import React, {useRef , useEffect} from 'react';
import './App.css';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
  renderer.outputEncoding = THREE.sRGBEncoding;
  const camera = new THREE.PerspectiveCamera(30, 1);
  camera.position.set(0, 0, 5);
  const loader = new GLTFLoader();
  scene.background = new THREE.Color("white");
  const light = new THREE.DirectionalLight(0xffff00, 10);
  scene.add(light);

  loader.load("../../3DModeling/textures/scene.gltf", (object) => {
    scene.add(object.scene);
    renderer.render(scene, camera);
  });
}
}, [canvasRef]);

return <div><canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>;
gkdlsd
</div>
}

export default App;
