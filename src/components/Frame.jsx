import React from 'react';
import { Canvas } from 'react-three-fiber';

import Scene from './Scene';
import { useSoundsApi } from './Sound';
import Effects from './Effects';
const FullSizeCanvas = (props) => {
    return (
        <Canvas {...props} style={{height: "100vh", width: "100%"}} invalidateFrameloop shadowMap/>
    );
}

const Frame = () => {

    const soundsApi = useSoundsApi();

    return (
        <FullSizeCanvas
            concurrent
            gl={{ antialias: false }}
        >
            <Scene soundsApi={soundsApi}/>
        </FullSizeCanvas>
    );

}

export default Frame;