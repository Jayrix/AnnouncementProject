import React from 'react';

const SzczepionkiGrypa = (props) => {
    
    return(
        
        <div>
            <article className="vaccineContent">
                <div className="imageContainer">
                    <img src="./dist/img/vaccine.jpg" alt="Szczepionka" title="Szczepionka"/>
                </div>
                <strong>UWAGA! UWAGA!</strong>
                <p className="vaccineText">
                    Zbliża się sezon grypowy. Przypominamy, że najskuteczniejszą profilaktyką przeciw grypie są szczepienia (zwłaszcza u osób starszych). 
                </p>
            </article>
        </div>
        
    )
}

export default SzczepionkiGrypa;