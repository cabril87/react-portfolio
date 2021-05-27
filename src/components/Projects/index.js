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
            <h1 className="flex w-full items-center justify-center mx-auto text-5xl font-dosis font-bold mb-10 my-8" style={{color: "white"}}>Projects</h1>
            <div className="inline-flex mx-auto flex-wrap flex-col md:flex-row-reverse md:w-8/12 p-5 m-2">

                <div className="flex-1 ... my-4">
                    
                    <ProjectCard  projectTitle="EYE READ" color="black" img={Contents.card.img[0]}  style={{
                        width: "160px"}} projectLink={"https://mysterious-beach-37448.herokuapp.com/"} smallText={"A reading app that lets you store books read and get insight on future reads!"} projectCode={"https://github.com/cabril87/Project-2-Eye-Read"}
                    
                    />

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="TO DO" color="black" img={Contents.card.img[1]} style={{
                        width: "160px"}} projectLink={"https://todo-react-2.herokuapp.com/"} smallText={"What does this day bring you? Plan your day with this to-do app!"} projectCode={"https://github.com/cabril87/todo-react"}
                        />

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="CC CONSOLE" color="black" img={Contents.card.img[2]} style={{
                        width: "160px"}} projectLink={"https://smoyamendez.github.io/covid-correlation-console/"} smallText={"Get the latest covid statistics geographically!"} projectCode={"https://github.com/cabril87/covid-correlation-console"}
                        />

                </div>
                <div className="flex-1 ... my-4">
                    <ProjectCard projectTitle="FIT TRACKER" color="black"  img={Contents.card.img[3]} style={{
                        width: "160px" }} projectLink={"https://polar-brushlands-19024.herokuapp.com/"} smallText={"Plan your work day and save your workout with this fitness app!"} projectCode={"https://github.com/cabril87/Workout-Tracker-17"}
                        />

                </div>
                <p className="flex w-full items-center justify-center mx-auto text-3xl font-dosis font-bold mb-10 my-8" style={{color: "white"}}></p>
            </div>



        </div>
    )
}

export default Projects
