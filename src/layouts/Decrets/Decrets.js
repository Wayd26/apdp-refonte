import React from 'react';
import DecretRow from '../../components/DecretRow/DecretRow';
import "./Decrets.css"

const Decrets = () => {
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="decrets-container">
          <p className="decrets-title">DÉCRETS</p>
          <div className="decrets-rows-container">
              <DecretRow />
              <DecretRow />
              <DecretRow />
         </div>
      </div>
  </div>;
};

export default Decrets;
