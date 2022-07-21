import React, {useState, useEffect} from 'react';
import FaireUneDemandeCard from "../../components/FaireUneDemandeCard/FaireUneDemandeCard";
import "./FaireUneDemande.css";
import { useNavigate } from "react-router-dom";
import {getAllFormTypes} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const FaireUneDemande = () => {

  const navigate = useNavigate();
  const [demarches, setDemarches] = useState([]);

  const loadFormTypes = async () => {
    const resp = await getAllFormTypes();
    setDemarches(resp.data?.data);
  }

  useEffect(() => {
    loadFormTypes();
  }, [])

  return (
    <div
      style={{
        backgroundColor: "#E7E7E7",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Breadcrumb>
          <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Vos démarches</Breadcrumb.Item>
          <Breadcrumb.Item active>Faire ou modifier une demande</Breadcrumb.Item>
      </Breadcrumb>
      {/* <ActualiteCarousel /> */}

      <div id="faire-une-demande" className="faire-une-demande">
        <div className="faire-une-demande-container">
          <p className="vos-demarches-text">Vos Demarches</p>
          <div className="faire-une-demande-cards-container row">
          {demarches && demarches.map((demarche) =>
              <div className="col-sm-4 col-xs-12">
                  <FaireUneDemandeCard
                    handleCardClicked={() => {
                      navigate(`/formulaire/${demarche.slug}`)
                    }}
                    title={demarche.name}
                    description={
                      "Lorem ipsum dolor sit amet, lorem ipsum consectuar  lorem sadipscing elitr, sed diam nonumy eirmod tempor"
                    }
                  />
              </div>
            )}
            {/* <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                handleCardClicked={() => {
                  navigate("/formulaire/plainte")
                }}
                title={"Déposer une plainte"}
                description={
                  "Loolor sit amet, lorem ipsum coay ipsum consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                handleCardClicked={() => {
                  navigate("/formulaire/commande_pictogramme")
                }}
                title={"Commander pictogramme, étiquette et marquage d’affiche"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                handleCardClicked={() => {
                  navigate("/formulaire/demande_evaluation_conformite")
                }}
                title={"Demander une évaluation de conformité"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div>
            <div className="col-sm-4 col-xs-12">
              <FaireUneDemandeCard
                handleCardClicked={() => {
                  navigate("/formulaire/projet_code_de_conduite")
                }}
                title={"Soumettre un projet de code de conduite"}
                description={
                  "Loolor sit amet, lorem ipsum coay ipsum consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
                }
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaireUneDemande;
