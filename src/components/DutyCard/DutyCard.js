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
            navigate(`${clicked}`)
    }

    return (
        <div className={"dutycard"}>
            <p className={"dutycard-title"}>{title}</p>
            <img src={imgSrc}  className={"dutycard-img"}/>

            <p className={"dutycard-description"} dangerouslySetInnerHTML={{__html: (description)}}></p>
            <button onClick={() => handleDutyCardClicked(link)} className={"dutycard-button d-flex justify-content-around align-self-right"}>
            <span className={'dutycard-button-span'}>{btnText}</span>
                <RiArrowRightCircleFill className={'dutycard-button-arrow'} />
            </button>
        </div>
    )
}

export default DutyCard
