import React from 'react';

const WstrzymanieSzczepien = (props) => {
    
    return(
        
        <div>
            <article className="wstrzymanieSzczepienContent">
                <strong id="title">UWAGA! UWAGA!</strong>
                <div className="imageContainer">
                    <img src="./dist/img/vaccine.jpg" alt="Szczepionka" title="Szczepionka"/>
                </div>
                <p className="wstrzymanieSzczepienText">
                    Informujemy, że w sezonie jesienno-zimowym 2022/23 Min. Zdrowia wstrzymało program bezpłatnych szczepień przeciwko grypie.
                    <strong>Utrzymano bezpłatne szczepionki dla osób powyżej 75 r. życia i ciężarnych.</strong>
                </p>
            </article>
        </div>
        
    )
}

export default WstrzymanieSzczepien;