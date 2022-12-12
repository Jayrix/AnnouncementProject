import React from 'react';

const PracowniaUSG = (props) => {
    
    return(
        
        <div>
            <article className="pracowniaUSGContent">
                <section className="pracowniaUSGIntro">
                    <div className="imageContainer">
                        <img src="./dist/img/pracowniaUSG/pracowniaUSG.jpg" alt="pracowniaUSG" title="pracowniaUSG"/>
                    </div>
                    <strong id="title">PRACOWNIA USG</strong>
                </section>
                <section className="pracowniaUSGData">
                    <p className="pracowniaUSGListName">Zakres usług:</p>
                    <div className="listsContainer">
                        <ul>
                            <li>Usg jamy brzusznej</li>
                            <li>Usg tarczycy</li>
                            <li>Doppler naczyń kończyn</li>
                            <li>Doppler naczyń szyjnych</li>
                        </ul>
                        <ul>
                            <li>Usg przezciemiączkowe</li>
                            <li>Echokardiografia</li>
                            <li>Usg stawów i mięśni</li>
                        </ul>
                    </div>
                    <p className="rejestracja">O szczegóły prosimy pytać w rejestracji.</p>
                </section>
            </article>
        </div>
        
    )
}

export default PracowniaUSG;