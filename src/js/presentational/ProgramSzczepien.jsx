import React from 'react';

const ProgramSzczepien = (props) => {
    
    return(
        
        <div>
            <article className="programSzczepienContent">
                <div className="imageContainer">
                    <img src="./dist/img/programSzczepien/programSzczepien.jpg" alt="programSzczepien" title="programSzczepien"/>
                </div>
                <strong id="title">SZCZEPIENIA PRZECIW GRYPIE</strong>
                <p className="programSzczepienText">
                    Informujemy, że w sezonie 2022/2023 Burmistrz Cieszyna planuje uruchomić program
                    bezpłatnych szczepień przeciwko grypie, <strong>dla mieszkańców Cieszyna powyżej 60 lub 65 roku życia.</strong>
                </p>
            </article>
        </div>
        
    )
}

export default ProgramSzczepien;