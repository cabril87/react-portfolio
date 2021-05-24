import React from 'react'
import ProjectCard from "../ProjectCard"

const Projects = () => {
    return (
        <div
        className="min-h-screen flex items-center justify-center "
        style={{
            background: 'black',
            zIndex: '0'
        }}
    >
            
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:justify-between">
           <div className="text-white font-dosis w-full  text-center  "
           >
                <ProjectCard />
               </div> 
           
        </div>
        
        

    </div>
    )
}

export default Projects
