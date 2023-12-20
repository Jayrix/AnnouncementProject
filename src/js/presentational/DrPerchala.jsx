import React from 'react';

const DrPerchala = (props) => {
    
    return(
        
        <div>
            <article className="drPerchalaContent">
                <div className="imageContainer">
                    <img src="./dist/img/drPerchala/drPerchala.png" alt="Asclepius" title="Asclepius"/>
                </div>
                <h2 id="title">Informacja dla pacjentów DR. PERCHAŁY</h2>
                <p className="drPerchalaText">
                    W związku z <span>przejściem Pani Dr. Wandy Perchały na emeryturę,</span> prosimy pacjentów
                    o kontakt z rejestracją w celu przepisania deklaracji do innych lekarzy.
                </p>
            </article>
        </div>
        
    )
}

export default DrPerchala;