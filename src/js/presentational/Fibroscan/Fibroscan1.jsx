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
                    <p className="fibroscanOverview">
                        <span>Czym jest FibroScan®?</span>
                        <br/>
                        Jest to pierwsze, innowacyjne urządzenie do bezinwazyjnej i tym samym zupełnie bezpiecznej oceny stopnia włóknienia wątroby,
                        w przebiegu przewlekłych zapalnych chorób wątroby o zróżnicowanej etiologii. Jest tym samym alternatywą dla wykonania wyjściowej i/lub
                        kontrolnej biopsji wątroby.
                    </p>
                    <p className="fibroscanMethod">
                        <span>Jak działa FibroScan®?</span>
                        <br/>
                        Głowica urządzenia, w kontakcie ze skórą pacjenta, generuje impuls mechaniczny. Fala przechodzi przez tkanki podskórne i dochodzi do wątroby. W tym czasie głowica wysyła ultradźwięki, które służą pomiarowi prędkości rozchodzenia się fali. Szybkość jej przemieszczania jest zależna od stopnia twardości wątroby.
                        Prędkość jest tym większa im większe jest zwłóknienie i sztywność wątroby.
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