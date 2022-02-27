import React from 'react';
import "./TexteCommunautaireCard.css";
import {MdDownloadForOffline} from "react-icons/md";
import {HiArrowCircleRight} from "react-icons/hi"


const TexteCommunautaireCard = () => {
  return <div className="texte-communautaire-card">
        <p className="texte-communiautaire-card-title">Déclaration universelle des droits de l’homme</p>
        <p className="texte-communiautaire-card-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        <button className="texte-communiautaire-card-button"> En savoir plus
            <HiArrowCircleRight className="texte-communiautaire-card-button-icon"/>
        </button>
  </div>;
};

export default TexteCommunautaireCard;
