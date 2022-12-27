import React, {useRef, Suspense} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three'


const extraStyle={
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
}

function Space() {

  const dn = useLoader(TextureLoader, './bottom.png');
  const up = useLoader(TextureLoader, './top.png');
  const bk = useLoader(TextureLoader, './back.png');
  const ft = useLoader(TextureLoader, './front.png');
  const rt = useLoader(TextureLoader, './right.png');
  const lt = useLoader(TextureLoader, './left.png');
  
  return (
    <Canvas className='skyBox' style={extraStyle}>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback='loading'>
          <Box args={[1000, 1000, 1000]}>
            <meshBasicMaterial side={THREE.BackSide} attach="material-0" map={rt} />
            <meshBasicMaterial side={THREE.BackSide} attach="material-1" map={lt} />
            <meshBasicMaterial side={THREE.BackSide} attach="material-2" map={up} />
            <meshBasicMaterial side={THREE.BackSide} attach="material-3" map={dn} />
            <meshBasicMaterial side={THREE.BackSide} attach="material-4" map={bk} />
            <meshBasicMaterial side={THREE.BackSide} attach="material-5" map={ft} />
        </Box>
        </Suspense>
    </Canvas>
  )
}

export default Space