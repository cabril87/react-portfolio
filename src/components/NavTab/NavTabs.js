import React from "react";
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { FaHouzz } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaBlog } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { FaAngleDoubleRight } from 'react-icons/fa'
import "./style.css"

function NavTabs() {

  const location = useLocation();




  return (


    <nav className="navbar" style={{zIndex:"1"}}>
      <ul className="navbar-nav">
        <li className="logo">
          <Link

            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            <IconContext.Provider value={{ className: "logo-icon " }}>

              <FaAngleDoubleRight />

              
            </IconContext.Provider>

          </Link>
        </li>
        <li className="nav-item">

          <Link

            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            <IconContext.Provider value={{ className: "top-react-icons " }}>

              <FaHouzz />
              <span className="link-text">Home</span>
            </IconContext.Provider>
          </Link>
        </li>
        <li className="nav-item">
          <Link

            to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <FaUserCircle />
              <span className="link-text">About Me</span>
            </IconContext.Provider>
          </Link>

        </li>
        <li className="nav-item">

          <Link

            to="/blog"
            className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
          >
            <IconContext.Provider value={{ className: "top-react-icons" }}>
              <FaBlog />
              <span className="link-text">Blog</span>
            </IconContext.Provider>
          </Link>
        </li>

        <li className="nav-item">

          <a

            href="https://github.com/cabril87"
            className="nav-link active nav-link"
          >
            <IconContext.Provider value={{ className: "top-react-icons" }}>

              <FaGithub />
              <span className="link-text">Github</span>
            </IconContext.Provider>
          </a>
        </li>
        <li className="nav-item">

          <a

            href="https://www.linkedin.com/in/carlos-abril-380140189/"
            className= "nav-link active nav-link"
          >
            <IconContext.Provider value={{ className: "top-react-icons" }}>

              <FaLinkedin />
              <span className="link-text">LinkedIn</span>
            </IconContext.Provider>
          </a>
        </li>


      </ul>




    </nav>







  );
}

export default NavTabs;

