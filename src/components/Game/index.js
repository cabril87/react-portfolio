import React from 'react'
import { Canvas } from "@react-three/fiber";
import {  Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon'
import World from './World';
import Player from './Player';



const Game = () => {
    return (
        <Canvas >
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.25} />
            <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
            <Physics gravity={[0, -30, 0]}>
                <World />
                <Player />
            </Physics>

        </Canvas>
    )
}

export default Game;
