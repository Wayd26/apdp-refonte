import React, {useState, useEffect} from 'react';
import ProcedureCard from '../../components/ProcedureCard/ProcedureCard';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import "./Procedures.css"

const Procedures = () => {
  const navigate = useNavigate();
    const [procedures, setProcedures] = useState([]);
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

    const handleMoreClicked = (id) =>{
      navigate(`/activite/${id}`)
    }

    const loadProceduresData = async () => {
      const resp = await getATypeOfArticles("procedures")
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          setProcedures(resp.data.data)
      }
    }

    const dispatch = useDispatch();
    const appState = useSelector(state=>state, shallowEqual);
  
    
    useEffect(() => {
      loadProceduresData() ;
      console.log("Procedures data ", procedures)       
    }, [])


      return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        <p className="procedures-title">Les Procédures</p>
        <p className="procedures-desc">Tout responsable de traitement de données a le devoir de faire une déclaration si les données manipulées sont à caractère personnel, soit d’avoir une autorisation si les données sont sensibles. Les demandes d’avis concernent les activités régaliennes de l’Etat (défense, sureté, sécurité publique, RENA/LEPI)</p>
        <div className="procedures-cards-container row d-flex justify-content-around">
          {procedures.map((item, index) => (
          <div className="col-sm-6 col-xs-12 col-md-6">
          <ProcedureCard label={item.title}/>
          </div>
          ))}
        </div>
      </div>;
    };

export default Procedures;
