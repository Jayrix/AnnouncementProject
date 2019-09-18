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
                    Zbliża się sezon grypowy. Informujemy, że wznowiono <strong>PROGRAM DARMOWYCH SZCZEPIEŃ PRZECIW GRYPIE</strong> dla osób powyżej 65 roku życia (dla pierwszych 300 zgłoszeń).
                </p>
            </article>
        </div>
        
    )
}

export default SzczepionkiGrypa;