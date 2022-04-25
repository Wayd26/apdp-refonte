import React, {useState, useEffect} from 'react'
import RightCard from '../RightCard/RightCard'
import "./RightsContent.css"
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

const RightsContent = (props) => {


    const [droitsToDisplay, setDroitsToDisplay] = useState([])

    const vos_droits = [
        {"title":"Rester informé","link": "/vos-droits/rester-informe", "btn_text":"Exercer votre droit d'information", "description":"Un organisme qui collecte des informations sur vous doit vous proposer une information claire sur l’utilisation des données et sur vos droits !", "img" : rester_informe},
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

    const {droits, categorie} = props;

    let vos_droits_filtered;
    
    useEffect(() => {
        console.log(droits)
        console.log(categorie)

         vos_droits_filtered = droits && droits.filter(elt => elt.category.name === categorie);
console.log(vos_droits_filtered)
        // droits && droits.map(elt => console.log(elt))
setDroitsToDisplay(vos_droits_filtered)
console.log(droitsToDisplay)
    }, [droits, categorie])
       
    
    // useEffect(() => {
    //     console.log("droits to display ", droitsToDisplay)
    // }, [droitsToDisplay])
       
    return (
        <div className={"rights-content"}>

            <p className={"rights-content-title text-center"}> Vos droits </p>
            <p className={"rights-content-subtitle d-flex justify-content-center mb-4 mt-3"}> Si un responsable de traitement estime qu’une demande est manifestement abusive, il peut ne pas y donner suite. En revanche si l’affaire est portée devant un juge il devra apporter la preuve du caractère manifestement abusif de la demande en cause. L’exercice du droit d’accès ne doit pas porter atteinte au droit d’auteur. Pour certains fichiers de police ou intéressant la sûreté de l’Etat, la loi n’autorise pas un particulier à accéder directement aux informations contenues dans le fichier. Il pourra cependant y accéder de manière indirecte par l’intermédiaire de l’APDP. </p>
            <div className={"row"}>
            
      {droitsToDisplay !== undefined ? droitsToDisplay.map((item, index) => (
        <div className={"col-sm-4 col-xs-12 p-3"}> <RightCard link={item.id} title={item.title} btnText={"Lire plus"} description={item.sub_title} imgSrc={item.image[0]} /> </div>
        )) : null}
        
            </div>
        </div>
    )
}

export default RightsContent
