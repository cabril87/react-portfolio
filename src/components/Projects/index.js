import React from 'react'
import Contents from '../Contents'
import ProjectCard from "../ProjectCard"


const Projects = () => {
 
    return (
        <div
            className="min-h-screen flex w-full flex-wrap items-center justify-center mx-auto flex-col"
            style={{
                background: 'black',
                zIndex: '0'
            }}
        >
            <h1 className="flex w-full items-center justify-center mx-auto text-5xl font-dosis font-bold mb-10" style={{color: "white"}}>Projects</h1>
            <div className="inline-flex mx-auto flex-wrap flex-col md:flex-row-reverse md:w-10/12 md:justify-between">

                <div className="flex-1 ... my-4">
                    
                    <ProjectCard  projectTitle="EYE READ" color="black" img={Contents.card.img[0]}  style={{
                        width: "160px"}} projectLink={"https://www.google.com"}
                    
                    />

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="TO DO" color="black" img={Contents.card.img[1]} style={{
                        width: "160px"
                    }}/>

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="CC CONSOLE" color="black" img={Contents.card.img[2]} style={{
                        width: "160px"
                    }}/>

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="FIT TRACKER" color="black"  img={Contents.card.img[3]} style={{
                        width: "160px" 
                    }}/>

                </div>

            </div>



        </div>
    )
}

export default Projects
