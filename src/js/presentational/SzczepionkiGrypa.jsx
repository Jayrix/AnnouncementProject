import React from 'react';

const SzczepionkiGrypa = (props) => {
    
    return(
        
        <div>
            <article className="vaccineContent">
                <div className="imageContainer">
                    <img src="./dist/img/vaccine.jpg" alt="Szczepionka" title="Szczepionka"/>
                </div>
                <strong id="title">SZCZEPIENIA PRZECIW GRYPIE</strong>
                <p className="vaccineText">
                    Zbliża się okres sezonowej grypy.
                    Prosimy o zadbanie o swój stan zdrowia i zgłaszanie się do szczepień. <span>Szczepionki są za darmo w wieku 0-18 lat i powyżej 65 roku życia, w przypadku pozostałych osób kosztują 26,60 zł.</span>
                    &nbsp;Informacje u lekarzy i w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default SzczepionkiGrypa;