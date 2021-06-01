import React from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
// import {  Sky } from '@react-three/drei';
import { Physics, useBox,  usePlane,  useSphere } from '@react-three/cannon'


function Ball({ args = [0.5, 32, 32]}) {
    const [ref, api] = useSphere(() => ({ mass: 1, args: 0.5 }))
    
  usePlane(() => ({ 
    position: [0, 0, 0], 
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0)
      api.position.set(0, 10, 0)
    }
  }))

    return (
      <mesh ref={ref}>
        <sphereBufferGeometry  args={args}/>
        <meshStandardMaterial color="white" />
      </mesh>
    )
  }


function Paddle({args = [2, 0.5, 1]}) {
  const [ref, api] = useBox(() => ({ args }))

  useFrame(state => {
      api.position.set(state.mouse.x * state.viewport.width / 2, -state.viewport.height / 2 ,0)
  })
    
    return (
      <mesh ref={ref} >
        <boxBufferGeometry args={args}/>
        <meshStandardMaterial color="lightblue" />
      </mesh>
    )
  }

  

const Game = () => {
    return (
        <Canvas camera={{ position: [0, 5, 12], fov: 50}} >
            <ambientLight intensity={0.25} />
            <pointLight castShadow intensity={0.7} position={[10, 10, 5]} />
            <pointLight castShadow intensity={0.7} position={[-10, -10, -5]} />
            <Physics gravity={[0, -30, 0]} defaultContactMaterial={{restitution: 1.1}}>
                <Paddle />
                <Ball />
            </Physics>
        </Canvas>
    )
}

export default Game;
