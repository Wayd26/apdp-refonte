import React from 'react';
import "./OutilsConformiteCard.css"

const OutilsConformiteCard = (props) => {

  const { label } = props;
  return <div className="outils-conformite-card">
    <div className="outils-conformite-card-label">{label}</div>
    <button className="outils-conformite-card-button">Télécharger en PDF</button>
  </div>;
};

export default OutilsConformiteCard;
 