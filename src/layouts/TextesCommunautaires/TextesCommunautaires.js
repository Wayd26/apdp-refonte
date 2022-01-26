import React from 'react';
import TexteCommunautaireCard from '../../components/TexteCommunautaireCard/TexteCommunautaireCard';
import "./TextesCommunautaires.css"

const TextesCommunautaires = () => {
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="textes-communautaires-container">
        <p className="textes-communautaires-title">TEXTES COMMUNAUTAIRES</p>
        <div className="textes-communautaires-cards-container row">
           { [0, 1, 2, 3, 4, 5, 6].map(index => (
               <div className="col-sm-4 col-xs-12">
                   <TexteCommunautaireCard />
               </div>
           )) }
        </div>
      </div>
  </div>;
};

export default TextesCommunautaires;
