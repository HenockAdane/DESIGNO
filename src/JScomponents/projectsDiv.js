import React from 'react'
import styles from "../SCSScomponents/projectDiv.module.scss"


function ProjectsDivs(props) {
    return (
        <div className={styles.projectsDivs}>

            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            
        </div>
    )
}

export default ProjectsDivs
