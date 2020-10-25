import React from 'react'
import styles from "../SCSScomponents/about.module.scss"


function AboutUs(props) {
    return (
        <div className={styles.about} style={{flexDirection: props.flexDirection}}>

            <div className={styles.introDiv}>
                <h1>{props.title}</h1>
                <p>{props.description1}</p>
                <p>{props.description2}</p>
            </div>

            <img src={props.img} />
            
        </div>
    )
}

export default AboutUs
