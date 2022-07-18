import React from 'react'
import "./MarketCard.css"
import {MdFileDownload} from "react-icons/md"

const MarketCard = () => {
    return (
        <div className="market-card">

            <p className="market-card-title">
            Fourniture et Service
            </p>

            <p className="market-card-date">
            Publié le: 11/01/2022
            </p>
            <p className="market-card-description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea tasit amet, conse
            </p>

            <button className="market-card-button">Télécharger <MdFileDownload className="market-card-button-icon"/> </button>
            
        </div>
    )
}

export default MarketCard
