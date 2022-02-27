import React from 'react'
import "./EventCard.css"
import {FiChevronRight} from "react-icons/fi"
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"

const EventCard = (props) => {

    const {moreClicked} = props;
    return (
        <div id="event-card" className="event-card">
            <img src={imgCard5} className="event-card-img"/>
            <p className="event-card-title">Lorem ipsum dolor sit amet</p>
            <p className="event-card-date"><BiCalendarCheck /> 15/07/2021 </p>
            <p className="event-card-subtitle">Lorem ipsum dolor sit ametdolor sit ametdolor sadipscing elitr, sed diam nonumy eirmod tempor sit amet</p>
            <p className="event-card-more" onClick={moreClicked}>Lire plus <FiChevronRight /></p>
        </div>
    )
}

export default EventCard
