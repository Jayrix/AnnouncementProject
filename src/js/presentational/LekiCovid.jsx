import React from 'react';

const LekiCovid = (props) => {
    
    return(
        
        <div>
            <article className="antiviralDrugsContent">
                <div className="imageContainer">
                    <img src="./dist/img/lekicovid/leki_covid.jpg" alt="Leki_przeciwwirusowe" title="Leki_przeciwwirusowe"/>
                </div>
                <strong id="title">LEKI ANTYWIRUSOWE</strong>
                <p className="antiviralDrugsText">
                    Informujemy, że leki antywirusowe są dostępne bez recepty dla osób powyżej 1-go roku życia. Najlepiej stosować je zaraz od początku infekcji.
                </p>
            </article>
        </div>
        
    )
}

export default LekiCovid;