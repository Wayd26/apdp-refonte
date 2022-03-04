import React from 'react';
import "./OutilsConformiteCard.css"

const OutilsConformiteCard = (props) => {

  const { label, fileUrl } = props;
  return <div className="outils-conformite-card">
    <div className="outils-conformite-card-label">{label}</div>
    <a href={fileUrl} download><button className="outils-conformite-card-button">Télécharger en PDF</button></a>
  </div>;
};

export default OutilsConformiteCard;
 