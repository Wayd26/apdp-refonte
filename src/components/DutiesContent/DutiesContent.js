import React, {useEffect, useState} from 'react'
import DutyCard from '../DutyCard/DutyCard'
import "./DutiesContent.css"
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

const DutiesContent = (props) => {


    const [dutiesToDisplay, setDutiesToDisplay] = useState([])
    const vos_devoirs = [
        {"title":"Rester informé","link": "/vos-devoirs/rester-informe", "btn_text":"Exercer votre droit d'information", "description":"Un organisme qui collecte des informations sur vous doit vous proposer une information claire sur l’utilisation des données et sur vos droits !", "img" : rester_informe},
        {"title":"Vous opposer","link": "/vos-droits/vous-opposer", "btn_text":"Exercer votre droit d'opposition", "description":"Vous pouvez vous opposer à tout moment à ce qu’un organisme utilise certaines de vos données.", "img" : vous_opposer},
        {"title":"Vérifier vos données","link": "/vos-droits/verifier-vos-donnees", "btn_text":"Exercer votre droit d'accès", "description":"Obtenir et vérifier les données qu’un organisme détient sur vous.", "img" : verifier_vos_donnees},
        {"title":"Rectifier vos données","link": "/vos-droits/rectifier-vos-donnees", "btn_text":"Exercer votre droit de rectification", "description":"Rectifier les informations inexactes vous concernant.", "img" : rectifier_vos_donnees},
        {"title":"Déréférencer un contenu","link": "/vos-droits/deferencer-contenu", "btn_text":"Exercer votre droit au déréférencement", "description":"Effacer des données vous concernant.", "img" : deferencer_contenu},
        {"title":"Effacer vos données","link": "/vos-droits/effacer-vos-donnees", "btn_text":"Exercer votre droit d'effacement", "description":"Emporter une copie de vos données pour les réutiliser ailleurs !", "img" : effacer_vos_donnees},
        {"title":"Emporter vos données","link": "/vos-droits/emporter-vos-donnees", "btn_text":"Exercer votre droit à la portabilité", "description":"Remonter le fil de votre profilage, vous y opposer et demander l’intervention d’un humain dans une décision automatisée vous concernant.", "img" : emporter_vos_donnees},
        {"title":"Demander une intervention humaine","link": "/vos-droits/demander-intervention-humaine", "btn_text":"Exercer votre droit lié au profilage", "description":"", "img" : demander_intervention_humaine},
        {"title":"Geler l’utilisation de vos données","link": "/vos-droits/geler-vos-donnees", "btn_text":"Exercer votre droit à la limitation des données", "description":"", "img" : geler_vos_donnees},
        {"title":"Les fichiers de police, de gendarmerie et de renseignement","link": "/vos-droits/fichiers-police", "btn_text":"Exercer votre droit d'accès", "description":"", "img" : fichiers_police},
        {"title":"Droit d'accès au FICOBA","link": "/vos-droits/droit-ficoba", "btn_text":"Exercer votre droit d'accès au FICOBA", "description":"Droit d'accès au fichier des comptes bancaires et assimilés (FICOBA).", "img" : droit_ficoba},
    ];

    const {devoirs, categorie} = props;

    let vos_devoirs_filtered;

    useEffect(() => {
        console.log(devoirs)
        console.log(categorie)

         vos_devoirs_filtered = devoirs && devoirs.filter(elt => elt.category.name === categorie);
console.log(vos_devoirs_filtered)
        // droits && droits.map(elt => console.log(elt))
setDutiesToDisplay(vos_devoirs_filtered)
console.log(dutiesToDisplay)
    }, [devoirs, categorie])

    return (
        <div className={"duties-content"}>

            <p className={"duties-content-title text-center"}> Vos devoirs </p>
            <p className={"duties-content-subtitle d-flex justify-content-center mb-4 mt-3"}>Vous avez la possibilité de bloquer l’accès de cette personne à vos publications, de la signaler auprès de la communauté ou d’alerter le réseau social sur un comportement qui contrevient à sa charte d’utilisation. Il est très important de limiter au maximum l’audience de vos comptes sociaux. Des options de confidentialités existent pour « ne plus me trouver »,  « ne pas afficher/partager ma liste d’amis ». Il est également possible de  « bannir » les amis indésirables. Sur facebook, une option vous permet d’être avertis si un autre utilisateur mentionne votre nom sur une photo (tag).</p>
            <div className={"row d-flex justify-content-between"}>


            
      {dutiesToDisplay !== undefined ? dutiesToDisplay.map((item, index) => (
        <div className={"col-sm-6 col-xs-12 p-3"}> <DutyCard link={item.id} title={item.title} btnText={"Lire plus"} description={item.sub_title} imgSrc={item.image[0]} /> </div>
        )) : null}
            </div>
        </div>
    )
}

export default DutiesContent
