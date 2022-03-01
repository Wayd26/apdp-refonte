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
            // console.log("data data ", resp.data.data)
            let element = resp.data.data.filter(elt => {
                if(elt.id == evenement_id) {
                return elt
            } else {
                return false
            } 
        })
            setEventData(element)
        }
    }

    return (
        <div id="details-events" className="details-events">
        {/* <ActualiteCarousel /> */}
        <p className="details-events-title">{eventData && eventData[0]?.title}</p>
        <hr className="details-event-hr"></hr>

        <Card className="details-event-card-element">
            <Card.Body className="details-event-first-card">
            <Card.Text>
                <h2>{eventData && eventData[0]?.sub_title}</h2>
                <div dangerouslySetInnerHTML={{__html: (eventData && eventData[0]?.content)}}></div>
                
            </Card.Text>
            <div className="details-event-first-card-img" style={{ "backgroundImage" : 'url(' + `${eventData.image[0]}` + ')'}}></div>
            </Card.Body>
        </Card>

        <br/>
        <br/>
        <br/>

        {/* <Card className="details-event-card-element">
            <Card.Body className="details-event-second-card">
            <Card.Text>
                <Card>
                    <Card.Body>
                    <Card.Text>
                        <h2>Lorem Ipsum</h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Text>
            <div className="details-event-second-card-img"></div>
            </Card.Body>
        </Card> */}
       {/* <FaqSection /> */}
    </div>
    )
}

export default DetailsEvenement
