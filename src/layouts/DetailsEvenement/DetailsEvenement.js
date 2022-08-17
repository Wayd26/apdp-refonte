import React, {useEffect, useState} from 'react'
import "./DetailsEvenement.css";
import img5 from "../../assets/images/img5.jpg";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import {BiCalendarCheck} from "react-icons/bi";
import imgCard5 from "../../assets/images/img5.jpg";
import imgCard6 from "../../assets/images/img6.jpg";
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {FiDownload} from "react-icons/fi";


const DetailsEvenement = () => {

    let { evenement_id } = useParams();
    const [eventData, setEventData] = useState();

    useEffect(() => {
        loadEventData();
    }, [evenement_id])

     const loadEventData = async () => {
        const resp = await getATypeOfArticles("evenements")
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            let element = resp.data.data.filter(elt => {
                if(elt.id == evenement_id) {
                    console.log(elt)
                return elt
            } else {
                return false
            } 
        })
            setEventData(element)
            console.log(eventData)
            console.log(element)
        }
    }

    return (
        <div id="details-events" className="details-events">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Evénements</Breadcrumb.Item>
                <Breadcrumb.Item active>Détails de l'événement</Breadcrumb.Item>
            </Breadcrumb>
        <p className="details-events-title">{eventData && eventData[0]?.title}</p>
        <hr className="details-event-hr"></hr>
        <Card className="details-event-card-element mx-auto">
            <Card.Body className="details-event-first-card">
            <Card.Text>
                <h2>{eventData && eventData[0]?.sub_title}</h2>
                <div dangerouslySetInnerHTML={{__html: (eventData && eventData[0]?.content)}}></div>
            </Card.Text>    
            <div className="details-event-first-card-img" style={ eventData && { "backgroundImage" : 'url(' + `${eventData[0]?.image_url}` + ')'}}></div>
            <a href={eventData && eventData[0]?.document_url[0]} download>
              <button className="espace-rt-card-button">Télécharger <FiDownload className="espace-rt-card-button-icon" /></button>
              </a>
            </Card.Body>
        </Card>

        <br/>
        <br/>
        <br/>

    </div>
    )
}

export default DetailsEvenement
