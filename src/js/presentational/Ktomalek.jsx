import React from 'react';

const Ktomalek = (props) => {
    
    return(
        
        <div>
            <article className="KtomalekContent">
                <h3 id="title">DOSTĘPNOŚĆ LEKÓW</h3>
                <div className="imageContainer">
                    <img src="./dist/img/ktomalek/ktomalek.jpg" alt="Obraz przedstawiający receptę" title="Ktomalek"/>
                </div>
                <p className="KtomalekText">
                    Informujemy, że dostępność leków w aptekach można sprawdzić na stronach internetowych: <snap>ktomalek.pl</snap> oraz <snap>gdziepolek.pl</snap>, 
                    podając najpierw miejscowość, a potem nazwę lekarstwa oraz wybierając dawkę.
                </p>
            </article>
        </div>
        
    )
}

export default Ktomalek;