import React from 'react';

const TestyNaGrype = props => {

    return(
        <div>
            <article className="testContent">
                <div className="imageContainer">
                    <img src="./dist/img/grypa.jpg" alt="Test na grype" title="Test na grype"/>
                </div>
                <strong>Testy na grypę</strong>
                <ul>
                    <li>Bez skierowania</li>
                    <li>Cena: 30 zł</li>
                    <li>O szczegóły prosimy pytać w gabinecie zabiegowym</li>
                </ul>
            </article>
        </div>
    )
}

export default TestyNaGrype;