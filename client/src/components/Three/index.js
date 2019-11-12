import React, { Component } from 'react';
import * as THREE from 'three';
import "./style.css"
// import images from '../../images/cap.png';

class ThreeScene extends Component{
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#abd1d6')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(2, 2, 2)
    
    var loader = new THREE.CubeTextureLoader();
    loader.setPath( 'textures/cube/pisa/' );
    
    THREE.ImageUtils.crossOrigin = '';
var texture = THREE.ImageUtils.loadTexture('https://i.imgur.com/7QeFgqk.jpg');
texture.anisotropy = this.renderer.getMaxAnisotropy();



var cubeMaterial = [
    new THREE.MeshBasicMaterial({
        map: texture //left
    }),
    new THREE.MeshBasicMaterial({
      map: texture //right
    }),
    new THREE.MeshBasicMaterial({
      map: texture // top
    }),
    new THREE.MeshBasicMaterial({
      map: texture // bottom
    }),
    new THREE.MeshBasicMaterial({
      map: texture // front
    }),
    new THREE.MeshBasicMaterial({
      map: texture //back
    })
];



    
    this.cube = new THREE.Mesh(geometry, cubeMaterial)
    this.scene.add(this.cube)
this.start()
  }


componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
   this.cube.rotation.x += 0.01
   this.cube.rotation.y += 0.01
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div
        style={{ width: '100%', height: '100%', position: 'absolute'}}
        ref={(mount) => { this.mount = mount }}
      />
      
    )
  }
}
export default ThreeScene