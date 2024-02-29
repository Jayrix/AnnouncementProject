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
                    Informujemy, że młodzież urodzona w roku 2011, 2012 i 2013 (dziewczynki i chłopcy) uczestniczy w <strong>bezpłatnym
                    programie szczepień przeciwko wirusowi brodawczaka ludzkiego (HPV)</strong> - szczepionki Gardasil. Zapisy w rejestracji.
                </p>
            </article>
        </div>
        
    )
}

export default HPV;