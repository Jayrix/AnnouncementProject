import React from 'react';

const HPV = (props) => {
    
    return(
        
        <div>
            <article className="HPVContent">
                <div className="imageContainer">
                    <img src="./dist/img/HPV/HPV.jpg" alt="HPV" title="HPV"/>
                </div>
                <strong id="title">SZCZEPIENIA PRZECIW HPV</strong>
                <p className="HPVText">
                    Informujemy, że dzieci w wieku 9-14 lat (dziewczynki i chłopcy) uczestniczą w <strong>bezpłatnym
                    programie szczepień przeciwko wirusowi brodawczaka ludzkiego (HPV)</strong> - szczepionki Gardasil. Zapisy w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default HPV;