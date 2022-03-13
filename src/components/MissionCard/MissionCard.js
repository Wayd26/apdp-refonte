import React from 'react';
import "./MissionCard.css";
import {RiArrowRightCircleFill} from "react-icons/ri";
import {useNavigate} from "react-router-dom"

const MissionCard = (props) => {

    const { title, link, description } = props;
    const navigate = useNavigate();


    const handleMissionCardClicked = (clicked) => {

        // console.log("this is clicked ", clicked);
            navigate(`/mission/${clicked}`)
    }
    return (
        <div className="mission-card">
            <div className="mission-card-title">{title}</div>
            <div className="mission-card-description ">{description} </div>  
            <button onClick={() => handleMissionCardClicked(link)} className="mission-card-button">En savoir plus
            <RiArrowRightCircleFill className="mission-card-button-icon"/></button>
            
        </div>
    )
}
export default MissionCard
