import React from 'react';
import "./Photothèque.css";
import PhotothequeCard from "../../components/PhotothèqueCard/PhotothèqueCard"

const Photothèque = () => {
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "50px", paddingBottom: "50px"}}>
    <div className="phototheque-title">Photothèque</div>
    <div className="phototheque-cards-container row">
      {
        [0,1,2,3,4,5,6,7,8].map((item, index) => (
          

          <div className="col-sm-4 col-xs-12">
            <PhotothequeCard />
          </div>

        ))
      }
    </div>
  </div>;
};

export default Photothèque;
