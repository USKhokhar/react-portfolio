import React from 'react'
import { Canvas } from '@react-three/fiber'
import '../stylesheets/space.css'
import { OrbitControls, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei'

function Portal() {
  return(
    <Sphere visible args={[1.5, 250, 350]}>
      <MeshDistortMaterial color={0x8352fd} attach='material' 
        distort={0.3} speed={1.7} roughness={0}
      />
    </Sphere>
  )
}

function Space() {
  return (
    <Canvas className='spaceCanvas'>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.6} />
      <spotLight position={[10, 20, 10]} angle={3} />
      <Portal />
      <Stars />
    </Canvas>
  )
}

export default Space