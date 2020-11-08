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
  /**
    React.useEffect(() => {
  
      scene.add(cubeCamera);
      scene.environment = cubeCamera.renderTarget.texture;
      console.log("a ver");
    }, []);
  
  
    useFrame(() => cubeCamera.update(gl, scene));
  */
    // Set the scene background property to the resulting texture.
    React.useEffect(() => {
      const loader = new CubeTextureLoader();
      // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
      const texture = loader.load([
        "sky-1.jpg",
        "sky-2.jpg",
        "sky-3.jpg",
        "sky-4.jpg",
        "sky-5.jpg",
        "sky-6.jpg",
      ]);
      scene.background = texture;
    }
  
    )
    return null;
}

export default SkyBox;
