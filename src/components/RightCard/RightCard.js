import React from 'react';
import "./RightCard.css";
import { RiArrowRightCircleFill } from 'react-icons/ri'


const RightCard = (props) => {

    const {imgSrc, title, btnText, description}  = props;
    return (
        <div className={"rightcard"}>
            <img src={imgSrc}  className={"rightcard-img"}/>
            <p className={"rightcard-title"}>{title}</p>
            <p className={"rightcard-description"}>{description}</p>
            <button className={"rightcard-button d-flex justify-content-around align-self-right"}>
            <span className={'rightcard-button-span'}>{btnText}</span>
                <RiArrowRightCircleFill className={'rightcard-button-arrow'} />
            </button>
        </div>
    )
}

export default RightCard
