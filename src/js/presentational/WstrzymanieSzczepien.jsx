import React from 'react';

const WstrzymanieSzczepien = (props) => {
    
    return(
        
        <div>
            <article className="wstrzymanieSzczepienContent">
                <strong id="title">SZCZEPIENIA PRZECIW GRYPIE</strong>
                <div className="imageContainer">
                    <img src="./dist/img/vaccine.jpg" alt="Szczepionka" title="Szczepionka"/>
                </div>
                <p className="wstrzymanieSzczepienText">
                    Informujemy, że NZOZ "Ubezpieczalnia" wykonuje szczepienia przeciwko grypie dla wszystkich chętnych pacjentów. Zapisy w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default WstrzymanieSzczepien;