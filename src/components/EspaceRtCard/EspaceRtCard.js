import React from 'react';
import "./EspaceRtCard.css";
import {HiArrowCircleRight} from "react-icons/hi"

const EspaceRtCard = (props) => {

    const {label} = props;
  return <div className="espace-rt-card">
            <p className="espace-rt-card-label">{label}</p>
            <button className="espace-rt-card-button">Accéder <HiArrowCircleRight className="espace-rt-card-button-icon" /></button>
        </div>;
};

export default EspaceRtCard;
