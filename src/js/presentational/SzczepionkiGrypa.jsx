import React from 'react';

const SzczepionkiGrypa = (props) => {
    
    return(
        <li className="announcementRoot">
            <article className="vaccineContent">
                <div className="imageContainer">
                    <img src="./dist/img/vaccine.jpg" alt="Szczepionka" title="Szczepionka"/>
                </div>
                <strong>UWAGA! UWAGA!</strong>
                <p className="vaccineText">
                    Informujemy, że szczepienia dla seniorów (powyżej 65 roku życia) są darmowe.
                </p>
            </article>
        </li>
    )
}

export default SzczepionkiGrypa;