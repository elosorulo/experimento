import React from 'react';
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import * as THREE from 'three';

import WFCTool3D from '../procedural/ndwfc-tools';
import WFC from '../procedural/ndwfc';


var tool = new WFCTool3D();

tool.addTile([`\
___
_@_
___`
,`\
___
_@_
___`
,`\
___
_@_
___`
],{transforms:['rx','rz']})

tool.addTile([`\
___
_#_
___`
,`\
___
_#_
___`
,`\
___
_#_
___`
],{transforms:['rx','rz']})

tool.addTile([`\
___
_@_
___`
,`\
___
_@@
___`
,`\
___
___
___`
])

tool.addTile([`\
___
_#_
___`
,`\
___
_##
___`
,`\
___
___
___`
])

tool.addMaterial("@", new THREE.MeshLambertMaterial( { color: 0xfff000 } ));
tool.addMaterial("#", new THREE.MeshLambertMaterial( { color: 0xff0000 } ));

var wave;

var root;
var wfc;
var size;
var increment;
var multiply;

console.log("connect")


function execute(){

    while(size <= 5) {
        if (!wfc){
        return
        }
        var done = wfc.step();
        if (done){
        wfc.expand([-size / 3,-size,-size],[size,size / 3,size]);
        size=Math.ceil((size+increment)*multiply);
        }
        wave = wfc.readout()
    }
    }
    
const executeOp = function(e) {
    console.log(e)
    if (e.op == "init"){
    wfc = new WFC(e.wfcInput);
    size = e.initialSize;
    increment = e.increment;
    multiply = e.multiply
    execute();
    }
}

console.log(tool.getTileFormulae())



executeOp({
    op:'init',
    wfcInput:tool.generateWFCInput(),
    initialSize:3,
    increment:0,
    multiply:1.5,
})
    

const renderSpace = (scene) => {

    root = new THREE.Object3D();
      
    tool.plotWFCOutput(root,wave);

    scene.add(root);
};


const WaveTest = () => {
    const { scene, gl } = useThree();

    React.useEffect(() => {
        renderSpace(scene)
    }, []);


    return (
        <>
        </>
    )
};

export default WaveTest;
