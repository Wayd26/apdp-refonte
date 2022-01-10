import React from 'react'
import "./DetailsEvenement.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"


const DetailsEvenement = () => {
    return (
        <div id="details-events" className="details-events">
        <ActualiteCarousel />
        <p className="details-events-title">ÉVENEMENT 1</p>
        <hr className="details-event-hr"></hr>
       <div className="row d-flex">

        <div className="details-events-cards-container">
           {/* Start Details event card */}
           <div id="event-card" className="event-card">
            <img src={imgCard5} className="event-card-img"/>
            <p className="event-card-title">Lorem ipsum dolor sit amet</p>
            <p className="event-card-date"><BiCalendarCheck /> 15/07/2021 </p>
            <p className="details-event-card-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>
            
        </div>
           {/* End Details event card */}
            
        </div>
        <div className="details-events-others-container">
            <p className="popular-activities-title">Activités Populaires</p>
            <hr className="popular-activities-hr"></hr>
            {/* Start Popular Activites */}
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>

            {/* End Popular Activities */}
            {/* Start Categories */}
            <p className="categories-title">Catégories</p>
            <hr className="categories-hr"></hr>
            <p className="categories-items">Lorem ipsum(13)</p>
            <p className="categories-items">Lorem ipsum(5)</p>
            <p className="categories-items">Lorem ipsum(8)</p>
            <p className="categories-items">Lorem ipsum(11)</p>
            <p className="categories-items">Lorem ipsum(7)</p>
            {/* End Categories */}
           
        </div>
       </div>

       <FaqSection />
    </div>
    )
}

export default DetailsEvenement
