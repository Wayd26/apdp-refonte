import React from "react";
import FaireUneDemandeCard from "../../components/FaireUneDemandeCard/FaireUneDemandeCard";
import ActualiteCarousel from "../../components/ActualiteCarousel/ActualiteCarousel";
import "./FaireUneDemande.css";
import dots from "../../assets/icons/dots.svg";
import {useNavigate} from "react-router-dom";

const FaireUneDemande = () => {
  
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#E7E7E7",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      {/* <ActualiteCarousel /> */}

      <div id="faire-une-demande" className="faire-une-demande">
        <div className="faire-une-demande-container">
          <p className="vos-demarches-text">Vos Demarches</p>

          <div className="faire-une-demande-cards-container row">
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                title={"Demander une évaluation"}
                description={
                  "Lorem ipsum dolor sit amet, lorem ipsum consectuar  lorem sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
              handleCardClicked = {() => {
                navigate("/formulaire/1")
              }}
                title={"Faire une demande"}
                description={
                  "Loolor sit amet, lorem ipsum coay ipsum consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                title={"Commander un macaron"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                title={"Déposer une plainte"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaireUneDemande;
