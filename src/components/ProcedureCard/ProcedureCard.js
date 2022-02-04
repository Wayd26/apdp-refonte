import React from 'react';
import "./ProcedureCard.css"

const ProcedureCard = (props) => {
    const { label } = props;
    return <div className="procedure-card">
      <div className="procedure-card-label">{label}</div>
      <div className="row d-flex justify-content-between">
      <button className="procedure-card-button-pdf">Télécharger en PDF</button>
      <button className="procedure-card-button-word">Télécharger en Word</button>
      </div>
    </div>;
  };
export default ProcedureCard;
