import React from 'react'
import Contents from '../Contents'
import ProjectCard from "../ProjectCard"

const Projects = () => {
    return (
        <div
            className="min-h-screen flex w-full flex-wrap items-center justify-center mx-auto  "
            style={{
                background: 'black',
                zIndex: '0'
            }}
        >
            <h1 className="flex w-full items-center justify-center mx-auto" style={{color: "white"}}>Projects</h1>
            <div className="inline-flex mx-auto flex-wrap flex-col md:flex-row-reverse md:w-10/12 md:justify-between">

                <div className="flex-1 ... my-4">

                    <ProjectCard  projectTitle="EYE READ" color="green" img={Contents.card.img[0]}/>

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="TO DO" color="blue" img={Contents.card.img[1]} style={{
                        width: "160px"
                    }}/>

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="CC CONSOLE" color="hotpink" img={Contents.card.img[2]} style={{
                        width: "160px"
                    }}/>

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="FIT TRACKER" color="orange"  img={Contents.card.img[3]} style={{
                        width: "160px"
                    }}/>

                </div>

            </div>



        </div>
    )
}

export default Projects
