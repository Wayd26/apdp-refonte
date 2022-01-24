import React from 'react';
import RapportAnnuelRow from '../../components/RapportAnnuelRow/RapportAnnuelRow';
import DecretArreteRow from '../../components/DecretArreteRow/DecretArreteRow';
import "./DecretsArretes.css"

const DecretsArretes = () => {
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="decrets-arretes-container">
          <p className="decrets-arretes-title">DÉCRETS ET ARRÈTÉS</p>
          <div className="decrets-arretes-rows-container">
              <DecretArreteRow />
              <DecretArreteRow />
              <DecretArreteRow />
         </div>
      </div>
  </div>;
};

export default DecretsArretes;
