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
                    <span>W dniu 28.03.2025</span> odbędą się badania <strong>osteoporozy</strong> w osteobusie na naszym parkingu.
                    Zapisy i szczegóły w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default TrzeciaSzczepionka;