import React from 'react'

const Geers = (props) => {
    return (
        <div className="Geers_imageContainer">
            <img src={`./dist/img/geers/geers${props.id}.jpg`} alt="Slajd prezentacji Geers"/>
        </div>
    )
}

export default Geers;