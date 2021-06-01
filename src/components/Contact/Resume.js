import React, { useState } from 'react'
import './Form.css'
import { useTrail, animated, to, useSpring } from 'react-spring'



const Trail = ({ open, children}) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 135 },
     opacity:1, 
      x:1,
      y:1,
     
      from: {  
        opacity:0, 
        x:0,
        y:0, },
    })
    return (
        <>
          {trail.map(({ x,y,  ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{ ...rest, transform:
            to(
            [
              x.to({
                range: [0, 0.9, 1],
                output: [0, 1.2, 1]
              }),
              y.to({
                range: [0, 0.9, 1],
                output: [0, 0.8, 1]
              }),
             
            ],
            (x, y) => `scale(${x},${y})`
          )
            
                     }}
              >
           {items[index]}
            </animated.div>
          ))}
        </>
     
    )
  }
  
  const SqueezeSpring = ({ children }) => {
    const [state, toggle] = useState(false);
    const { x, y } = useSpring({
      from: { x: !state ? 1: 0, y: !state ? 1: 0 },
      to: { x: 1, y: 1 },
      config: { mass: 0.5, tension:120, friction: 2, precision: 0.001 },
      reset: state,
      onStart: (state) => toggle(false)
    });
    
    return (
      <animated.div
        onMouseEnter={() => toggle(true)}
        style={{
          transform: to(
            [
              x.to({
                range: [0, 0.3, 1],
                output: [1, 1.3, 1]
              }),
              y.to({
                range: [0, 0.3,  1],
                output: [1, 0.7,  1]
              })
            ],
            (x, y) => `scale(${x},${y})`
          )
        }}
      >
        {children}
      </animated.div>
    );
  };

const Resume = () => {
    const Email = ["E", "m", "a", "i", "l"];
    const Me = ["M", "e"];

  

    return (
        <div className="min-h-screen flex items-center justify-center">

        <div className='container mx-auto display: w-6'>

        <div className='form-content-left flex items-center justify-center flex-col '>
        <div className="items-center justify-center flex-row m-4 sm:text-sm">
         <h1 className="items-center justify-center flex  m-4  md: text-8xl change" style={{
             fontWeight: "900",
             color: "palevioletred",
              
            }}>
               <Trail>
         
           
               {Email.map((word) => (
        <SqueezeSpring >{word}</SqueezeSpring>
      ))}&nbsp;
              {Me.map((word) => (
        <SqueezeSpring >{word}</SqueezeSpring>
      ))}
           
         </Trail>
           
         </h1>

           <p className="items-center justify-center flex flex-col m-4 md: text-2xl sm:text-1xs " style={{
           fontWeight: "200",
           color: "#eee",

           }}>
         
             carlos.abril87@outlook.com
           </p>

        </div>
        <div className="items-center justify-center flex-row m-4 p-5 ">
          <a className="res-link" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/169bCM5lHfOuU0BtPepOUp5LsyF5iYR52DfJzbueYrCo/edit?usp=sharing">Resume</a>

        </div>

      </div>
      <div className='form-content-left flex items-center justify-center flex-col '>


      </div>
        </div>
        </div>
      
    )
}

export default Resume
