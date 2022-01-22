import React from 'react';
import "./LoiCard.css";
import img_opposition from "../../assets/icons/droit-opposition.jpg"

const LoiCard = () => {
    return (
        <div className="loi-card">
            <img  src={img_opposition} className="loi-card-image"/>
            <p className="loi-card-title">Loi n° 2017-20 portant code du numérique en République du Bénin</p>
            <p className="loi-card-description">Les dispositions du présent Code ont pour objectif de mettre en place un cadre légal de protection de la vie privée et professionnelle consécutif à la collecte, au traitement, à la transmission, au stockage et à l’usage des données à caractère personnel[…]</p>
            <button className="loi-card-button">EN SAVOIR PLUS</button>
        </div>
    )
}

export default LoiCard
