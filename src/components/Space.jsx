import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Model } from './Portal'

const canvasStyle ={
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000',
}

function Space() {
  return (
    <Canvas className='spaceCanvas' style={canvasStyle}>
      <OrbitControls enableZoom={false} enableDamping={false}/>
      <ambientLight intensity={0.7} />
      <Model />
      <Stars />
    </Canvas>
  )
}

export default Space