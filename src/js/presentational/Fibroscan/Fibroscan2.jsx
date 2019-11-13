import React from 'react';

const Fibroscan2 = props => {

    return(
        <article className="fibroscanContent">
            <header>
                <h2>UWAGA! UWAGA!</h2>
                <p>Dnia 10.12.2019 od godz. 12.<sup>00</sup> można będzie wykonać u nas szczegółowe, nieinwazyjne badanie wątroby metodą <strong>FIBROSCAN®</strong>.
                 Urządzenie będzie u nas dostępne tylko tego dnia. Cena: 270 zł.</p>
            </header>
            <section>
                <div className="textContainer">
                    <p className="fibroscanIlness">FibroScan® może służyć do oceny stopnia zaawansowania włóknienia w następujących chorobach wątroby i sytuacjach klinicznych:</p>
                    <ul className="ilnessList">
                        <li>Przewlekłe wirusowe zapalenie wątroby typu B</li>
                        <li>Przewlekłe wirusowe zapalenie wątroby typu C</li>
                        <li>Stłuszczeniowe zapalenie wątroby (NASH)</li>
                        <li>Alkoholowe zapalenie wątroby (ASH)</li>
                        <li>Pierwotna marskość żółciowa</li>
                        <li>Pierwotne stwardniające zapalenie dróg żółciowych</li>
                        <li>Autoimmunologiczne zapalenie wątroby (metoda pomocnicza)</li>
                        <li>Spichrzeniowe choroby wątroby</li>
                        <li>Toksyczne zapalenia wątroby</li>
                        <li>Kryptogenne zapalenia wątroby</li>
                        <li>Monitorowanie pacjentów po przeszczepach wątroby</li>
                        <li>Niewyjaśnione podwyższenie aktywności AlAT i AspAT</li>
                    </ul>
                </div>
                <div className="imageContainer">
                    <img src="./dist/img/fibroscan/fibro.png" alt=""/>
                </div>
            </section>
        </article>


    )
}

export default Fibroscan2;