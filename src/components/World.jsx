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

function World() {

  const dn = useLoader(TextureLoader, './dn.png');
  const up = useLoader(TextureLoader, './up.png');
  const bk = useLoader(TextureLoader, './bk.png');
  const ft = useLoader(TextureLoader, './ft.png');
  const rt = useLoader(TextureLoader, './rt.png');
  const lt = useLoader(TextureLoader, './lt.png');
  
  return (
    <Canvas className='skyBox' style={extraStyle}>
        <OrbitControls enableDamping={true} enableZoom={false}/>
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

export default World