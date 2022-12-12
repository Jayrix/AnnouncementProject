import React from 'react';

const PoradniaKardiologiczna = (props) => {
    
    return(
        
        <div>
            <article className="poradniaKardiologicznaContent">
                <section className="poradniaKardiologicznaIntro">
                    <div className="imageContainer">
                        <img src="./dist/img/poradniaKardiologiczna/poradniaKardiologiczna.jpg" alt="poradniaKardiologiczna" title="poradniaKardiologiczna"/>
                    </div>
                    <h3 id="title">PORADNIA KARDIOLOGICZNA</h3>
                </section>
                <section className="poradniaKardiologicznaData">
                    <p className="poradniaKardiologicznaListName">Zakres badań:</p>
                    <div className="listsContainer">
                        <ul>
                            <li>Konsultacje i leczenie</li>
                            <li>Echokardiografia</li>
                            <li>Holter EKG</li>
                        </ul>
                        <ul>
                            <li>Holter ciśnieniowy</li>
                            <li>Test wysiłkowy na bieżni</li>
                        </ul>
                    </div>
                    <p className="rejestracja">O szczegóły prosimy pytać w rejestracji.</p>
                </section>
            </article>
        </div>
        
    )
}

export default PoradniaKardiologiczna;