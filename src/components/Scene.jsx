import React from 'react';
import CameraProvider from './providers/CameraProvider';
import AmbientLightProvider from './providers/AmbientLightProvider';
import SpotLightsProvider from './providers/SpotLightsProvider';
import PlanesProvider from './providers/PlanesProvider';
import RingAnimations from './animations/RingsAnimations';
import Sequencer from './Sequencer';
import DodecahedronsAnimations from './animations/DodecahedronsAnimations';
import SpheresAnimations from './animations/SpheresAnimations';
import TetrahedronsAnimations from './animations/TetrahedronsAnimations';
import LathesAnimations from './animations/LathesAnimations';
import Panels from './shapes/Panels';
import { Effects, OrbitControls } from '@react-three/drei';
import Cube from './3d/models/Cube';
import SkyBox from './3d/models/SkyBox';
import WaveTest from './WaveTest';

const Scene = (props) => {

  return (
    <>
    <WaveTest/>
    <OrbitControls/>
    <SkyBox />
    <SpotLightsProvider/>
    <AmbientLightProvider/>
    <Sequencer soundsApi={props.soundsApi}/>
    <Cube/>
    </>
  );
};

export default Scene;
