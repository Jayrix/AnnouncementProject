import React from 'react';

const GabinetNeurologiczny = (props) => {

    return(
            
        <div>
            <article className="gabinetNeurologicznyContent">
                <div className="imageContainer">
                    <img src="./dist/img/gabinetNeurologiczny/neurologia.png" alt="neurologia" title="neurologia"/>
                </div>
                <h3 id="title">GABINET NEUROLOGICZNY</h3>
                <p className="gabinetNeurologicznyDane">
                    Dr Bartosz Tochowicz - Neurolog 
                </p>
                <p className="gabinetNeurologicznyText">
                    Konsultacje i leczenie schorzeń neurologicznych oraz Doppler naczyń szyjnych. <br/> 
                    Szczegóły w rejestracji.
                </p>    
            </article>
        </div>
        
    )


}

export default GabinetNeurologiczny;