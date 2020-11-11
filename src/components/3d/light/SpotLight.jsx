import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { Mesh } from 'three';
import { omit } from 'lodash';

const SHADOW_MAP_SIZE = 4096;

const SpotLight = (props) => {

    const lightTarget = new Mesh();
    
    const spotLightRef = React.useRef();

    useEffect(() => {
        spotLightRef.current.shadowDarkness = 1;
    }, []);

    useFrame(({clock}, delta) => {
        if(props.update) props.update(spotLightRef, clock, delta)
    });

    return (
        <group>
            <primitive
                object={lightTarget}
                position={props.target}
            />
            <spotLight
                ref={spotLightRef}
                {...omit(props, "target")}
                shadow-bias={-0.00005}
                shadow-mapSize-width={256}
                shadow-mapSize-height={256}
                castShadow
                target={lightTarget}
            />
        </group>
    );
};

export default SpotLight;
