import React, { useRef } from 'react';
import AmbientLightProvider from './providers/AmbientLightProvider';
import SpotLightsProvider from './providers/SpotLightsProvider';
import PlanesProvider from './providers/PlanesProvider';
import Sequencer from './Sequencer';
import Effects from './Effects';
import { OrbitControls } from '@react-three/drei';
import SkyBox from './3d/models/SkyBox';
import WavesGenerator from './WavesGenerator';
import WaveModules from './WaveModules';
import { useThree } from 'react-three-fiber';
import { sRGBEncoding } from 'three';

/**
 * = Piso
 * | Columna
 * @ Columna Superior
 * X pared
 * # Pared Superior
 * _ Aire
 */

//<Effects/>
//<WaveModules/>
const Scene = (props) => {
  const orbitRef = useRef();
  const { gl } = useThree();
  React.useEffect(() => {
    gl.shadowMap.renderSingleSided = false
    gl.outputEncoding = sRGBEncoding
    gl.gammaOutput = true;
    gl.gammaFactor = 2.2;
    orbitRef.current.enableKeys = true;
  }, [])

  return (
    <>
    <OrbitControls ref={orbitRef} enableKeys/>
    <SkyBox/>
    <SpotLightsProvider/>
    <AmbientLightProvider/>
    <PlanesProvider/>
    <Sequencer soundsApi={props.soundsApi}/>
    <WavesGenerator/>
    <Effects/>
    <WaveModules/>
    </>
  );
};

export default Scene;
