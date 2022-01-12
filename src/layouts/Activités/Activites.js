import React, {useState, useEffect} from 'react';
import "./Activites.css";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import avatar from '../../assets/icons/avatar.jpg'
import FaqElement from '../../components/FaqElement/FaqElement';
import {Carousel, Card, Button, ButtonGroup, Accordion} from "react-bootstrap";
import { RiCalendar2Line, RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill } from "react-icons/ri";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';

const Activites = () => {

    return (
        <div className={"activities"} id={"activities"}>
            {/* Carousel */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img5}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <CardOnCaroussel />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img5}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <CardOnCaroussel />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <CardOnCaroussel />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Title */}

            <p className={'page-title'}>LES ACTIVITÉS</p>
            <p className={'page-subtitle'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>


            {/* Activities list 1 */}
            <hr className={"activities-separator"}/>
            <h2 className={"activities-page-section"}>LOREM IPSUM</h2>
            <div className={"activities-card-list row text-align left"}>
                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/* Activities list 2 */}
            <hr className={"activities-separator"}/>
            <h2 className={"activities-page-section"}>LOREM IPSUM</h2>
            <div className={"activities-card-list row text-align left"}>
                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>

                <Card className={"activities-card col-md-6 col-lg-4 col-xl-3"}>
                <div className={"activities-card-img"} id={"activities-card-img"}></div>
                    <Card.Body>
                        <Card.Title style={{ float: 'left', 'font-weight': 'bold' }}>Lorem Ipsum</Card.Title>
                        <Card.Text style={{ float: 'left', 'text-align': 'left', 'font-size': '9px', 'width': '100px',}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" className={"rounded-circle"} src={avatar} />
                        <br/>
                        <br/>
                        <br/>
                        <RiCalendar2Line style={{ 'width': '10px', 'height': '10px', float: 'left',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-8px', 'margin-left': '10px',}}>06/15/2021</p>
                        <br/>
                        <br/>
                        <RiQuestionAnswerFill style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>01</p>
                        <RiEyeFill  style={{ 'width': '10px', 'height': '10px', float: 'left', position: 'relative', top: '-20px', 'margin-left': '10px', color: 'red',}}/>
                        <p style={{ 'font-size': '10px', float: 'left', position: 'relative', top: '-28px', 'margin-left': '10px',}}>301</p>
                        <a href="/activite/details-1">
                            <Button variant="light" style={{ width: '100px', 'font-size': '8px', 'background-color': '#FFF', 'border-radius': '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </a>
                    </Card.Body>
                </Card>
            </div>

            {/* First Presentation card */}
            <Card className={"activities-card-for-presentation"}>
                <Card.Body className={"activities-card-text-for-presentation"}>
                <Card.Text>
                    <h2>Lorem Ipsum</h2>
                    <p className={"activities-card-text-subtitle-for-presentation"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                </Card.Text>
                </Card.Body>
                {/* <Card.Img src={img8} className={"activities-card-for-presentation-img"}/> */}
                <div className={"activities-card-for-presentation-img"}></div>
            </Card>

            <Card className={"activities-card-for-presentation-mobile"}>
                <Card.Body>
                <Card.Text>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                </Card.Text>
                </Card.Body>
                <div className={"activities-card-for-presentation-img"}></div>
            </Card>

            {/* Second Presentation card */}
            <Card className={"activities-card-for-presentation-2"}>
                <div className={"activities-card-for-presentation-img-2"}></div>
                <Card.Body className={"activities-card-text-for-presentation"}>
                <Card.Text>
                    <h2>Lorem Ipsum</h2>
                    <p className={"activities-card-text-subtitle-for-presentation"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                </Card.Text>
                </Card.Body>
                {/* <Card.Img src={img8} className={"activities-card-for-presentation-img"}/> */}
            </Card>

            <Card className={"activities-card-for-presentation-mobile-2"}>
                <Card.Body>
                <Card.Text>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                </Card.Text>
                </Card.Body>
                <div className={"activities-card-for-presentation-img-2"}></div>
            </Card>

            {/* FAQ section */}
            <div className={'faq-section'}>
                <p className={'guide-faq-title'}>Guide & FAQs</p>
                <p className={'guide-faq-subtitle'}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt </p>
                {
                    [0, 1, 2, 3, 4].map(i => <FaqElement />)
                }
            </div>
            
        </div>
    )
}

export default Activites;
