import React, {useEffect} from 'react'
import Home from '../Home/Home'
// import { Route, Router, Switch, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth"
import VosDroits from '../VosDroits/VosDroits';
import DetailsDroit from '../DetailsDroit/DetailsDroit';
import DetailsCommunique from '../DetailsCommuniqué/DetailsCommunique';
import DetailsActivite from '../DetailsActivité/DetailsActivite';
import VosDevoirs from '../VosDevoirs/VosDevoirs';
import DetailsDevoir from '../DetailsDevoir/DetailsDevoir';
import FaireUneDemande from '../FaireUneDemande/FaireUneDemande';
import Communiques from '../Communiqués/Communiques';
import rester_informe from "../../assets/icons/rester_informe.png"
import vous_opposer from "../../assets/icons/vous_opposer.jpg"
import verifier_vos_donnees from "../../assets/icons/verifier_vos_donnees.jpg"
import rectifier_vos_donnees from "../../assets/icons/rectifier_vos_donnees.jpg"
import deferencer_contenu from "../../assets/icons/deferencer_un_contenu.jpg"
import effacer_vos_donnees from "../../assets/icons/effacer_vos_donnees.jpg"
import emporter_vos_donnees from "../../assets/icons/emporter_vos_donnees.jpg"
import demander_intervention_humaine from "../../assets/icons/demander_une_intervention_humaine.jpg"
import geler_vos_donnees from "../../assets/icons/geler_utilisation_de_vos_donnees.jpg"
import fichiers_police from "../../assets/icons/fichiers_de_police.jpg"
import droit_ficoba from "../../assets/icons/droit_acces_ficoba.png"
import Evenements from '../Evenements/Evenements';
import Commissaire from '../Commissaire/Commissaire';
import DetailsEvenement from '../DetailsEvenement/DetailsEvenement';
import FormulaireCourrier from '../FormulaireCourrier/FormulaireCourrier';
import Activites from '../Activités/Activites';
import AppelsOffres from '../AppelsOffres/AppelsOffres';
import FAQ from '../FAQ/FAQ';
import ForumDiscusion from '../ForumDiscussion/ForumDiscusion';
import Mission from '../Mission/Mission';
import MissionDetails from '../MissionDetails/MissionDetails';
import Quiz from '../Quiz/Quiz';
import RapportsAnnuels from '../RapportsAnnuels/RapportsAnnuels';
import Membres from '../Membres/Membres';
import President from '../President/President';
import LesLois from '../LesLois/LesLois';
import LaLoi from '../LaLoi/LaLoi';
import OutilsConformite from '../OutilsConformite/OutilsConformite';
import Decrets from '../Decrets/Decrets';
import Arretes from '../Arretes/Arretes';
import EspaceRT from '../EspaceRT/EspaceRT';
import Deliberations from '../Deliberations/Deliberations';
import Cooperations from '../Cooperations/Cooperations';
import TextesCommunautaires from '../TextesCommunautaires/TextesCommunautaires';
import EspaceDPO from '../EspaceDPO/EspaceDPO';


const Content = () => {

    const history = createBrowserHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>

            
            <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Routes>
          {/* <Route index element={<div> Here</div>} /> */}
          <Route path="/cooperations" element={<Cooperations/>} />
          <Route path="/textes/deliberations-publiques" element={<Deliberations/>} />
          <Route path="/lois/loi-1" element={<LaLoi/>} />
          <Route path="/vos-demarches" element={<Auth/>} />
          <Route path="/communique/details-1" element={<DetailsCommunique />} />
          <Route path="/activite/details-1" element={<DetailsActivite />} />
          <Route path="/commissaire" element={<Commissaire />} />
          <Route path="/president" element={<President />} />
          <Route path="/membres" element={<Membres />} />
          <Route path="/faire-une-demande" element={<FaireUneDemande />} />
          <Route path="/formulaire-du-courrier" element={<FormulaireCourrier />} />
          <Route path="/evenements/evenement26" element={<DetailsEvenement />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/communiques" element={<Communiques/>} />
          <Route path="/vos-droits/rester-informe" element={<DetailsDroit img={rester_informe} title={"Rester Informé"}/> } />
          <Route path="/vos-droits/vous-opposer" element={<DetailsDroit img={vous_opposer} title={"Vous opposer"}/> } />
          <Route path="/vos-droits/verifier-vos-donnees" element={<DetailsDroit img={verifier_vos_donnees} title={"Vérifier vos données"}/> } />
          <Route path="/vos-droits/rectifier-vos-donnees" element={<DetailsDroit img={rectifier_vos_donnees} title={"Rectifier vos données"}/> } />
          <Route path="/vos-droits/deferencer-contenu" element={<DetailsDroit img={deferencer_contenu} title={"Déréférencer un contenu"}/> } />
          <Route path="/vos-droits/effacer-vos-donnees" element={<DetailsDroit img={effacer_vos_donnees} title={"Effacer vos données"}/> } />
          <Route path="/vos-droits/emporter-vos-donnees" element={<DetailsDroit img={emporter_vos_donnees} title={"Emporter vos données"}/> } />
          <Route path="/vos-droits/demander-intervention-humaine" element={<DetailsDroit img={demander_intervention_humaine} title={"Demander une intervention humaine"}/> } />
          <Route path="/vos-droits/geler-vos-donnees" element={<DetailsDroit img={geler_vos_donnees} title={"Geler l’utilisation de vos données"}/> } />
          <Route path="/vos-droits/fichiers-police" element={<DetailsDroit img={fichiers_police} title={"Les fichiers de police, de gendarmerie et de renseignement"}/> } />
          <Route path="/vos-droits/droit-ficoba" element={<DetailsDroit img={droit_ficoba} title={"Droit d'accès au FICOBA"}/> } />
          <Route path="/vos-droits" element={<VosDroits/>} />
          <Route path="/vos-devoirs/devoir-26" element={<DetailsDevoir img={rester_informe} title={"Rester Informé"}/> } />
          {/* <Route path="/vos-devoirs/vous-opposer" element={<DetailsDevoir img={vous_opposer} title={"Vous opposer"}/> } /> */}
          {/* <Route path="/vos-devoirs/verifier-vos-donnees" element={<DetailsDevoir img={verifier_vos_donnees} title={"Vérifier vos données"}/> } /> */}
          {/* <Route path="/vos-devoirs/rectifier-vos-donnees" element={<DetailsDevoir img={rectifier_vos_donnees} title={"Rectifier vos données"}/> } /> */}
          {/* <Route path="/vos-devoirs/deferencer-contenu" element={<DetailsDevoir img={deferencer_contenu} title={"Déréférencer un contenu"}/> } /> */}
          {/* <Route path="/vos-devoirs/effacer-vos-donnees" element={<DetailsDevoir img={effacer_vos_donnees} title={"Effacer vos données"}/> } /> */}
          {/* <Route path="/vos-devoirs/emporter-vos-donnees" element={<DetailsDevoir img={emporter_vos_donnees} title={"Emporter vos données"}/> } /> */}
          {/* <Route path="/vos-devoirs/demander-intervention-humaine" element={<DetailsDevoir img={demander_intervention_humaine} title={"Demander une intervention humaine"}/> } /> */}
          {/* <Route path="/vos-devoirs/geler-vos-donnees" element={<DetailsDevoir img={geler_vos_donnees} title={"Geler l’utilisation de vos données"}/> } /> */}
          {/* <Route path="/vos-devoirs/fichiers-police" element={<DetailsDevoir img={fichiers_police} title={"Les fichiers de police, de gendarmerie et de renseignement"}/> } /> */}
          {/* <Route path="/vos-devoirs/droit-ficoba" element={<DetailsDevoir img={droit_ficoba} title={"Droit d'accès au FICOBA"}/> } /> */}
          <Route path="/vos-devoirs" element={<VosDevoirs />} />
          <Route path="/appels-d-offres" element={<AppelsOffres />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/forum-de-discussion" element={<ForumDiscusion />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
          <Route path="/mission/informer" element={<MissionDetails title={"Informer"} />} />
          <Route path="/mission/reguler" element={<MissionDetails title={"Réguler"} />} />
          <Route path="/mission/controler" element={<MissionDetails title={"Contrôler"} />} />
          <Route path="/mission/sanctionner" element={<MissionDetails title={"Sanctionner"} />} />
          <Route path="/mission/anticiper" element={<MissionDetails title={"Anticiper"} />} />
          <Route path="/mission/proteger" element={<MissionDetails title={"Protéger"} />} />           
          <Route path="/mission" element={<Mission />} />
          <Route path="/rapports-annuels" element={<RapportsAnnuels />} />
          <Route path="/membres" element={<Membres />} />
          <Route path="/autorite" element={<President />} />
          <Route path="/textes/lois" element={<LesLois />} />
          <Route path="/textes/arretes" element={<Arretes />} />
          <Route path="/textes/decrets" element={<Decrets />} />
          <Route path="/textes/textes-communautaires" element={<TextesCommunautaires />} />
          <Route path="/outils-conformite" element={<OutilsConformite />} />
          <Route path="/espace-rt" element={<EspaceRT />} />
          <Route path="/espace-dpo" element={<EspaceDPO />} />

          <Route path="/activites" element={<Activites/>} />
        <   Route path="/" element={<Home />} >
        </Route>
          {/* <Route path="*" element={<div>404</div>} /> */}
          <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
        {/* </Container> */}
        </div>
    )
}

export default Content
