import React from 'react';

const SzczepionkiGrypa = (props) => {
    
    return(
        
        <div>
            <article className="vaccineContent">
                <div className="imageContainer">
                    <img src="./dist/img/vaccine.jpg" alt="Szczepionka" title="Szczepionka"/>
                </div>
                <strong id="title">UWAGA! UWAGA!</strong>
                <p className="vaccineText">
                    WOLNE SZCZEPIONKI NA COVID-19 MARKI PFIZER! Informacja w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default SzczepionkiGrypa;