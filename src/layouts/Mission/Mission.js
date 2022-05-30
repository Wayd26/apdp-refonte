import React, {useState, useEffect} from 'react';
import "./Mission.css";
import apdp_siege from "../../assets/images/img8.png"
import MissionCard from "../../components/MissionCard/MissionCard";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";

const Mission = () => {
  const navigate = useNavigate();
  const [missions, setMissions] = useState([]);

  const handleMoreClicked = (link) =>{
      navigate(link);
  }

  const loadMissionsData = async () => {
      const resp = await getATypeOfArticles("missions")
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          setMissions(resp.data.data)
      }
  }

  const dispatch = useDispatch();
  const appState = useSelector(state=>state, shallowEqual);

  
  useEffect(() => {
      loadMissionsData() ;
      console.log("Missions data ", missions)       
  }, [])
  return (
    <div style={{ backgroundColor: "#E2E2E2",paddingTop: "40px", paddingBottom: "40px" }}>
      <div className="mission-presentation-box row">
        <div className="mission-presentation-image-container">
            <img src={apdp_siege} className="mission-presentation-image"/>
        </div>
        <div className="mission-presentation-text-container">
            <p className="mission-presentation-text-container-title">PRÉSENTATION</p>
            <div className="mission-presentation-text-container-text">
            <p>  L’Autorité de Protection des Données à caractère Personnel (APDP) est chargée de veiller à ce que l’informatique soit au service du citoyen et qu’elle ne porte atteinte à l’identité humaine, aux droits de l’Homme, à la vie privée, aux libertés individuelles ou publiques.

Autorité administrative indépendante, elle exerce ses missions conformément aux dispositions de la loi n° 2017-20  portant code du numérique en République du Bénin.
</p> 
<h4 className='py-1'>Statut </h4> 

<ul>
<li> - L’ APDP est une Autorité administrative indépendante;</li>
<li> - Elle exerce une Mission de service public;</li>
<li> - Elle est dotée de la personnalité juridique, de l’autonomie administrative et de gestion;</li>
<li> - Elle ne reçoit d’instruction d’aucune autorité administrative et politique ;</li>
<li> - Le Président, le Vice-Président et le Secrétaire du bureau sont élus par les membres de l’Autorité;</li>
<li> - Les décisions de l’ APDP peuvent faire l’objet de recours devant la juridiction administrative compétente;</li>
<li> - La plupart des Commissaires sont élus ou désignés par les assemblées ou les juridictions auxquelles ils appartiennent.</li>
</ul>
{/* <p>L’ APDP se compose d’un collège pluraliste de 11 personnalités </p>
<li> * 3 parlementaires ;</li>
<li> * 3 représentants de la Cour Suprême élus par leurs pairs (2 magistrats et 1 membre de la Chambre des comptes) ;</li>
<li> * 2 personnalités qualifiées pour leur connaissance des Applications informatiques désignées par l’Assemblée Nationale en tenant compte de sa configuration politique ;</li>
<li> * 1 membre du Conseil Economique et Social élu par ses pairs ;</li>
<li> * 1 Avocat ayant au moins 15 ans d’expérience, élus par ses pairs;</li>
<li> * 1 personnalité désignée en Conseil des Ministres par le Président de la République</li>
<li> </li>
<li> </li>
<li> </li>







Fonctionnement

Le fonctionnement de l’APDP s’articule autour deux types d’activités:

Travaux en sessions plénières

L’ APDP délibère en formation plénière composée de tous ses membres. Elle se réunie au moins deux (02) fois par mois en session ordinaire sur un ordre du jour précis. Elle peut également se réunir en session extraordinaire. L’ APDP autorise la mise en œuvre de fichiers les plus sensibles parmi lesquels, ceux faisant appel à la biométrie Une partie de ces séances est consacrée à l’examen de projets de loi et de décrets soumis à l’ APDP pour avis par le Gouvernement.

Activités hors séances plénières : les services de l’ APDP
Le fonctionnement de l’APDP s’articule autour deux types d’activités:

Travaux en sessions plénières

L’ APDP délibère en formation plénière composée de tous ses membres. Elle se réunie au moins deux (02) fois par mois en session ordinaire sur un ordre du jour précis. Elle peut également se réunir en session extraordinaire. L’ APDP autorise la mise en œuvre de fichiers les plus sensibles parmi lesquels, ceux faisant appel à la biométrie Une partie de ces séances est consacrée à l’examen de projets de loi et de décrets soumis à l’ APDP pour avis par le Gouvernement.

Activités hors séances plénières : les services de l’ APDP

Pour mener à bien leurs missions, les membres de l’ APDP s’appuient sur différents services organisés au sein de cinq directions :

une Direction des affaires juridiques et du contentieux;
une Direction de l’expertise et du contrôle;
une Direction des relations internationales, du protocole et de la communication;
une Direction des affaires administratives et des ressources humaines;
une Direction des affaires financières et de la logistique.
Dans l’exercice de ses missions, l’ APDP:

répond aux demandes de conseils qui lui sont adressées par des responsables de fichiers, instruit les plaintes dont elle est saisie par les citoyens,
organise des contrôles sur place;
procède aux vérifications nécessaires dans le cadre du droit d’accès indirect aux fichiers intéressant la sécurité publique et la sûreté de l’État;
délivre à toute personne qui en fait la demande un extrait de la liste des traitements qui lui sont déclarés (“fichier des fichiers”).
Protéger la vie privée et les libertés individuelles ou publiques

L’ APDP est l’autorité en charge de veiller à la protection des données à caractère personnel. A ce titre, elle dispose notamment d’un pouvoir de contrôle et de sanction. Jouant aussi un rôle d’alerte et de conseil, elle a pour mission de veiller à ce que le développement des nouvelles technologies ne porte atteinte ni à l’identité humaine, ni aux droits de l’homme, ni à la vie privée, ni aux libertés individuelles ou publiques.
Pour mener à bien leurs missions, les membres de l’ APDP s’appuient sur différents services organisés au sein de cinq directions :

une Direction des affaires juridiques et du contentieux;
une Direction de l’expertise et du contrôle;
une Direction des relations internationales, du protocole et de la communication;
une Direction des affaires administratives et des ressources humaines;
une Direction des affaires financières et de la logistique.
Dans l’exercice de ses missions, l’ APDP:

répond aux demandes de conseils qui lui sont adressées par des responsables de fichiers, instruit les plaintes dont elle est saisie par les citoyens,
organise des contrôles sur place;
procède aux vérifications nécessaires dans le cadre du droit d’accès indirect aux fichiers intéressant la sécurité publique et la sûreté de l’État;
délivre à toute personne qui en fait la demande un extrait de la liste des traitements qui lui sont déclarés (“fichier des fichiers”).
Protéger la vie privée et les libertés individuelles ou publiques

L’ APDP est l’autorité en charge de veiller à la protection des données à caractère personnel. A ce titre, elle dispose notamment d’un pouvoir de contrôle et de sanction. Jouant aussi un rôle d’alerte et de conseil, elle a pour mission de veiller à ce que le développement des nouvelles technologies ne porte atteinte ni à l’identité humaine, ni aux droits de l’homme, ni à la vie privée, ni aux libertés individuelles ou publiques. */}
    
            </div>
        </div>
        <div className="mission-missions-title">
          {/* <hr className="mission-missions-hr"></hr> */}
          Missions
          </div>
        <div className="mission-missions-box row d-flex justify-content-between">
          {missions.map((item, index) => (
            <div className="col-sm-4 col-xs-12"><MissionCard link={item?.id} title={item.title} description={item.sub_title}/></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
