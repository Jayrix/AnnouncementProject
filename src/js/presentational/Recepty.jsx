import React from 'react';

const Recepty = (props) => {
    
    return(
        
        <div>
            <article className="ReceptyContent">
                <strong id="title">RECEPTY - informacja</strong>
                <div className="imageContainer">
                    <img src="./dist/img/recepty/recepta.jpg" alt="Obraz przedstawiający receptę" title="Recepta"/>
                </div>
                <p className="ReceptyText">
                    Szanowni Pacjenci,
                    <br/>
                    Informujemy, że recepty na STAŁE leki można zamawiać nie tylko przez telefon i osobiście, ale również przez e-mail:
                    <strong> rejestracja@ubezpieczalniacieszyn.com </strong>
                </p>
            </article>
        </div>
        
    )
}

export default Recepty;