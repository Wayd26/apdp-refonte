import React from 'react';
import "./EspaceDpoCard.css"
import {HiArrowCircleRight} from "react-icons/hi"

const EspaceDpoCard = (props) => {
    const {label} = props;
    return <div className="espace-dpo-card">
              <p className="espace-dpo-card-label">{label}</p>
              <button className="espace-dpo-card-button">Accéder <HiArrowCircleRight className="espace-dpo-card-button-icon" /></button>
          </div>;
};

export default EspaceDpoCard;
