import React from 'react'

const PSP = (props) => {
    return (
        <div className="PSP_imageContainer">
            <img src={`./dist/img/psp/psp${props.id}.png`} alt="Slajd prezentacji PSP"/>
        </div>
    )
}

export default PSP;