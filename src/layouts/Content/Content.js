import React, { useEffect } from 'react'
import Home from '../Home/Home'
// import { Route, Router, Switch, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../Auth/Auth"
import VosDroits from '../VosDroits/VosDroits';
import DetailsDroit from '../DetailsDroit/DetailsDroit';
import DetailsCommunique from '../DetailsCommuniqué/DetailsCommunique';
import DetailsConseils from '../DetailsConseils/DetailsConseils';
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
import Conseils from '../Conseils/Conseils';
import MentionsLegales from '../MentionsLegales/MentionsLegales';
import PaysMembres from '../PaysMembres/PaysMembres';
import TextesCommunautaires from '../TextesCommunautaires/TextesCommunautaires';
import EspaceDPO from '../EspaceDPO/EspaceDPO';
import DynamiqueForm from '../Dynamique/DynamiqueForm';
import Procedures from '../Procedures/Procedures';
import Photothèque from '../Photothèque/Photothèque';
import Vidéothèque from '../Vidéothèque/Vidéothèque';
import PlansDePassation from '../PlansDePassation/PlansDePassation';
import Contact from '../Contact/Contact';
import Recommandations from '../Recommandations/Recommandations';
import StatutDemande from '../StatutDemande/StatutDemande';
import DetailsDemande from '../DetailsDemande/DetailsDemande';
import BreakNewsDetails from '../BreakNewsDetails/BreakNewsDetails';
import Actualités from '../Actualités/Actualités';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import GlobalResearch from '../GlobalResearch/GlobalResearch';
import GlobalSearchItem from '../GlobalSearchItem/GlobalSearchItem';


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
                    <Route path="/auth" element={<Auth/>} />
                    <Route path="/query/:form_type/:query_id" element={<DetailsDemande/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/plans-de-passation" element={<PlansDePassation />} />
                    <Route path="/phototheque" element={<Photothèque />} />
                    <Route path="/videotheque" element={<Vidéothèque />} />
                    <Route path="/procedures" element={<Procedures />} />
                    <Route path="/textes-internationaux" element={<Conseils />} />
                    <Route path="/recommandations" element={<Recommandations />} />
                    <Route path="/recommandations/:conseil_id" element={<DetailsConseils />} />
                    <Route path="/cooperations" element={<Cooperations />} />
                    <Route path="/textes/deliberations-publiques" element={<Deliberations />} />
                    <Route path="/pays-membres" element={<PaysMembres />} />
                    <Route path="/mentions-legales" element={<MentionsLegales />} />
                    <Route path="/lois/:loi_id" element={<LaLoi />} />
                    <Route path="/vos-demarches" element={<Auth />} />
                    <Route path="/communique/:communique_id" element={<DetailsCommunique />} />
                    <Route path="/activite/:activity_id" element={<DetailsActivite />} />
                    <Route path="/commissaire" element={<Commissaire />} />
                    <Route path="/president" element={<President />} />
                    <Route path="/membres" element={<Membres />} />
                    <Route path="/faire-une-demande" element={<FaireUneDemande />} />
                    <Route path="/formulaire-du-courrier" element={<FormulaireCourrier />} />
                    <Route path="/evenement/:evenement_id" element={<DetailsEvenement />} />
                    <Route path="/evenements" element={<Evenements />} />
                    <Route path="/communiques" element={<Communiques />} />
                    <Route path="/vos-droits/:droit_id" element={<DetailsDroit />} />
                    <Route path="/vos-droits" element={<VosDroits />} />
                    <Route path="/vos-devoirs/:devoir_id" element={<DetailsDevoir />} />
                    <Route path="/vos-devoirs" element={<VosDevoirs />} />
                    <Route path="/appels-d-offres" element={<AppelsOffres />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/forum-de-discussion" element={<ForumDiscusion />} />
                    {/* <Route path="/quiz" element={<Quiz />} /> */}
                    <Route path="/mission/:mission_id" element={<MissionDetails />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/rapports-annuels" element={<RapportsAnnuels />} />
                    <Route path="/membres" element={<Membres />} />
                    <Route path="/autorite" element={<President />} />
                    <Route path="/textes/lois" element={<LesLois />} />
                    <Route path="/textes/arretes" element={<Arretes />} />
                    <Route path="/textes/decrets" element={<Decrets />} />
                    <Route path="/textes/accords" element={<TextesCommunautaires type={"accords"} />} />
                    <Route path="/textes/reglements" element={<TextesCommunautaires type={"reglements"} />} />
                    <Route path="/textes/directives" element={<TextesCommunautaires type={"directives"} />} />
                    <Route path="/outils-conformite" element={<OutilsConformite />} />
                    <Route path="/breaknews/:breaknews_id" element={<BreakNewsDetails />} />
                    <Route path="/actualites/:actualite_id" element={<Actualités />} />
                    <Route path="/espace-rt" element={<EspaceRT />} />
                    <Route path="/espace-dpo" element={<EspaceDPO />} />
                    <Route path="/statut-demande" element={<StatutDemande />} />
                    <Route path="/formulaire/:id" element={<DynamiqueForm />} />
                    <Route path="/activites" element={<Activites />} />
                    <Route path="/recherche-globale" element={<GlobalResearch />} />
                    <Route path="/recherche-globale/:recherche_id/:page/:search_text" element={<GlobalSearchItem />} />

                    < Route path="/" element={<Home />} >
                    </Route>
                    {/* <Route path="*" element={<div>404</div>} /> */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
            {/* </Container> */}
        </div>
    )
}

export default Content
