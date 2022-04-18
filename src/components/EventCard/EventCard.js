import React from 'react'
import "./EventCard.css"
import {FiChevronRight} from "react-icons/fi"
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"

const EventCard = (props) => {
    
    const {eventId, eventImage, eventTitle, eventSubTitle, eventContent, eventDate, moreClicked} = props;
    return (
        <div id="event-card" className="event-card">
            <img src={eventImage && eventImage} className="event-card-img"/>
            <p className="event-card-title">{eventTitle}</p>
            <p className="event-card-date"><BiCalendarCheck />  {eventDate.slice(8,10)} / {eventDate.slice(5,7)} / {eventDate.slice(0,4)} </p>
            <p className="event-card-subtitle">{eventSubTitle}</p>
            <p className="event-card-more" onClick={() => moreClicked(eventId)}>Lire plus <FiChevronRight /></p>
        </div>
    )
}

export default EventCard
