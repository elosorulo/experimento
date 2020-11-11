import React from 'react';
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import {
    CubeTextureLoader,
    CubeCamera,
    WebGLCubeRenderTarget,
    RGBFormat,
    LinearMipmapLinearFilter,
  } from "three";

const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  
  const cubeCamera = new CubeCamera(1, 100, cubeRenderTarget);
  
  cubeCamera.position.set(0, 100, 0);
  
  // Loads the skybox texture and applies it to the scene.
  const SkyBox = () => {
  
    const { scene, gl } = useThree();
  
    React.useEffect(() => {
      const loader = new CubeTextureLoader();
  
      const texture = loader.load([
        process.env.REACT_APP_PREFIX + "sky-1.png",
        process.env.REACT_APP_PREFIX + "sky-2.png",
        process.env.REACT_APP_PREFIX + "sky-3.png",
        process.env.REACT_APP_PREFIX + "sky-4.png",
        process.env.REACT_APP_PREFIX + "sky-5.png",
        process.env.REACT_APP_PREFIX + "sky-6.png",
      ]);
      scene.background = texture;
    }
  
    )
    return null;
}

export default SkyBox;
