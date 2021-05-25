import React from "react";
import Stack from '../components/Stack/index'
import Header from '../components/Header/Header'
import Projects from '../components/Projects/index'
import "./index.css"
import Contact from "../components/Contact/index";



const Home = () => {
  return (
    <>
      <Header />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
