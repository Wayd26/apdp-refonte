import React from 'react';
import "./DetailsDevoir.css"
import rester_informe from "../../assets/icons/rester_informe.png"


const DetailsDevoir = (props) => {

    const {img, title} = props;
    return (
        <div id="details-droit" className="details-devoir" style={{background: '#E2E2E2', paddingBottom: "40px", paddingTop: "40px"}}>
            <p className="details-devoir-title mt-4">Vos Devoirs</p>
            <p className="details-devoir-small-desc mx-auto mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips</p>
            <div className="details-devoir-image-container mx-auto mt-4">
                <img src={rester_informe} className="details-devoir-image"/>
            </div>
            <div className="details-devoir-text-container mx-auto">
                <p className="details-devoir-text-title">{"OBLIGATION DE DÉCLARATION PRÉALABLE DES TRAITEMENTS DE DONNÉES À CARACTÈRE PERSONNEL"}</p>
                <p className="details-devoir-text-subtitle">Lorem ipsum dolor sit amet</p>
                <p className="details-devoir-text-content">{"Préalablement à leur mise en œuvre les traitements de données à caractère personnel effectués pour le compte de personnes doivent faire l'objet d'une déclaration auprès de la Commission de l’informatique et des libertés. (Article 19 de la loi 010-2004/AN du 20 Avril 2004 portant protection des données à caractère personnel)."}</p>
            </div>
        </div>
    )
}

export default DetailsDevoir;
 