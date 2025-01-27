import React from 'react';

const Kardiolog = (props) => {

    return(
            
        <div>
            <article className="KardiologContent">
                <div className="imageContainer">
                    <img src="./dist/img/Kardiolog/kardiologia.jpg" alt="kardiologia" title="kardiologia"/>
                </div>
                <p id="title">GABINET KARDIOLOGICZNY</p>
                <p className="KardiologText">
                    Kardiolog w NZOZ "Ubezpieczalnia" - również wizyty prywatne. Szczegóły w rejestracji.
                </p>
            </article>
        </div>
        
    )


}

export default Kardiolog;