import React from "react";

import Carousel from "../Carousel/Carousel"

// import ParticleImage from "../ParticleImage/ParticleImageOne"

import Jumbotron from "../Jumbotron/Jumbotron";
import "./index.css"



function Home() {
  return (
    <>
      <Carousel />
      <section className="py-4">
        <div className="container">

{/* <ParticleImage/> */}
        </div>
      </section>
      <div className="container">

        <div className="row text-center">


          {/* <Hero>


          </Hero> */}

          <div className="row text-center">
            <div className="col">

              <h1 style={{ margin: '20px' }}>Projects</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
                ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
                elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
          </p>
            </div>

          </div>

          <Jumbotron />



          <div className="row text-center col-style">
            <div className="col col-style">

              <h1 style={{ margin: '20px', marginBottom: '50px' }}>Work in Progress</h1>
              <p style={{ margin: '20px', marginBottom: '50px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
                ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
                elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
          </p>
            </div>

          </div>



        </div>
      </div>
    </>
  );
}

export default Home;
