import React from 'react';

const BozenaHandzlik = (props) =>  {

    return (
        <li class="announcementRoot">
            <h2 class="announcementTitle">Otwarcie gabinetu edokrynologicznego od grudnia 2018</h2>
            <article class="announcementContent">
                <section class="overviewSection">
                    <div class="textContainer">
                        <div class="personData">
                            <h3>dr Bożena Handzlik:</h3>
                            <ul class="specializationList">
                                <li>specjalista endokrynolog</li>
                                <li>specjalista chorób wewnętrznych</li>
                            </ul>
                        </div>
                        <div class="additionalInfo">
                            <p>
                                Absolwentka Śląskiej Akademii Medycznej w Katowicach w 1989. Asystent w Oddziale Chorób Wewnętrznych
                                w Suchej Beskidzkiej oraz w poradni endokrynologicznej tamtejszegoo szpitala.
                            </p>
                            <div class="appointementInfo">
                                <p>Przyjęcia odbywać się w poniedziałki, dwa razy w miesiącu.</p>
                                <p>Wizyty tylko prywatne.</p>
                                <p>Koszt: 110 zł, w tym USG tarczycy.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class='imageContainer'>
                        <img src="./dist/img/endokrynologia.jpg" alt="Obrazk przedstawiający logo endokrynologii" title="Gabinet Endokrynologiczny"/>
                    </div>
                </section>
                <section class="servicesSection">
                    <h3>Zakres działalności:</h3>
                    <ul>
                        <li>
                            leczenie chorób:
                            <ul>
                                <li>tarczycy</li>
                                <li>przysadki mózgowej</li>
                                <li>nadnerczy</li>
                                <li>jajników</li>
                                <li>jąder</li>
                            </ul>
                        </li>
                        <li>diagnostyka i leczenie otyłości</li>
                        <li>prowadzenie kobiet z chorobami endokrynologicznymi w ciąży i po porodzie</li>
                        <li>wstępna diagnostyka zaburzeń płodności i miesiączkowania</li>
                        <li>diagnostyka trądziku i hirsutyzmu</li>
                        <li>USG tarczycy</li>
                        <li>również diagnostyka zaburzeń endokrynologicznych u dzieci</li>
                    </ul>
                    <p>Chętnych zapraszamy do rejestracji na I-szym piętrze</p>
                </section>
            </article>
        </li>
    );
}

export default BozenaHandzlik;