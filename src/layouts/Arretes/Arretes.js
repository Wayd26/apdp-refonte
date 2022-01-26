import React from 'react';
import ArreteRow from '../../components/ArreteRow/ArreteRow';
import "./Arretes.css"

const Arretes = () => {
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="arretes-container">
          <p className="arretes-title">ARRÈTÉS</p>
          <div className="arretes-rows-container">
              <ArreteRow />
              <ArreteRow />
              <ArreteRow />
         </div>
      </div>
  </div>;
};

export default Arretes;
