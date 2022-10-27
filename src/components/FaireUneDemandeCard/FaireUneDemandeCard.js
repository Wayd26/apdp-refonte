import React from 'react';
import "./FaireUneDemandeCard.css"
import { HiLink } from 'react-icons/hi'

const FaireUneDemandeCard = (props) => {
    const {title, description, handleCardClicked} = props;
    return (
        <div id="faire-une-demande-card" className="faire-une-demande-card d-flex" onClick={handleCardClicked}>
            <div className="icon-container d-flex justify-content-space-evenly">
                <HiLink className="icon" />
            </div>
            <div class="text-container">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            </div>

        </div>
    )
}

export default FaireUneDemandeCard
