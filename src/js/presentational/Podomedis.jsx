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
                    </ul>
                    <ul>
                        <li>terapia pękających pięt, rozpadliny</li>
                        <li>terapia nadpotliwości skóry stóp</li>
                        <li>rekonstrukcja paznokci</li>
                        <li>paznokcie wrastające</li>
                        <li>brodawki wirusowe</li>
                        <li>usuwanie hiperkeratoz (odciski, modzele)</li>
                    </ul>
                </div>
                <div id="podologyContainer"><img src="./dist/img/podomedis/podologia.jpg" alt=""/></div>
            </section>
            <footer>
                <div className="imageContainer">
                    <img src="./dist/img/podomedis/podomedis_logo2.png" alt=""/>
                </div>
                <div className="footerText">
                    <p><strong>tel. 735 049 669</strong>, Cieszyn ul. Bielska 37 / II piętro</p>
                    <span>. . . . . . .</span>
                    <p>www.podolog.cieszyn.pl</p>
                    <span>. . . . . . .</span>
                    <p>gabinet@podolog.cieszyn.pl</p>
                </div>
            
            </footer>
        </article>


    )
}

export default Podomedis;