import React from 'react'
import { usePlane } from '@react-three/cannon';
import { TextureLoader, RepeatWrapping } from 'three'
import RA from '../../../Images/RA.jpg'


const Ground = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props}))
    const texture = new TextureLoader().load(RA);

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100)

    return (
        <mesh ref={ref}  receiveShadow>
            <planeGeometry attach="geometry" args={[100,100]}/>
            <meshLambertMaterial attach="material" map={texture} />
        </mesh>
    )
}


export default Ground
