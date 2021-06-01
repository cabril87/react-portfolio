import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { useKeyboardControls } from './Hooks/useKeyboardControls'
import { Vector3 } from 'three';


const SPEED = 6;

const Player = (props) => {
    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        // Jump,
    } = useKeyboardControls()

    console.log(moveForward)

    const { camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        position: [0, 105, 0],
        type: "Dynamic",
        ...props
    }))
    const velocity = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe((velo) => velocity.current = velo)
    }, [api.velocity])

    

    useFrame(() => {
        ref.current.updateMatrixWorld();
            camera.position.copy(ref.current.position);
        
            const direction = new Vector3();
            const frontVector = new Vector3(0, 0, (moveBackward ? 1 : 0) -+ (moveForward ? 1 : 0))
            const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0);
            direction
                .subVectors(frontVector, sideVector)
                .normalize()
                .multiplyScalar(SPEED)
                .applyEuler(camera.rotation)
    
            api.velocity.set(direction.x, velocity.current[1], direction.z)
    })






    return (
        <>
        
        
        </>
    );
}

export default Player
