import React from 'react'
import ParallaxCard from 'react-parallax-card'
import "./style.css"

function ParaCard() {
    const oneStyle = {
        margin: 'auto',
        width: 250,
        height: 250,
    }
  
    return (
        <>


            <ParallaxCard
                label=''
                enableRotate
                enableTransform
                style={oneStyle}>

                <img src='https://images.unsplash.com/photo-1618423771942-1fa46503a0ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80' alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                <div /><div /><div />



                <p style={{ fontSize: '2rem', fontWeight: 'bold', padding: '3rem' }}>
                    Javascript</p>

            </ParallaxCard>
         

        </>


    )
}

export default ParaCard;
