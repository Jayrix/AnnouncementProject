import React from 'react';

const PoradniaDietetyczna = (props) => {
    
    return(
        
        <div>
            <article className="poradniaDietetycznaContent">
                <section className="poradniaDietetycznaIntro">
                    <div className="imageContainer">
                        <img src="./dist/img/poradniaDietetyczna/dietuss-logo.jpg" alt="poradniaDietetyczna" title="poradniaDietetyczna"/>
                    </div>
                    <h3 id="title">Kompleksowa pomoc w zakresie <span>chorób dietozależnych i redukcji masy ciała:</span></h3>
                </section>
                <section className="poradniaDietetycznaData">
                    <div className="listsContainer">
                        <ul>
                            <li>Nietolerancje pokarmowe</li>
                            <li>Zaburzenia mikrobioty jelit</li>
                            <li>Problemy żołądkowo-jelitowe, refluks, nieżyty żołądka, Sibo</li>
                        </ul>
                        <ul>
                            <li>Choroby autoimmunologiczne</li>
                            <li>Alergie, choroby tarczycy, PCOS, Insulinooporność, Cukrzyca I i II</li>
                            <li>Choroby onkologiczne </li>
                        </ul>
                    </div>
                </section>
            </article>
        </div>
        
    )
}

export default PoradniaDietetyczna;