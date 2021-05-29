import React from 'react'






const FrontWheel = () => {
    return (
        
            <mesh position={[3, 0.5, 0]}>
                <boxGeometry
                 attach="geometry"
                  args={[1.5,1.5,5]}
                  />
                <meshLambertMaterial attach="material" color="#383836" />
                </mesh>
        
    )
}

const BackWheel = () => {
    return (
        
            <mesh position={[-3, 0.5, 0]}>
                <boxGeometry 
                attach="geometry" 
                args={[1.5,1.5,5]}
                />
                <meshLambertMaterial attach="material" color="#383836" />
                </mesh>
       
    )
}


const Main = () => {
    return (
        <mesh position={[0, 1.5, 0]}>
           <boxGeometry 
                attach="geometry" 
                args={[10,2,4]}
                /> 
                <meshLambertMaterial attach="material" color="red" />
        </mesh>
    )
}

const Cabin = () => {
    return (
        <mesh position={[0.5, 3, 0]}>
           <boxGeometry 
                attach="geometry" 
                args={[5,2.5,3.5]}
                /> 
                <meshLambertMaterial attach="material" color="white" />
        </mesh>
    )
}

const CarMain = () => {
    return (
        <>
            <FrontWheel />
            <BackWheel />
           
            <Main />
            <Cabin />
       
        </>
    )
}

export default CarMain
