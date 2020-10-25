import React from 'react'
import "../SCSScomponents/trios.scss"

function Trios(props) {
    return (
        <div className="trios">
            <img src={`${props.img}`} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Trios
