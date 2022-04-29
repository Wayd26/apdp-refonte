import React, {useState, useEffect} from 'react';
import OutilsConformiteCard from '../../components/OutilsConformiteCard/OutilsConformiteCard';
import "./OutilsConformite.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";

const OutilsConformite = () => {
  const navigate = useNavigate();
  const [outilsConformite, setOutilsConformite] = useState([]);

  const loadOutilsConformiteData = async () => {
      const resp = await getATypeOfArticles("outils_de_conformite")
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          setOutilsConformite(resp.data.data)
      }
  }
  
  useEffect(() => {
      loadOutilsConformiteData() ;
      console.log("Outils de conformite data ", outilsConformite)       
  }, [])

  // const outilsConformiteData = [
  //   {id: 1,
  //   label:"MODÈLE DE REGISTRE DES ACTIVITÉS DE VIDÉOSURVEILLANCE"},
  //   {id: 2,
  //   label:"OUTIL DE VÉRIFICATION DU REMPLISSAGE DU FORMULAIRE"},
  //   {id: 3,
  //   label:"FICHE PRATIQUE POUR LA MISE EN CONFORMITÉ DES OBLIGATIONS RELATIVES A LA PROTECTION DES DONNÉES PERSONNELLES"},
  //   {id: 4,
  //   label:"GUIDE PRATIQUE POUR LA VIDEOSURVEILLANCE"},
  //   {id: 5,
  //   label:"MODÈLE D’ANALYSE D’IMPACT RELATIF A LA PROTECTION DES DONNÉES PERSONNELLES"},
  //   {id: 6,
  //   label:"RECEPISSE DE CONSENTEMENT POUR LE TRAITEMENT DE DONNEES PERSONNELLES"}
  // ]
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
    <p className="outils-conformite-title">LES OUTILS DE LA CONFORMITÉ</p>
    <div className="outils-conformite-cards-container row d-flex justify-content-around">
      {outilsConformite?.length !== 0 ? 
      outilsConformite?.map((item, index) => (
      <div className="col-sm-6 col-xs-12 col-md-6">
      <OutilsConformiteCard label={item.title} fileUrl={item.image_url}/>
      </div>
      )) 
      :
       <h1>AUCUN OUTIL DE LA CONFORMITÉ</h1>}
    </div>
  </div>;
};

export default OutilsConformite;
