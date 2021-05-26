import React from "react";
import Stack from '../components/Stack/index'
import Header from '../components/Header/Header'
import Projects from '../components/Projects/index'
import "./index.css"
import Contact from "../components/Contact/index";
import { Route } from "react-router";



const Home = () => {
  return (
    <>
      <Header />
      <Stack />
      <Route>

      <Projects />
      </Route >
      <Contact />
    </>
  );
}

export default Home;
