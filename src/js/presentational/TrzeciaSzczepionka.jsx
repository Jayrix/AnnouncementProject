import React from 'react';

const TrzeciaSzczepionka = (props) => {
    
    return(
        
        <div>
            <article className="TrzeciaSzczepionkaContent">
                <div className="imageContainer">
                    <img src="./dist/img/trzeciaSzczepionka/osteoporoza.jpg" alt="osteoporoza" title="osteoporoza"/>
                </div>
                <strong id="title">BADANIE NA OSTEOPOROZĘ</strong>
                <p className="TrzeciaSzczepionkaText">
                    Informujemy, że w dniu 23.11.2022 na terenie NZOZ "Ubezpieczalnia" odbędzie się badanie w kierunku <strong>osteoporozy</strong>. Cena 45 zł. Chętnych prosimy o zapisywanie się w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default TrzeciaSzczepionka;