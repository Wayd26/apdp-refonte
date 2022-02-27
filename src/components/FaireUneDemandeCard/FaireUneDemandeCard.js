import React from 'react';
import "./FaireUneDemandeCard.css"
import { HiLink } from 'react-icons/hi'

const FaireUneDemandeCard = (props) => {
    const {title, description, handleCardClicked} = props;
    return (
        <div id="faire-une-demande-card" className="faire-une-demande-card" onClick={handleCardClicked}>
            <div className="icon-container d-flex justify-content-center">
                <HiLink className="icon" />
            </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>

        </div>
    )
}

export default FaireUneDemandeCard
