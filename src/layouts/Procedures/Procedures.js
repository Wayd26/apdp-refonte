import React from 'react';
import ProcedureCard from '../../components/ProcedureCard/ProcedureCard';
import "./Procedures.css"

const Procedures = () => {
    const proceduresData = [
        {id: 1,
        label:"Déclaration des Données à Caractère Personnel sur un site web"},
        {id: 2,
        label:"Demande de Déclaration"},
        {id: 3,
        label:"Demande d’Autorisation"},
        {id: 4,
        label:"Déclaration de Système de Vidéo-Surveillance"},
        {id: 5,
        label:"Renseignement des Entreprises"},
        {id: 6,
        label:"Modèle de lettre de dépôt de plainte"}
      ]
      return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        <p className="procedures-title">Les Procédures</p>
        <p className="procedures-desc">Tout responsable de traitement de données a le devoir de faire une déclaration si les données manipulées sont à caractère personnel, soit d’avoir une autorisation si les données sont sensibles. Les demandes d’avis concernent les activités régaliennes de l’Etat (défense, sureté, sécurité publique, RENA/LEPI)</p>
        <div className="procedures-cards-container row d-flex justify-content-around">
          {proceduresData.map((item, index) => (
          <div className="col-sm-6 col-xs-12 col-md-6">
          <ProcedureCard label={item.label}/>
          </div>
          ))}
        </div>
      </div>;
    };

export default Procedures;
