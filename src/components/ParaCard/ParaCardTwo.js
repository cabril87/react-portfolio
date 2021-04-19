import React from 'react'
import ParallaxCard from 'react-parallax-card'
import "./style.css"

function ParaCardTwo() {
    const oneStyle = {
        margin: '0 auto',
        width: '140px'
    }
  
    return (
        <>

            <div className="row">
                <div className="col size">

            <ParallaxCard
                label=''
                enableRotate
                enableTransform
                style={oneStyle}>

                <img src='https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80' alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <div /><div /><div />



              

            </ParallaxCard>
                </div>
                

            </div>
            <div className="row text-center">
                <div className="col">

                <h1 style={{ margin:'20px'}}>Fitness Tracker</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                    varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                    
                </p>
                </div>

            </div>


        </>


    )
}

export default ParaCardTwo;
