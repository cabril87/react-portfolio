import React from 'react'
import { Link } from "react-router-dom";
import ParaCard from "../ParaCard/ParaCard"
import ParaCardTwo from '../ParaCard/ParaCardTwo'
import ParaCardThree from '../ParaCard/ParaCardThree'
import "./style.css"

function Jumbotron() {
    
    return (
        <div className="jumbotron jumbotron-fluid">

            <div className="row">
                <div className="col box">
  
                <Link to={{ pathname: "https://smoyamendez.github.io/covid-correlation-console/" }} style={{ textDecoration: 'none', color: 'white' }} target="_blank" >
                <ParaCard className="size"/>
                </Link>

                </div>
                <div className="col box">
                <Link to={{ pathname: "https://polar-brushlands-19024.herokuapp.com/?id=6072f74ba4ec8f0015ef60cf" }} style={{ textDecoration: 'none', color: 'white' }} 
                target="_blank" >
            <ParaCardTwo />
                </Link>
                </div>
                <div className="col box">
                <Link to={{ pathname: "https://cabril87.github.io/WDS-TPAPI-HW-5/" }} style={{ textDecoration: 'none', color: 'white' }} 
                target="_blank" >
                <ParaCardThree />
                </Link>
                </div>

            </div>


        </div>
    )
}

export default Jumbotron;
