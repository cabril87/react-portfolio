import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css"

function NavTabs() {

  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <h3>Carlos Abril</h3>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">


              <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active"  : "nav-link"}>
                  Home
        </Link>
        
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                  About
        </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
        </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Game Blog
        </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

      
    </>

  );
}

export default NavTabs;
