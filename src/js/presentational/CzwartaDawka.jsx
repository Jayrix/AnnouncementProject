import React from 'react';

//CSS for TrzeciaSzczepionka.jsx used on purpose 

const CzwartaDawka = (props) => {
    
    return(
        
        <div>
            <article className="TrzeciaSzczepionkaContent">
                <div className="imageContainer">
                    <img src="./dist/img/trzeciaSzczepionka/trzecia.jpg" alt="Szczepionka-Covid" title="Szczepionka przeciw Covid"/>
                </div>
                <strong id="title">CZWARTA DAWKA SZCZEPIONKI</strong>
                <p className="TrzeciaSzczepionkaText">
                    Od 5 sierpnia 2022 r. ruszają zapisy na szczepienia drugą dawką przypominającą (4 dawka) na COVID-19 dla osób, które ukończyły 60 lat.
                </p>
            </article>
        </div>
        
    )
}

export default CzwartaDawka;