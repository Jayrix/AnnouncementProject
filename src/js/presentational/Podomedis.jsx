import React from 'react';

const Podomedis = props => {

    return(
        <article className="podomedisContent">
            <section className="main">
                <div className="imageContainer">
                    <img id="logoImg" src="./dist/img/podomedis/podomedis_logo.png" alt=""/>
                </div>
                <h2>Gabinet podologiczny</h2>
                <p className="dots">.....</p>
                <h3>Zakres usług:</h3>
                <div className="listsContainer">
                    <ul>
                        <li>pedicure pielęgnacyjny</li>
                        <li>pedicure podologiczny</li>
                        <li>pielęgnacja zdrowej płytki paznokcia oraz zmienionej chorobowo (skracanie, opracowywanie, szlifowanie)</li>
                        <li>usuwanie hiperkeratoz (odciski, modzele)</li>
                    </ul>
                    <ul>
                        <li>terapia pękających pięt, rozpadliny</li>
                        <li>terapia nadpotliwości skóry stóp</li>
                        <li>rekonstrukcja paznokci</li>
                        <li>paznokcie wrastające</li>
                        <li>brodawki wirusowe</li>
                    </ul>
                </div>
                <div className="corner"></div>
                <div className="corner"></div>
                <div className="corner"></div>
                <div className="corner"></div>
            </section>
            <footer>
                <div className="imageContainer">
                    <img src="" alt=""/>
                </div>
                <p></p>
            </footer>
        </article>


    )
}

export default Podomedis;