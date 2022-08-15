import React from 'react';
import "./OutilsConformiteCard.css"
import pdfFile from "../../assets/images/pdf_file.jpeg"


const OutilsConformiteCard = (props) => {

  const { label, fileUrl } = props;
  return <div className="outils-conformite-card">
            <img src={pdfFile} className="conformite-card-image"/>
    <div className="outils-conformite-card-label">{label}</div>
    <a href={fileUrl} download><button className="outils-conformite-card-button">Télécharger en PDF</button></a>
  </div>;
};

export default OutilsConformiteCard;
 