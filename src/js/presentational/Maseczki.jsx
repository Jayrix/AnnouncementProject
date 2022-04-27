import React from 'react';

const Maseczki = (props) => {
    
    return(
        
        <div>
            <article className="maseczkiContent">
                <div className="imageContainer">
                    <img src="./dist/img/maseczki/maska.jpg" alt="maska" title="maska"/>
                </div>
                <strong id="title">OBOWIĄZEK NOSZENIA MASECZEK</strong>
                <p className="maseczkiText">
                    Zawiadamiamy, że w związku z obowiązujacym prawem w obiektach medycznych (w tym w poradniach) <strong>nadal należy nosić maseczki zakrywające nos i usta.</strong>
                </p>
            </article>
        </div>
        
    )
}

export default Maseczki;