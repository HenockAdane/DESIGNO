import React, {useState} from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "../SCSScomponents/home.scss"
import ProjectTypeDiv from './projectTypeDiv';
import ProjectHero from './projectHero.js';
import Trios from './trios';

function Home() {

    const [state, setState] = useState(()=> ({
        triosObj: [{
            img: "/assets/home/desktop/illustration-passionate.svg",
            title: "PASSIONATE",
            description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        },
        {
            img: "/assets/home/desktop/illustration-resourceful.svg" ,
            title: "RESOURCEFUL",
            description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs." 
        },
        {
            img: "/assets/home/desktop/illustration-friendly.svg",
            title: "FRIENDLY",
            description: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        }
        ]}))
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


            <div className="projectFlex">

                <div className="webProject">
                    <h1>WEB DESIGN</h1>
                    <Link to="/web-design-projects">VIEW PROJECTS</Link>
                </div>

                <div className="projectsSmall">
                
                <ProjectTypeDiv bkgroundImg="/assets/home/desktop/image-app-design.jpg" title="APP" to="/app-design-projects"/>

                <ProjectTypeDiv bkgroundImg="/assets/home/desktop/image-graphic-design.jpg" title="GRAPHIC" to="/graphic-design-projects"/>


                </div>
            </div>


            <div className="triosFlex">
                {state.triosObj.map(a => <Trios img={a.img} title={a.title} description={a.description} />)}
            </div>

        </div>
    )
}

export default Home
