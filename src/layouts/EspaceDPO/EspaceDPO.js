import React from 'react';
import EspaceDpoCard from '../../components/EspaceDpoCard/EspaceDpoCard';
import "./EspaceDPO.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const EspaceDPO = () => {
    const espaceRtData = [
        {id: 0,
        label: "VIDEOS"},
        {id: 1,
        label: "IMAGES"},
        {id: 2,
        label: "DOCUMENTS"},
        {id: 3,
        label: "ARCHIVES"},
        {id: 4,
        label: "PHOTOS"}
    ]

  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        
      <div className="espace-dpo-container">
          <p className="espace-dpo-title">ESPACE DPO</p>
          <div className="espace-dpo-cards-container row d-flex ">
          {espaceRtData.map((item, index) => (

              <div key={index} className="col-sm-4 col-xs-12">
              <EspaceDpoCard label={item.label} />
              </div>
          ))}
          </div>
      </div>
  </div>;
};

export default EspaceDPO;
