import React, { useEffect, useRef, useState } from "react";
import styles from "./Three.module.scss";
import cn from "classnames";
import * as THREE from "three";

import { WireframeGeometry2 } from "three/examples/jsm/lines/WireframeGeometry2.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { Wireframe } from "three/examples/jsm/lines/Wireframe.js";

// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
// import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
// import { CopyShader } from "three/examples/jsm/shaders/CopyShader.js";
// import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";

export type TeamProps = {};

const Three: React.FC<TeamProps> = () => {
  const container = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [rendered, setRendered] = useState<boolean>(false);
  let renderer: any;
  let camera: any;
  //   let composer1: any;
  //   let composer2: any;

  useEffect(() => {
    if (container && container.current) {
      setHeight(container.current.clientHeight);
      setWidth(container.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (height && width && !rendered) {
      renderScene();
      setRendered(true);
      window.addEventListener("resize", onResize);
    }
    if (rendered) return () => window.removeEventListener("resize", onResize);
  }, [height, width]);

  const renderScene = () => {
    if (container && container.current) {
      const scene = new THREE.Scene();
      //Add Renderer
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setSize(width, height);
      container.current.appendChild(renderer.domElement);

      //Camera Controls
      //   const controls = new OrbitControls(camera, renderer.domElement);

      // PARTICLES LIGHTS
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xf8fbff);
      hemiLight.position.set(0, 1000, 0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.1);
      dirLight.position.set(-3000, 1000, -1000);
      scene.add(dirLight);

      let frameId = 0;

      // thick mesh
      var geo = new THREE.SphereBufferGeometry(450, 9, 9);
      var geometry = new WireframeGeometry2(geo);
      const matLine = new LineMaterial({
        color: 0xffffff,
        linewidth: 2,
      });
      matLine.resolution.set(window.innerWidth, window.innerHeight);
      const mesh = new Wireframe(geometry, matLine);
      mesh.position.x = 500;
      mesh.rotation.x = 10;
      mesh.rotation.z = -10;
      scene.add(mesh);
      const clock = new THREE.Clock();

      // Particles TetrahedronBufferGeometry
      const group = new THREE.Group();

      const pGeometry = new THREE.TetrahedronBufferGeometry(7);
      var pGeo = new WireframeGeometry2(pGeometry);
      //   const pMaterial = new THREE.MeshStandardMaterial({
      //     color: 0xffffff,
      //     flatShading: false,
      //     wireframe: true,
      //   });
      const pMatLine = new LineMaterial({
        color: 0xffffff,
        linewidth: 2,
      });
      pMatLine.resolution.set(window.innerWidth, window.innerHeight);

      for (let i = 0; i < 100; i++) {
        const pMesh = new THREE.Mesh(pGeo, pMatLine);

        pMesh.position.x = Math.random() * 1500 - 750 + 0;
        pMesh.position.y = Math.random() * 1500 - 750;
        pMesh.position.z = Math.random() * 1500 - 750;

        pMesh.scale.setScalar(Math.random() * 2 + 1);

        pMesh.rotation.x = Math.random() * Math.PI;
        pMesh.rotation.y = Math.random() * Math.PI;
        pMesh.rotation.z = Math.random() * Math.PI;

        group.add(pMesh);
      }

      scene.add(group);

      //add Camera
      //   camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera = new THREE.OrthographicCamera(
        width / -2,
        width / 2,
        height / 2,
        height / -2,
        1,
        1000
      );
      camera.position.z = 500;
      camera.position.x = 0;
      camera.position.y = 0;

      // Particles Renderers

      //   const renderPass = new RenderPass(scene, camera);
      //   const fxaaPass = new ShaderPass(FXAAShader);
      //   const copyPass = new ShaderPass(CopyShader);

      //   composer1 = new EffectComposer(renderer);
      //   composer1.addPass(renderPass);
      //   composer1.addPass(copyPass);
      const pixelRatio = renderer.getPixelRatio();

      //   fxaaPass.material.uniforms["resolution"].value.x =
      //     1 / (width * pixelRatio);
      //   fxaaPass.material.uniforms["resolution"].value.y =
      //     1 / (height * pixelRatio);

      //   composer2 = new EffectComposer(renderer);
      //   composer2.addPass(renderPass);
      //   composer2.addPass(fxaaPass);

      const renderScene = () => {
        if (renderer) renderer.render(scene, camera);
      };

      const start = () => {
        if (!frameId) {
          frameId = requestAnimationFrame(animate);
        }
      };

      const animate = () => {
        //Animate Models Here
        mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), 0.001);
        // mesh.rotation.y += clock.getDelta() * 0.05;

        // const halfWidth = width / 2;

        group.rotation.y += clock.getDelta() * 0.05;

        // renderer.setScissorTest(true);

        // renderer.setScissor(0, 0, halfWidth - 1, height);
        // composer1.render();

        // renderer.setScissor(halfWidth, 0, halfWidth, height);
        // composer2.render();

        // renderer.setScissorTest(false);

        renderScene();
        frameId = window.requestAnimationFrame(animate);
      };

      start();
      //ADD Your 3D Models here
      renderScene();
    }
  };

  const onResize = () => {
    if (container && container.current && camera) {
      const w = container.current.clientWidth;
      const h = container.current.clientHeight;
      setHeight(h);
      setWidth(w);
      camera = new THREE.OrthographicCamera(
        w / -2,
        w / 2,
        h / 2,
        h / -2,
        1,
        1000
      );
      camera.position.z = 500;
      camera.position.x = 0;
      camera.position.y = 0;
      //   camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      //   composer1.setSize(w, h);
      //   composer2.setSize(w, h);
    }
  };

  return <div className={styles.container} ref={container}></div>;
};

export default Three;
