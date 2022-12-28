import React, {useRef, Suspense} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Box, FirstPersonControls, OrbitControls, PerspectiveCamera, TransformControls } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three'
import { useNavigate } from 'react-router-dom'


const extraStyle={
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    left: 0,
    top: 0,
}

const Planet = ({pos, txt, arg, click}) => {
  const texture =  useLoader(TextureLoader, txt);

  return(
    <mesh position={pos} onClick={click} >
      <sphereBufferGeometry args={arg} attach='geometry' />
      <meshBasicMaterial attach='material' map={texture} />
    </mesh>
  )
}

function Space() {

  const navigate = useNavigate();

  const dn = useLoader(TextureLoader, './bottom.png');
  const up = useLoader(TextureLoader, './top.png');
  const bk = useLoader(TextureLoader, './back.png');
  const ft = useLoader(TextureLoader, './front.png');
  const rt = useLoader(TextureLoader, './right.png');
  const lt = useLoader(TextureLoader, './left.png');
  
  return (
    <Canvas className='skyBox' style={extraStyle}>
        {/* <OrbitControls enableZoom={false}/> */}
        <FirstPersonControls lookSpeed={0.05} />
        <Suspense fallback='loading'>
          <Planet pos={[25, 0, -15]} arg={[3.2]} txt='./mercury.jpg' click={() => navigate('/World')}/>
          <Planet pos={[0, 0, -15]} arg={[2.2]} txt='./jupiter.jpg' click={() => navigate('/World')}/>
          <Planet pos={[-15, 0, -15]} arg={[1.2]} txt= './saturn.jpg' click={() => navigate('/World')}/>
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