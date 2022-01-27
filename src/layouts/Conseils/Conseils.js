import React, {useState, useEffect} from 'react';
import "./Conseils.css";
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { RiArrowRightCircleFill } from 'react-icons/ri';


const Conseils = () => {

    return (
        <div className={"advices"} id={"advices"}>
            {/* Carousel */}
           <ActualiteCarousel />

            {/* Title */}
            <p className={'page-title'}>CONSEILS</p>
            <p className={'page-subtitle'}>Lorem ipsum dolor sit amet, consetetur sadipsiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
            <div className={'advices-section'} id={'advices-section'}>
                {/* advices card list */}
                <div className={"advices-first-section"} id={"advices-first-section"}>
                    <Card className={"advices-card"}>
                        <div className={'advices-card-image-div'} id={'advices-card-image-div'}>
                        </div>
                        <Card.Body>
                        <Card.Text className={"advice-card-text"}>
                            <p className={"advice-card-title"}>Protégez vos données personnelles dans le Commerce en ligne !!!</p>
                            <p style={{ 'padding': '10px', 'text-align': 'center', }}>Le commerce électronique ou vente en ligne désigne l’échange de biens et de services entre deux entités sur le réseau internet ou via les réseaux téléphoniques mobiles.</p>
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', 'margin':'30px', 'background': '#FFFFFF 0% 0% no-repeat padding-box', 'box-shadow': '0px 8px 15px #727C8E5C',}}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* Activities list & Categories list */}
                <div className={"advices-second-section"} id={"advices-second-section"}>
                    <p className={"advices-second-section-title"}>ACTIVITÉS POPULAIRES</p>
                    <br/>
                    <hr className={"advices-second-section-first-separator"}/>
                    <Figure>
                        <Figure.Image
                            width={162}
                            height={104}
                            alt="162x104"
                            src={img5}
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>

                    <Figure>
                        <Figure.Image
                            width={162}
                            height={104}
                            alt="162x104"
                            src={img6}
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>

                    <Figure>
                        <Figure.Image
                            width={162}
                            height={104}
                            alt="162x104"
                            src={img7}
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>

                    <Figure>
                        <Figure.Image
                            width={162}
                            height={104}
                            alt="162x104"
                            src={img7}
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>

                    <Figure>
                        <Figure.Image
                            width={162}
                            height={104}
                            alt="162x104"
                            src={img5}
                        />
                        <Figure.Caption>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </Figure.Caption>
                    </Figure>

                    <br/>
                    <br/>
                    <br/>
                    <p className={"advices-second-section-title"}>CATEGORIES</p>
                    <br/>
                    <hr className={"advices-second-section-separator"}/>
                    <div className={"advices-second-section-vertical-nav-bar"}>
                        <a href="#" className={"advices-second-section-link"}>Lorem ipsum(13)</a>
                        <a href="#" className={"advices-second-section-link"}>Lorem ipsum(3)</a>
                        <a href="#" className={"advices-second-section-link"}>Lorem ipsum(1)</a>
                        <a href="#" className={"advices-second-section-link"}>Lorem ipsum(5)</a>
                        <a href="#" className={"advices-second-section-link"}>Lorem ipsum(8)</a>
                        <a href="#" className={"advices-second-section-link"}>Lorem ipsum(10)</a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Conseils;