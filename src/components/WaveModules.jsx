import React from 'react';
import { useStore } from '../state/store';
import Module from './3d/modules/Module';

const keyToPosition = key => {
    const k = key.split(",").map(position => parseInt(position))
    return [k[2] * 2, k[1] * 1.6, k[0] * 2]
}

const WaveModules = () => {
    const waves = useStore(state => state.waves);
    
    return (
        <group>
            {Object.keys(waves).map(waveKey => <Module position={keyToPosition(waveKey)} index={parseInt(waves[waveKey])}/>)}
        </group>
    );
};

export default WaveModules;
