import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "../SCSScomponents/home.scss"

function Home() {
    return (
        <div className="home">

            <div className="homeHero">
                <div className="intro">
                <h1>Award-winning custom designs and digital branding solutions</h1>
                <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>

                <Link className="introBtn" to={"/contact"}>LEARN MORE</Link>

                </div>

                <div className="introImg">

                </div>

                
            </div>


            <div className="projectGrid">

                <div className="projects web">
                    <h1>WEB DESIGN</h1>
                    <Link to={"/web-design"}>VIEW PROJECTS</Link>
                </div>

                
                <div className="projects app">
                    <h1>APP DESIGN</h1>
                    <Link to={"/app-design"}>VIEW PROJECTS</Link>
                </div>

                
                <div className="projects graphic">
                    <h1>GRAPHIC DESIGN</h1>
                    <Link to={"/graphic-design"}>VIEW PROJECTS</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Home
