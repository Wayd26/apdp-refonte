import React from 'react';
import "./DutyCard.css";
import { RiArrowRightCircleFill } from 'react-icons/ri'
import {useNavigate} from "react-router-dom"


const DutyCard = (props) => {

    const {imgSrc, title, btnText, description, link}  = props;
    const navigate = useNavigate();


    const handleDutyCardClicked = (clicked) => {

        // console.log("this is clicked ", clicked);
            // navigate(`${clicked}`)
            navigate("/vos-devoirs/devoir-26")
    }

    return (
        <div className={"dutycard"}>
            <p className={"dutycard-title"}>OBLIGATION DE DÉCLARATION PRÉALABLE DES TRAITEMENTS DE DONNÉES À CARACTÈRE PERSONNEL</p>
            <p className={"dutycard-description"}>Préalablement à leur mise en œuvre les traitements de données à caractère personnel effectués pour le compte de personnes doivent faire l'objet d'une déclaration auprès de la Commission de l’informatique et des libertés. (Article 19 de la loi 010-2004/AN du 20 Avril 2004 portant protection des données à caractère personnel).</p>
            <button onClick={() => handleDutyCardClicked(link)} className={"dutycard-button d-flex justify-content-around align-self-right"}>
            <span className={'dutycard-button-span'}>Lire la suite</span>
                <RiArrowRightCircleFill className={'dutycard-button-arrow'} />
            </button>
        </div>
    )
}

export default DutyCard
