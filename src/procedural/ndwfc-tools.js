import * as THREE from 'three';

var WFCTool3D = function(){
  var tiles = []
  var materials = {}
  var weights = []
  var n_prototypes = 0
  var formulae = []
  
  
  var transformBank = {
    ry:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m.length; j++){
          for (var k = 0; k < m.length; k++){
            r[i][j][k] = m[i][m.length-1-k][j]; 
          }
        }
      }
      return r;
    },
    
    rx:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m.length; j++){
          for (var k = 0; k < m.length; k++){
            r[i][j][k] = m[k][j][m.length-1-i]; 
          }
        }
      }
      return r;
    },
    
    rz:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m.length; j++){
          for (var k = 0; k < m.length; k++){
            r[i][j][k] = m[m.length-1-j][i][k]; 
          }
        }
      }
      return r;
    },
    
    fz:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m[0].length; j++){
          for (var k = 0; k < m[0][0].length; k++){
            r[i][j][k] = m[i][j][m.length-1-k]; 
          }
        }
      }
      return r;
    },
    
    fx:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m[0].length; j++){
          for (var k = 0; k < m[0][0].length; k++){
            r[i][j][k] = m[i][m.length-1-j][k]; 
          }
        }
      }
      return r;
    },
    
    fy:function(m){
      
      var r = JSON.parse(JSON.stringify(m));

      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m[0].length; j++){
          for (var k = 0; k < m[0][0].length; k++){
            r[i][j][k] = m[m.length-1-i][j][k]; 
          }
        }
      }
      return r;
    },
  }

  function equal(m,r){
    for (var i = 0; i < m.length; i++){
      for (var j = 0; j < m[0].length; j++){
        for (var k = 0; k < m[0][0].length; k++){
          if (m[i][j][k] != r[i][j][k]){
            return false;
          }
        }
      }
    }
    return true;
  }
  
  function fit(d,a,b){
    if (d == "x"){
      for (var i = 0; i < a.length; i++){
        for (var j = 0; j < a[i][0].length; j++){
          if (a[i][a[i].length-1][j] != b[i][0][j]){
            return false;
          }
        }
      }
    }else if (d == "y"){
      for (var i = 0; i < a[0].length; i++){
        for (var j = 0; j < a[i][0].length; j++){
          if (a[a.length-1][i][j] != b[0][i][j]){
            return false;
          }
        }
      }
    }else if (d == "z"){
      for (var i = 0; i < a.length; i++){
        for (var j = 0; j < a[0].length; j++){
          if (a[i][j][a[i][0].length-1] != b[i][j][0]){
            return false;
          }
        }
      }      
    }
    return true;
  }
  
  this.addTile = function(s,{transforms="auto",weight=1}={}){
    var t = s.map(y=>y.split("\n").map(x=>x.split("")));
    tiles.push(t);
    formulae.push([ n_prototypes, '', t ])
    weights.push(weight)
    
    var tests = []
    
    if (transforms == "auto"){
      transforms = ['ry','ry','ry+ry+ry','fy','fy+ry','fy+ry+ry','fy+ry+ry+ry']
    }
    
    for (var i = 0; i < transforms.length; i++){
      var tl = transforms[i].split("+")
      var tt = t
      for (var j = 0; j < tl.length; j++){
        tt = transformBank[tl[j]](tt);
      }
      tests.push(tt);
    }
    for (var i = 0; i < tests.length; i++){
      var ok = true;
      for (var j = 0; j < tiles.length; j++){
        if (equal(tests[i],tiles[j])){
          ok = false;
          break;
        }
      }
      if (ok){
        tiles.push(tests[i])
        weights.push(weight)
        formulae.push([ n_prototypes, transforms[i], tests[i] ])
      }
    }
    n_prototypes++;
  }
  
  this.addMaterial = function(symbol, material){
    materials[symbol] = material;
  }
  
  this.getTileFormulae = function(){
    return formulae;
  }
  
  this.generateWFCInput = function(){
    var rules = []
    for (var i = 0; i < tiles.length; i++){
      for (var j = 0; j < tiles.length; j++){

        if (fit("x",tiles[i],tiles[j])){
          rules.push(['x',i,j])
        }
        if (fit("y",tiles[i],tiles[j])){
          rules.push(['y',i,j])
        }
        if (fit("z",tiles[i],tiles[j])){
          rules.push(['z',i,j])
        }
      }
    }
    return {weights,rules,nd:3}
  }
  
  /*global describe THREE */
  this.plotWFCOutput = function(root,wave){

    while (root.children.length){
      root.children.pop();
    }
    
    var wz = tiles[0][0][0].length
    var wx = tiles[0][0].length
    var wy = tiles[0].length;
    
    const geometryScale = 10;

    var geometry = new THREE.BoxGeometry( geometryScale /wx, geometryScale/wy, geometryScale/wz );
    for (var K in wave){
      var [y,x,z] = K.split(",").map(x=>parseInt(x));
      for (var i = 0; i < wy; i++){
        for (var j = 0; j < wx; j++){
          for (var k = 0; k < wz; k++){
            var material = materials[tiles[wave[K]][i][j][k]]
            if (material){
              var cube = new THREE.Mesh(geometry,material);
              cube.position.set(geometryScale * (z+k/wz), geometryScale * (x+j/wx),  geometryScale * (y+i/wy) + 10)
              cube.castShadow = true;
              cube.receiveShadow = true;
              root.add(cube);
            }
          }
        }
      }
    }
  }
  
}

export default WFCTool3D;
