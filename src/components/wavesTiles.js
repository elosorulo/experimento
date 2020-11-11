import ColumnaGiro from '../components/3d/modules/ColumnaGiro';
import ColumnaGiroNS from '../components/3d/modules/ColumnaGiroNS';
import Pared from '../components/3d/modules/Pared';
import ParedNS from '../components/3d/modules/ParedNS';
import ParedEsquina from '../components/3d/modules/ParedEsquina';
import ParedEsquinaNS from '../components/3d/modules/ParedEsquinaNS';
import Puerta from '../components/3d/modules/Puerta';
import SobrePuerta from '../components/3d/modules/SobrePuerta';
import React from 'react';

/**
 * = Piso
 * _ Aire
 * X Pared
 * # Pared Superior
 * | Puerta
 * @ Puerta Superior
 */

const ColumnaGiroTiles = 
{
    tiles: [
`\
===
__X
__#`
,`\
===
___
___`
,`\
===
___
___`
],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<ColumnaGiro position={props.position} /> )}
}

const ColumnaGiroTiles90 = {
  tiles: [
`\
===
X__
#__`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <ColumnaGiro position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ColumnaGiroTiles180 = {
  tiles: [
`\
===
___
___`
,`\
===
___
___`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 2},
    component:(props) => { return ( <ColumnaGiro position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ColumnaGiroTiles270 = {
    tiles: [
`\
===
___
___`
,`\
===
___
___`
,`\
===
__X
__#`
    ],
    params: { transforms: [], weight: 2},
    component: (props) => { return (<ColumnaGiro position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const ColumnaGiroTilesNS = 
{
    tiles: [
`\
__#
__#
__#`
,`\
___
___
___`
,`\
___
___
___`
],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<ColumnaGiroNS position={props.position} /> )}
}

const ColumnaGiroTilesNS90 = {
  tiles: [
`\
#__
#__
#__`
,`\
___
___
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <ColumnaGiroNS position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ColumnaGiroTilesNS180 = {
  tiles: [
`\
___
___
___`
,`\
___
___
___`
,`\
#__
#__
#__`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <ColumnaGiroNS position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ColumnaGiroTilesNS270 = {
    tiles: [
`\
___
___
___`
,`\
___
___
___`
,`\
__#
__#
__#`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<ColumnaGiroNS position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

//==============


const ParedTiles = 
{
    tiles: [
`\
===
__X
__#`
,`\
===
__X
__#`
,`\
===
__X
__#`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<Pared position={props.position} /> )}
}

const ParedTiles90 = {
  tiles: [
`\
===
XXX
###`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <Pared position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedTiles180 = {
  tiles: [
`\
===
X__
#__`
,`\
===
X__
#__`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <Pared position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedTiles270 = {
    tiles: [
`\
===
___
___`
,`\
===
___
___`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<Pared position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const ParedTilesNS = 
{
    tiles: [
`\
__#
__#
__#`
,`\
__#
__#
__#`
,`\
__#
__#
__#`
],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<ParedNS position={props.position} /> )}
}

const ParedTilesNS90 = {
  tiles: [
`\
###
###
###`
,`\
___
___
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <ParedNS position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedTilesNS180 = {
  tiles: [
`\
#__
#__
#__`
,`\
#__
#__
#__`
,`\
#__
#__
#__`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <ParedNS position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedTilesNS270 = {
    tiles: [
`\
___
___
___`
,`\
___
___
___`
,`\
###
###
###`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<ParedNS position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const PlaceHolder = {
    tiles: [
`\
===
XXX
###`
,`\
===
X_X
#_#`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<></>)}
}
const PlaceHolderNS = {
    tiles: [
`\
###
###
###`
,`\
#_#
#_#
#_#`
,`\
###
###
###`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<></>)}
}


//==============


const ParedEsquinaTiles = 
{
    tiles: [
`\
===
XXX
###`
,`\
===
__X
__#`
,`\
===
__X
__#`
],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ParedEsquina position={props.position} /> )}
}

const ParedEsquinaTiles90 = {
  tiles: [
`\
===
XXX
###`
,`\
===
X__
#__`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <ParedEsquina position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedEsquinaTiles180 = {
  tiles: [
`\
===
X__
#__`
,`\
===
X__
#__`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 20},
    component:(props) => { return ( <ParedEsquina position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedEsquinaTiles270 = {
    tiles: [
`\
===
__X
__#`
,`\
===
__X
__#`
,`\
===
XXX
###`
    ],
    params: { transforms: [], weight: 20},
    component: (props) => { return (<ParedEsquina position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const ParedEsquinaTilesNS = 
{
    tiles: [
`\
###
###
###`
,`\
__#
__#
__#`
,`\
__#
__#
__#`
],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<ParedEsquinaNS position={props.position} /> )}
}

const ParedEsquinaTilesNS90 = {
  tiles: [
`\
###
###
###`
,`\
#__
#__
#__`
,`\
#__
#__
#__`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <ParedEsquinaNS position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const ParedEsquinaTilesNS180 = {
  tiles: [
`\
#__
#__
#__`
,`\
#__
#__
#__`
,`\
###
###
###`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <ParedEsquinaNS position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const ParedEsquinaTilesNS270 = {
    tiles: [
`\
__#
__#
__#`
,`\
__#
__#
__#`
,`\
###
###
###`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<ParedEsquinaNS position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}



//==============


const PuertaTiles = 
{
    tiles: [
`\
===
__X
__#`
,`\
===
__|
__@`
,`\
===
__X
__#`
],
    params: { transforms: [], weight: 10},
    component: (props) => { return (<Puerta position={props.position} /> )}
}

const PuertaTiles90 = {
  tiles: [
`\
===
X|X
#@#`
,`\
===
___
___`
,`\
===
___
___`
    ],
    params: { transforms: [], weight: 10},
    component:(props) => { return ( <Puerta position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const PuertaTiles180 = {
  tiles: [
`\
===
X__
#__`
,`\
===
|__
@__`
,`\
===
X__
#__`
    ],
    params: { transforms: [], weight: 10},
    component:(props) => { return ( <Puerta position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const PuertaTiles270 = {
    tiles: [
`\
===
___
___`
,`\
===
___
___`
,`\
===
X|X
#@#`
    ],
    params: { transforms: [], weight: 10},
    component: (props) => { return (<Puerta position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const PuertaTilesNS = 
{
    tiles: [
`\
__#
__#
__#`
,`\
__@
__@
__@`
,`\
__#
__#
__#`
],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<SobrePuerta position={props.position} /> )}
}

const PuertaTilesNS90 = {
  tiles: [
`\
#@#
#@#
#@#`
,`\
___
___
___`
,`\
___
___
___`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <SobrePuerta position={props.position} rotation={[0, 0.5 * Math.PI, 0]}/>) }
}

const PuertaTilesNS180 = {
  tiles: [
`\
#__
#__
#__`
,`\
@__
@__
@__`
,`\
#__
#__
#__`
    ],
    params: { transforms: [], weight: 1},
    component:(props) => { return ( <SobrePuerta position={props.position} rotation={[0, 1 * Math.PI, 0]}/>)}
}

const PuertaTilesNS270 = {
    tiles: [
`\
___
___
___`
,`\
___
___
___`
,`\
#@#
#@#
#@#`
    ],
    params: { transforms: [], weight: 1},
    component: (props) => { return (<SobrePuerta position={props.position} rotation={[0, 1.5 * Math.PI, 0]}/> )}
}

const wavesTiles = [
    PlaceHolder,
    PlaceHolderNS,
    ColumnaGiroTiles,
    ColumnaGiroTiles90,
    ColumnaGiroTiles180,
    ColumnaGiroTiles270,
    ColumnaGiroTilesNS,
    ColumnaGiroTilesNS90,
    ColumnaGiroTilesNS180,
    ColumnaGiroTilesNS270,
    ParedTiles,
    ParedTiles90,
    ParedTiles180,
    ParedTiles270,
    ParedTilesNS,
    ParedTilesNS90,
    ParedTilesNS180,
    ParedTilesNS270,
    ParedEsquinaTiles,
    ParedEsquinaTiles90,
    ParedEsquinaTiles180,
    ParedEsquinaTiles270,
    ParedEsquinaTilesNS,
    ParedEsquinaTilesNS90,
    ParedEsquinaTilesNS180,
    ParedEsquinaTilesNS270,
    PuertaTiles,
    PuertaTiles90,
    PuertaTiles180,
    PuertaTiles270,
    PuertaTilesNS,
    PuertaTilesNS90,
    PuertaTilesNS180,
    PuertaTilesNS270
]

export default wavesTiles;
