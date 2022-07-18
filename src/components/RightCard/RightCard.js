import React, {useState, useEffect} from 'react';
import "./RightCard.css";
import { RiArrowRightCircleFill } from 'react-icons/ri'
import {useNavigate} from "react-router-dom"


const RightCard = (props) => {

    const {imgSrc, title, btnText, description, link}  = props;
    const navigate = useNavigate();


    const handleRightCardClicked = (clicked) => {

        // console.log("this is clicked ", clicked);
            navigate(`${clicked}`)
    }

    useEffect(() => {
console.log(props)
    }, [props])

    return (
        <div className={"rightcard"}>
            <img src={imgSrc}  className={"rightcard-img"}/>
            <p className={"rightcard-title"}>{title}</p>
            <p className={"rightcard-description"} dangerouslySetInnerHTML={{__html: (description)}}></p>
            <button onClick={() => handleRightCardClicked(link)} className={"rightcard-button d-flex justify-content-around align-self-right"}>
            <span className={'rightcard-button-span'}>{btnText}</span>
                <RiArrowRightCircleFill className={'rightcard-button-arrow'} />
            </button>
        </div>
    )
}

export default RightCard
