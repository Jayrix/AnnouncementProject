import React from 'react';

const Fibroscan1 = props => {

    return(
        <article className="fibroscanContent">
            <header>
                <h2>UWAGA! UWAGA!</h2>
                <p>Dnia 10.12.2019 od godz. 12.<sup>00</sup> można będzie wykonać u nas szczegółowe, nieinwazyjne badanie wątroby metodą <strong>FIBROSCAN®</strong>.
                 Urządzenie będzie u nas dostępne tylko tego dnia. Cena: 270 zł.</p>
            </header>
            <section>
                <div className="textContainer">
                <p className="fibroscanAdvert">Dlaczego warto wybrać badanie FibroScan®?</p>
                    <ul className="advertList">
                        <li>jest bezbolesne i nieinwazyjne</li>
                        <li>trwa 5-10 minut</li>
                        <li>mogą z niego skorzystać Pacjenci o różnej budowie ciała (głowice o rozmiarach M i XL)</li>
                        <li>wynik otrzymujemy od razu po jego zakończeniu</li>
                        <li>wynik jest średnią z 10 pomiarów – wysoka wartość diagnostyczna</li>
                        <li>można je powtarzać wielokrotnie i w dowolnych odstępach czasu</li>
                    </ul>
                <p className="preparationInfo">
                Aby wyeliminować wpływ spożytego posiłku na wynik badania, zaleca się wykonywanie go na czczo lub
                po upływie czterech (optymalnie sześciu) godzin po posiłku. Do badania należy zgłosić się z dokumentacją medyczną dotyczącą choroby wątroby oraz chorób towarzyszących.
                </p>
                </div>
                <div className="imageContainer">
                    <img src="./dist/img/fibroscan/fibro.png" alt=""/>
                </div>
            </section>
        </article>


    )
}

export default Fibroscan1;