import React from 'react';
import "./Vidéothèque.css";
import VideothequeCard from "../../components/VidéothèqueCard/VidéothèqueCard";

const Vidéothèque = () => {
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "50px", paddingBottom: "50px"}}>
  <div className="videotheque-title">videothèque</div>
  <div className="videotheque-cards-container row">
    {
      [0,1,2,3,4,5,6,7,8].map((item, index) => (
        

        <div className="col-sm-4 col-xs-12">
          <VideothequeCard />
        </div>

      ))
    }
  </div>
</div>;
};

export default Vidéothèque;
