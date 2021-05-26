import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NavTabs from "./components/NavTab/NavTabs";
import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop/index"


import './App.css'

const App = () => {
const location = useLocation();

  return (
    <>
        <NavTabs />
        <ScrollToTop />
     <AnimatePresence exitBeforeEnter>
        <Switch loaction={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        </Switch>
     </AnimatePresence>

     
    </>
  );
}

export default App;

