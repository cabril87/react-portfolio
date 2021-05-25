import React from 'react'
import styled from "styled-components"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ProjectDetails from './ProjectDetails';
import './style.css'

const CardWrapper = styled.div`
width: 100%;
perspective: 2000;
display: flex;
align-items: center;
justify-content: center;
`;

const CardContainer = styled(motion.div)`
width: 225px;
height: 350px;
display: flex;
flex-direction: column;
border-radius: 25px;
box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
background-color: rgb(7, 7, 7);;
color: #fff;
position: relative;
cursor: grab;
`;

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
const ProjectText = styled(motion.h1)`
color: #fff;
text-transform: uppercase;
margin: 0;
z-index: 10;
font-size: 24px;
font-weight: 900;
`
const PictureWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`
const Picture = styled(motion.div)`
width: auto;
height: 190px;
z-index: 99;
user-select: none;

margin-top: 2em;
.img {
    width: auto;
    height: 100%;
    user-select: none;
}
`

const ProjectCard = (props) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])


    return (
        <CardWrapper>

            <CardContainer
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                <TopContainer style={{backgroundColor: props.color}}>
                   
                    <PictureWrapper>
                        <Picture
                            style={{ x, y, rotateX, rotateY, zIndex: 100}}
                            drag
                            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                            dragElastic={0.12}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <LazyLoadImage
                                src={props.img}
                                style={props.style}
                                effect="blur opacity"
                                className="img"
                            />
                        </Picture>
                    </PictureWrapper>
                    <ProjectText
                        style={{ x, y, rotateX, rotateY, zIndex: 10 }}
                        drag
                        dragElastic={0.12}
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {props.projectTitle}
                    </ProjectText>
                </TopContainer>
                <BottomContainer>
                    <ProjectDetails projectLink={props.projectLink }>
                        
                    </ProjectDetails>
                       
                </BottomContainer>
            </CardContainer>
        </CardWrapper>
    )
}

export default ProjectCard;


