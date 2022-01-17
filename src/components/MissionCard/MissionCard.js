import React from 'react';
import "./MissionCard.css";
import {RiArrowRightCircleFill} from "react-icons/ri";
import {useNavigate} from "react-router-dom"

const MissionCard = (props) => {

    const { title, link } = props;
    const navigate = useNavigate();


    const handleMissionCardClicked = (clicked) => {

        // console.log("this is clicked ", clicked);
            navigate(`/mission/${clicked}`)
    }
    return (
        <div className="mission-card">
            <div className="mission-card-title">{title}</div>
            <div className="mission-card-description">Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos </div>  
            <button onClick={() => handleMissionCardClicked(link)} className="mission-card-button">En savor plus
            <RiArrowRightCircleFill className="mission-card-button-icon"/></button>
            
        </div>
    )
}
export default MissionCard
