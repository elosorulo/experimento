import React from 'react';
import { cloneDeep } from 'lodash';
import WFCTool3D from '../procedural/ndwfc-tools';
import WFC from '../procedural/ndwfc';
import { useStore } from '../state/store';

import waveTiles from './wavesTiles';

var tool = new WFCTool3D();

waveTiles.forEach(waveTile => tool.addTile(waveTile.tiles,  waveTile.params))

var wave;

var wfc;
var size;
var increment;
var multiply;

let expansions = 0;

function execute(){

    while(expansions <= 1) {
        if (!wfc){
        return
        }
        var done = wfc.step();
        if (done){
            wfc.expand([-size, 0,-size],[size, 2, size]);
            size=Math.ceil((size+increment)*multiply);
            expansions++;
        }
        wave = wfc.readout()
    }
    }
    
const executeOp = function(e) {
    if (e.op == "init"){
    wfc = new WFC(e.wfcInput);
    size = e.initialSize;
    increment = e.increment;
    multiply = e.multiply
    execute();
    }
}

executeOp({
    op:'init',
    wfcInput:tool.generateWFCInput(),
    initialSize:10,
    increment:0,
    multiply:1
})

const WaveTest = () => {

    const setWaves = useStore(state => state.setWaves);
    
    React.useEffect(() => {
        setWaves(cloneDeep(wave))
    }, []);

    return (<></>);
};

export default WaveTest;
