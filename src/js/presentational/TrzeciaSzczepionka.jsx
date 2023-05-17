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
                    <span>W dniu 28 czerwca 2023 roku</span> odbędą się badania <strong>osteoporozy</strong> w osteobusie na naszym parkingu.
                    Koszt badania 45 zł. Zapisy w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default TrzeciaSzczepionka;