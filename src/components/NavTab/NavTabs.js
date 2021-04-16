import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css"

function NavTabs() {

  const location = useLocation();

  const [slides] = useState([
    {
      source: "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      title: "Animation",
      description: "There is beauty in motion"
    },
    {
      source: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80",
      title: "Coding Galore",
      description: ""
    },
    {
      source: "https://images.unsplash.com/photo-1615090602413-c8f62a785cce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "",
      description: ""
    }
  ]);

  // SET CAROUSEL DEFAULTS
  let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
  let currentSlide = slides[currentPosition]; // variable index value we can reference later

  const arrowRightClick = () => {
    currentPosition !== slides.length - 1 ? // Check index length
      setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
    currentSlide = slides[currentPosition];
  }

  const arrowLeftClick = () => {
    currentPosition !== 0 ? // Check index length
      setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
    currentSlide = slides[currentPosition];
  }



  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/" >Carlos Abril</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">


              <li class="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  Home
        </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                  About
        </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
        </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" id="slider" role="listbox">
            <img class="carousel-item active" src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="slider-img" />
            <div src={currentSlide.source} class="carousel-item active"

            >
              <div class="carousel-caption d-none d-md-block slide">
                <h2 class="display-4">{currentSlide.title}</h2>
                <p class="lead">{currentSlide.description}</p>
              </div>
            </div>



          </div>
          <a onClick={arrowLeftClick} class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a onClick={arrowRightClick} class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </header>


      <section class="py-4">
        <div class="container">


        </div>
      </section>
    </>

  );
}

export default NavTabs;
