import React from 'react'
import { Canvas } from '@react-three/fiber'
import '../stylesheets/space.css'
import { OrbitControls, Stars } from '@react-three/drei'

function Space() {
  return (
    <Canvas className='spaceCanvas'>
      <OrbitControls enableZoom={false}/>
      <Stars />
    </Canvas>
  )
}

export default Space