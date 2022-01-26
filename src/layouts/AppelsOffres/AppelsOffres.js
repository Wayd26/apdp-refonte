import React from "react";
import ActualiteCarousel from "../../components/ActualiteCarousel/ActualiteCarousel";
import AvisImportant from "../../components/AvisImportant/AvisImportant";
import FaqSection from "../../components/FaqSection/FaqSection";
import MarketCard from "../../components/MarketCard/MarketCard";
import "./AppelsOffres.css";

const AppelsOffres = () => {
  var actualYear = new Date();
  return (
    <div style={{ background: "#F7F7F7 0% 0% no-repeat padding-box;" }}>
      {/* <ActualiteCarousel /> */}
      <div id="appels-offres" className="appels-offres">
        <div className="appels-offres-header">
          <p className="appels-offres-header-text">Publications</p>
        </div>
        <p className="appels-offres-publications">Appels d'offres</p>
        <div className="w90">
          <p className="appels-offres-avis-importants">Avis Importants !</p>
          <AvisImportant />
          <AvisImportant />
          <AvisImportant />
          <AvisImportant />
        </div>

        <div className="appels-offres-blue-band">
          <p className="appels-offres-blue-band-text">
            Marchés de {actualYear.getFullYear()}{" "}
          </p>
        </div>
        <div className="w90 row d-flex justify-content-between">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
        </div>

        <div className="appels-offres-blue-band">
          <p className="appels-offres-blue-band-text">
            Marchés de {actualYear.getFullYear() - 1}{" "}
          </p>

        </div>
        <div className="w90 row d-flex justify-content-between">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <MarketCard />
          </div>
         
        </div>
      </div>
      {/* <FaqSection /> */}
    </div>
  );
};

export default AppelsOffres;
