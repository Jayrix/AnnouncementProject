import React from 'react';

const TrzeciaSzczepionka = (props) => {
    
    return(
        
        <div>
            <article className="TrzeciaSzczepionkaContent">
                <div className="imageContainer">
                    <img src="./dist/img/trzeciaSzczepionka/trzecia.jpg" alt="Szczepionka-Covid" title="Szczepionka przeciw Covid"/>
                </div>
                <strong id="title">TRZECIA DAWKA SZCZEPIONKI</strong>
                <p className="TrzeciaSzczepionkaText">
                    Szczepimy przeciwko COVID-19. Trzecia dawka szczepionki firmy <strong>Pfizer</strong> dostępna niezależnie od rodzaju poprzednich dawek.
                </p>
            </article>
        </div>
        
    )
}

export default TrzeciaSzczepionka;