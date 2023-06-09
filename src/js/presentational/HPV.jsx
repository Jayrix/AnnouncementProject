import React from 'react';

const HPV = (props) => {
    
    return(
        
        <div>
            <article className="HPVContent">
                <div className="imageContainer">
                    <img src="./dist/img/HPV/HPV.jpg" alt="HPV" title="HPV"/>
                </div>
                <strong id="title">Uwaga! Ważne ogłoszenie.</strong>
                <p className="HPVText">
                    Informujemy, że młodzież urodzona w roku 2010 i 2011 od 1.06.2023 uczestniczy w <strong> bezpłatnym programie szczepień przeciwko wirusowi brodawczaka ludzkiego (HPV). </strong>
                    Niestety, na tę chwilę ilość szczepionek, które otrzymaliśmy jest ograniczona do ok. 20% populacji i obowiązuje kolejność zgłoszeń.  Zapisy w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default HPV;