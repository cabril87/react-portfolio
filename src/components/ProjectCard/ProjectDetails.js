import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const DetailsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 2.5em 6px 0 6px;
line-height: 1.4
`
const MediumText = styled.div`
font-size: 18px;
color: #fff;
font-weight: 800;
text-transform: uppercase;
`
const SmallText = styled.div`
font-size: 11px;
color: #fff;
font-weight: 800;
text-transform: uppercase;
`
const SpacedHorizontalContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const ProjectButton = styled.div`
padding: 10px 16px;
background-color: indigo;
text-transform: uppercase;
font-size: 16px;
font-weight: 700;
border: 2px solid transparent;
outline: none;
cursor: pointer;
transitiom: all 290ms ease-in-out;
border-radius: 8px;

&:hover {
    background-color: transparent;
    border: 3px solid indigo;
    color: #fff;
}
`
// const ProjectPicture = styled.div`
// width: 100%;
// height: 100%;
// display: flex;
// align-items: center;
// justify-content: center;

// img {
//     width: auto;
//     height: 100%;
//     user-select: none;
// }
// `

const ProjectDetails = (props) => {
    return (
       <DetailsContainer>
           <SmallText>Fill in here</SmallText>
           <SpacedHorizontalContainer>
               <MediumText>Fill in text here</MediumText>
               <Link to={{ pathname: props.projectLink }} target="_blank" >
               <ProjectButton >

                   Link</ProjectButton>
               </Link>
           </SpacedHorizontalContainer>
       </DetailsContainer>
    )
}

export default ProjectDetails
