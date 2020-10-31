import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import styles from "../SCSScomponents/locationDiv.module.scss"

function LocationDiv(props) {

    let position = [props.x,props.y]
    return (
        <div className={styles.locationDiv} style={{flexDirection: props.flexDirection}}>

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


        <Map className={styles.map} style={{zIndex: "-1", width: "100%", height: "326px"}} center={position} zoom={16}>
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>

            
        </div>
    )
}

export default LocationDiv
