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
                    Informujemy, że wznowiono darmowe szczepienia przeciw grypie dla seniorów (powyżej 65 roku życia). 
                    <br/>
                    <span>
                    Dla pozostałych osób szczepienia w cenie 35 zł.
                    </span>
                </p>
            </article>
        </div>
        
    )
}

export default SzczepionkiGrypa;