import React from 'react'

import styles from "../SCSScomponents/projectHero.module.scss"

function ProjectHero(props) {
    return (
        <div className={styles.projectHero}>

            <div className={styles.subHero}>
                <h1>{props.title} Design</h1>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default ProjectHero
