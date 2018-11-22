import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// class BozenaHandzlik extends Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return (
//             <li className="announcementRoot">
//                 <h2 className="announcementTitle">Otwarcie gabinetu endokrynologicznego od grudnia 2018</h2>
//                 <article className="announcementContent">
//                     <section className="overviewSection">
//                         <div className="textContainer">
//                             <div className="personData">
//                                 <h3>dr Bożena Handzlik:</h3>
//                                 <ul className="specializationList">
//                                     <li>specjalista endokrynolog</li>
//                                     <li>specjalista chorób wewnętrznych</li>
//                                 </ul>
//                             </div>
//                             <div className="additionalInfo">
//                                 <p>
//                                     Absolwentka Śląskiej Akademii Medycznej w Katowicach w 1989. Asystent w Oddziale Chorób Wewnętrznych
//                                     w Suchej Beskidzkiej oraz w Poradni Endokrynologicznej tamtejszegoo szpitala.
//                                 </p>
//                                 <div className="appointementInfo">
//                                     <p>Przyjęcia odbywać się w poniedziałki, dwa razy w miesiącu.</p>
//                                     <p>Wizyty tylko prywatne.</p>
//                                     <p>Koszt: 110 zł, w tym USG tarczycy.</p>
//                                 </div>
//                             </div>
                            
//                         </div>
//                         <div className='imageContainer'>
//                             {/* <img alt="Endokrynologia" title="Gabinet Endokrynologiczny"/> */}
//                             <img src="./dist/img/endokrynologia.jpg" alt="Endokrynologia" title="Gabinet Endokrynologiczny"/>
//                         </div>
//                     </section>
//                     <section className="servicesSection">
//                         <h3>Zakres działalności:</h3>
//                         <ul>
//                             <li>
//                                 leczenie chorób:
//                                 <ul>
//                                     <li>tarczycy</li>
//                                     <li>przysadki mózgowej</li>
//                                     <li>nadnerczy</li>
//                                     <li>jajników</li>
//                                     <li>jąder</li>
//                                 </ul>
//                             </li>
//                             <li>diagnostyka i leczenie otyłości</li>
//                             <li>prowadzenie kobiet z chorobami endokrynologicznymi w ciąży i po porodzie</li>
//                             <li>wstępna diagnostyka zaburzeń płodności i miesiączkowania</li>
//                             <li>diagnostyka trądziku i hirsutyzmu</li>
//                             <li>USG tarczycy</li>
//                             <li>również diagnostyka zaburzeń endokrynologicznych u dzieci</li>
//                         </ul>
//                         <p>Chętnych zapraszamy do rejestracji na I-szym piętrze</p>
//                     </section>
//                 </article>
//                 {/* <iframe src="http://www.srw-baratin.eu/ekran/all" allow="fullscreen"></iframe>  */}
//             </li>
//         )
//     }

// }

const BozenaHandzlik = (props) =>  {

    return (
        
        <div>
            <h2 className="announcementTitle">Otwarcie gabinetu endokrynologicznego od grudnia 2018</h2>
            <article className="announcementContent">
                <section className="overviewSection">
                    <div className="textContainer">
                        <div className="personData">
                            <h3>dr Bożena Handzlik:</h3>
                            <ul className="specializationList">
                                <li>specjalista endokrynolog</li>
                                <li>specjalista chorób wewnętrznych</li>
                            </ul>
                        </div>
                        <div className="additionalInfo">
                            <p>
                                Absolwentka Śląskiej Akademii Medycznej w Katowicach w 1989. Asystent w Oddziale Chorób Wewnętrznych
                                w Suchej Beskidzkiej oraz w Poradni Endokrynologicznej tamtejszegoo szpitala.
                            </p>
                            <div className="appointementInfo">
                                <p>Przyjęcia odbywać się w poniedziałki, dwa razy w miesiącu.</p>
                                <p>Wizyty tylko prywatne.</p>
                                <p>Koszt: 110 zł, w tym USG tarczycy.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='imageContainer'>
                        {/* <img alt="Endokrynologia" title="Gabinet Endokrynologiczny"/> */}
                        <img src="./dist/img/endokrynologia.jpg" alt="Endokrynologia" title="Gabinet Endokrynologiczny"/>
                    </div>
                </section>
                <section className="servicesSection">
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
            {/* <iframe src="http://www.srw-baratin.eu/ekran/all" allow="fullscreen"></iframe>  */}
            </div>
        
    );
}

export default BozenaHandzlik;