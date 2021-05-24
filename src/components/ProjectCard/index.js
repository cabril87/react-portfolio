import React from 'react'
import styled from "styled-components"

const CardContainer = styled.div`
width: 285px;
height: 500px;
display: flex;
flex-direction: column;
border-radius: 25px;
box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
background-color: #1d1f21;
color: #fff;
position: relative;
cursor: grab;
`;

const CircleWrapper = styled.div`
position: absolute;
top: 0;
left: 0;
min-width: 100%;
min-height: 100%;
overflow: hidden;
border-top-right-radius: 25px;
`
const Circle = styled.div`
position: absolute;
width: 350px;
height: 350px;
top: -4.2em;
right: -10em;
z-index: 5;
background-color:indigo;
border-radius: 50%;
`
const TopContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
flex: 1.2;
position: relative;
align-items: center;
justify-content: flex-end;
padding: 1em 15px
`
const BottomContainer = styled.div`
display: flex;
flex: 0.8;
padding: 0 1em;
`
const ProjectText = styled.h1`
color: #fff;
text-transform: uppercase;
margin: 0;
z-index: 10;
font-size: 76px;

`

const ProjectCard = (props) => {
    return(

    <CardContainer>
        <TopContainer>
        <CircleWrapper>
            <Circle />
        </CircleWrapper>
        </TopContainer>
        <BottomContainer>
            Bottom
        </BottomContainer>
    </CardContainer>
    )
}

export default ProjectCard;


