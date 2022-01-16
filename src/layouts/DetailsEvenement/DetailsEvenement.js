import React from 'react'
import "./DetailsEvenement.css";
import img5 from "../../assets/images/img5.jpg";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"


const DetailsEvenement = () => {
    return (
        <div id="details-events" className="details-events">
        <ActualiteCarousel />
        <p className="details-events-title">ÉVENEMENT 1</p>
        <hr className="details-event-hr"></hr>

        <Card className="details-event-card-element">
            <Card.Body className="details-event-first-card">
            <Card.Text>
                <h2>Lorem Ipsum</h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
            </Card.Text>
            <div className="details-event-first-card-img"></div>
            </Card.Body>
        </Card>

        <br/>
        <br/>
        <br/>

        <Card className="details-event-card-element">
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
        </Card>
       <FaqSection />
    </div>
    )
}

export default DetailsEvenement
