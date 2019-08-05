import React from 'react';

const CR = props => {

    return(
            <div className="CRContent">
                <section id="mainSection">

                    <div className="imageContainer">
                        <img className="human" src="./dist/img/cr/czlowiek_lewy.png" alt=""/>
                    </div>
                    
                    <div className="CRinformation">
                        <article>
                            <div className="logoContainer">
                                <img id="logo" src="./dist/img/cr/logo.png" alt="Logo" title="Logo"/>
                            </div>
                            <div className="CRtext">
                                <h1>CENTRUM REHABILITACJI</h1>
                                <div className="dots">.....</div>
                                <ul className="generalList">
                                    <li>KOMPLEKSOWA REHABILITACJA</li>
                                    <li>MASAŻ</li>
                                    <li>TERAPIA INDYWIDUALNA</li>
                                </ul>
                                <div className="dots">.....</div>
                                <p className="individual">ZABIEGI DOBIERAMY INDYWIDUALNIE DO PACJENTA</p>
                                <div className="listContainer">
                                    <p>Co leczymy?</p>
                                    <ul className="list1">
                                        <li>bóle mięśni oraz stany przeciążeniowe</li>
                                        <li>bóle kręgosłupa i stawów</li>
                                        <li>stany pooperacyjne i powypadkowe</li>
                                        
                                    </ul>
                                    <ul className="list2">
                                        <li>choroby zwyrodnieniowe</li>
                                        <li>wady postawy</li>
                                        <li>urazy sportowe</li>
                                        <li>zaburzenia neurologiczne</li>    
                                    </ul>
                                </div>
                            </div>
                            
                        </article>
                    </div>
                    
                    <div className="imageContainer">
                        <img className="human" src="./dist/img/cr/czlowiek_prawy.png" alt=""/>
                    </div>
                    
                </section>
                <section id="footerSection">
                    <p> <strong>tel. 793 579 532</strong>, Cieszyn ul. Bielska 37 - II Piętro</p>
                    <div className="dots">.....</div>
                    <p>centrumrehabilitacjicieszyn@gmail.com</p>
                </section>
            </div>
    )
}

export default CR;