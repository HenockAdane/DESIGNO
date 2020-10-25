import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import styles from "../SCSScomponents/projectTypeDiv.module.scss"

function ProjectTypeDiv(props) {
    return (
        <div className={styles.projects} style={{backgroundImage: `url(${props.bkgroundImg})`}}>
        <h1>{props.title} DESIGN</h1>
        <Link to={props.to}>VIEW PROJECT</Link>
            
            
        </div>
    )
}

export default ProjectTypeDiv
