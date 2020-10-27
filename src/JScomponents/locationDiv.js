import React from 'react'

import styles from "../SCSScomponents/locationDiv.module.scss"

function LocationDiv(props) {
    return (
        <div className={styles.locationDiv}>

        <div className={styles.locationInfo}>
            <h1>{props.name}</h1>

            <div className={styles.locationMoreInfo}>
                <ul>
                    <li className={styles.bold}>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                </ul>

                <ul>
                    <li className={styles.bold}>{props.li4}</li>
                    <li>{props.li5}</li>
                    <li>{props.li6}</li>
                </ul>

            </div>


        </div>

        
        {/* <div className={styles.imgContainer} style={{backgroundImage: `url(${props.img})`}}> */}

        <div className={styles.imgContainer}>
        {props.map}

        </div>
            
        </div>
    )
}

export default LocationDiv
