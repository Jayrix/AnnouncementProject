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
                    <span>W dniu 27.11.2025</span> w godz. 9:00-13:00 odbędą się badania <strong>osteoporozy</strong> w osteobusie na naszym parkingu.
                    Zapisy w rejestracji na I piętrze.
                </p>
            </article>
        </div>
        
    )
}

export default TrzeciaSzczepionka;