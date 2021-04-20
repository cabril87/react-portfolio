import React, {useState} from 'react'
// import "./index.css"

const Carousel = () => {
    const [slides] = useState([
        {
          source: "https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
          title: "Animation",
          description: "Theres beauty in motion"
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
        <div>
            <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" id="slider" role="listbox">
            <img className="carousel-item active" src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title}  />
            <div src={currentSlide.source} className="carousel-item active"

            >
              <div className="carousel-caption d-none d-md-block slide">
                <h2 className="display-3">{currentSlide.title}</h2>
                <p className="lead">{currentSlide.description}</p>
              </div>
            </div>



          </div>
          <a onClick={arrowLeftClick} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a onClick={arrowRightClick} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
            
        </div>
    )
}

export default Carousel
