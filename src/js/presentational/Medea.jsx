import React from 'react';

const Medea = props => {

    return(
        <article className="medeaContent">
            <header>
                <p>APTEKA</p>
                <div className="medeaLogo">
                    <div className="medeaLogoVr"></div>
                    <div className="borderHider"></div>
                    <strong>Medea</strong>
                </div>
            </header>
            <section>
            <div className="medeaLogo">
                    <div className="medeaLogoVr"></div>
                    <div className="borderHider"></div>
                    <div className="workingHours">
                        <h3>Godziny otwarcia</h3>
                        <p>Pon.-Pt. 7.<sup>30</sup>-18.<sup>00</sup></p>
                        <p>Sob. nieczynne</p>
                    </div>
                </div>
            </section>
            <footer>
                <h2>ZAPRASZAMY</h2>
                <p>Wejście z przedsionka</p>
            </footer>
        </article>


    )
}

export default Medea;