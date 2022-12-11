import React from 'react';

const GabinetChirurgiiDzieciecej = (props) => {

    return(
            
        <div>
            <article className="chirurgiaDzieciecaContent">
                <div className="imageContainer">
                    <img src="./dist/img/chirurgiaDziecieca/chirurgiaDziecieca.jpg" alt="chirurgia dziecieca" title="chirurgia dziecieca"/>
                </div>
                <h3 id="title">GABINET CHIRURGII DZIECIĘCEJ</h3>
                <p className="chirurgiaDzieciecaDane">
                    Dr Gabriela Gniadek
                </p>
                <p className="chirurgiaDzieciecaText">
                    Konsultacje i leczenie schorzeń chirurgicznych, wad wrodzonych, wad postawy oraz USG stawów biodrowych. <br/> 
                    Szczegóły w rejestracji.
                </p>    
            </article>
        </div>
        
    )


}

export default GabinetChirurgiiDzieciecej;