import React from 'react';
import "./TexteCommunautaireCard.css";
import {MdDownloadForOffline} from "react-icons/md";
import {HiArrowCircleRight} from "react-icons/hi"


const TexteCommunautaireCard = (props) => {
  const {title, description} = props;
  return (
    <div className="texte-communautaire-card">
        <p className="texte-communiautaire-card-title">{title}</p>
        <p className="texte-communiautaire-card-description">{description}</p>
        <button className="texte-communiautaire-card-button"> En savoir plus
            <HiArrowCircleRight className="texte-communiautaire-card-button-icon"/>
        </button>
    </div>
  );
};

export default TexteCommunautaireCard;
