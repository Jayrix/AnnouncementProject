import React from 'react';

const Maseczki_Ukraina = (props) => {
    
    return(
        
        <div>
            <article className="maseczki_UkrainaContent">
                <div className="imageContainer">
                    <img src="./dist/img/maseczki/maska.jpg" alt="maska" title="maska"/>
                </div>
                <strong id="title">Увага Шановні пацієнти!</strong>
                <p className="maseczki_UkrainaText">
                    входячи до приймальні, медичних установ та установ охорони здоров’я, включаючи лікарні, амбулаторні, стоматологічні установи та аптеки будь-ласка,<strong> не забувайте одягнути захисну маску.</strong>
                </p>
            </article>
        </div>
        
    )
}

export default Maseczki_Ukraina;