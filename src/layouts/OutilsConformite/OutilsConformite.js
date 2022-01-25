import React from 'react';
import OutilsConformiteCard from '../../components/OutilsConformiteCard/OutilsConformiteCard';
import "./OutilsConformite.css"

const OutilsConformite = () => {

  const outilsConformiteData = [
    {id: 1,
    label:"MODÈLE DE REGISTRE DES ACTIVITÉS DE VIDÉOSURVEILLANCE"},
    {id: 2,
    label:"OUTIL DE VÉRIFICATION DU REMPLISSAGE DU FORMULAIRE"},
    {id: 3,
    label:"FICHE PRATIQUE POUR LA MISE EN CONFORMITÉ DES OBLIGATIONS RELATIVES A LA PROTECTION DES DONNÉES PERSONNELLES"},
    {id: 4,
    label:"GUIDE PRATIQUE POUR LA VIDEOSURVEILLANCE"},
    {id: 5,
    label:"MODÈLE D’ANALYSE D’IMPACT RELATIF A LA PROTECTION DES DONNÉES PERSONNELLES"},
    {id: 6,
    label:"RECEPISSE DE CONSENTEMENT POUR LE TRAITEMENT DE DONNEES PERSONNELLES"}
  ]
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
    <p className="outils-conformite-title">LES OUTILS DE LA CONFORMITÉ</p>
    <div className="outils-conformite-cards-container row d-flex justify-content-around">
      {outilsConformiteData.map((item, index) => (
      <div className="col-sm-6 col-xs-12 col-md-6">
      <OutilsConformiteCard label={item.label}/>
      </div>
      ))}
    </div>
  </div>;
};

export default OutilsConformite;
