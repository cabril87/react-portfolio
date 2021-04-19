import React from 'react'
import ParallaxCard from 'react-parallax-card'
import "./style.css"

function ParaCard() {
    const oneStyle = {
        margin: '0 auto',
        width: '150px'
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

                <img src='https://images.unsplash.com/photo-1591575735121-c56d108fcdc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80' alt=""
                 style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <div /><div /><div />

            

               
            
            </ParallaxCard>
                </div>
                

            </div>
                <div className="row text-center">
            <div className="col">

            <h1 style={{ margin:'20px'}}>Covid Console</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                
            </p>
            </div>

        </div>


        </>


    )
}

export default ParaCard;
