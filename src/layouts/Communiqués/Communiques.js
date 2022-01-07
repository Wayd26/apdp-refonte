import React, {useState, useEffect} from 'react';
import "./Communiques.css";
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import FaqElement from '../../components/FaqElement/FaqElement';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';

const Communiques = () => {

    return (
        <div className={"releases"} id={"releases"}>
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

            <p className={'page-title'}>COMMUNIQUES ET NEWSLETTERS</p>
            <p className={'page-subtitle'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>
            <div className={'releases-section'} id={'releases-section'}>
                {/* Releases card list */}
                <div className={"releases-first-section"} id={"releases-first-section"}>
                    <Card className={"releases-card"}>
                        <div className={'releases-card-image-div'} id={'releases-card-image-div'}>
                        </div>
                        <Card.Body>
                        <Card.Text className={"release-card-text"}>
                            <p className={"release-card-title"}>Communiqué 1</p>
                            <p className={"release-card-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>
                            <a href="#" className={"release-card-link"}>Lire plus</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className={"releases-card"}>
                        <div className={'releases-card-image-div'} id={'releases-card-image-div'}>
                        </div>
                        <Card.Body>
                        <Card.Text className={"release-card-text"}>
                            <p className={"release-card-title"}>Communiqué 2</p>
                            <p className={"release-card-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>
                            <a href="#" className={"release-card-link"}>Lire plus</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className={"releases-card"}>
                        <div className={'releases-card-image-div'} id={'releases-card-image-div'}>
                        </div>
                        <Card.Body>
                        <Card.Text className={"release-card-text"}>
                            <p className={"release-card-title"}>Communiqué 3</p>
                            <p className={"release-card-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>
                            <a href="#" className={"release-card-link"}>Lire plus</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className={"releases-card"}>
                        <div className={'releases-card-image-div'} id={'releases-card-image-div'}>
                        </div>
                        <Card.Body>
                        <Card.Text className={"release-card-text"}>
                            <p className={"release-card-title"}>Communiqué 4</p>
                            <p className={"release-card-subtitle"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</p>
                            <a href="#" className={"release-card-link"}>Lire plus</a>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <ButtonGroup className="me-2" aria-label="First group" style={{ 'margin-bottom': '80px', 'margin-top': '20px',}}>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>&#xAB;</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>1</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>2</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>3</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>&#xBB;</Button>
                    </ButtonGroup>
                </div>

                {/* Activities list & Categories list */}
                <div className={"releases-second-section"} id={"releases-second-section"}>
                    <p className={"releases-second-section-title"}>ACTIVITÉS POPULAIRES</p>
                    <br/>
                    <hr className={"releases-second-section-first-separator"}/>
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
                    <p className={"releases-second-section-title"}>CATEGORIES</p>
                    <br/>
                    <hr className={"releases-second-section-separator"}/>
                    <div className={"releases-second-section-vertical-nav-bar"}>
                        <a href="#" className={"releases-second-section-link"}>Lorem ipsum(13)</a>
                        <a href="#" className={"releases-second-section-link"}>Lorem ipsum(3)</a>
                        <a href="#" className={"releases-second-section-link"}>Lorem ipsum(1)</a>
                        <a href="#" className={"releases-second-section-link"}>Lorem ipsum(5)</a>
                        <a href="#" className={"releases-second-section-link"}>Lorem ipsum(8)</a>
                        <a href="#" className={"releases-second-section-link"}>Lorem ipsum(10)</a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <Card bg="primary" style={{ 'min-width': '22rem', width: 'auto',}}>
                        <Card.Body>
                        <Card.Title style={{ color: 'white', margin: '30px', 'font-size': '32px', 'font-family': 'Poppins'}}>Besoin d'aide ?</Card.Title>
                        <Card.Text style={{ color: 'white', 'font-size': '15px', width: 'auto', }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                        </Card.Text>
                        <Button variant="light" style={{ margin: '20px', 'font-family': 'Poppins' }}>Contactez-nous</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Presentation card */}
            <Card className={"releases-card-for-presentation"}>
                <Card.Body className={"releases-card-text-for-presentation"}>
                <Card.Text>
                    <h2 style={{font: "normal normal bold 63px/94px Poppins", 'letter-spacing': '0px', color: '#000000', opacity: '1', 'margin-bottom': '30px'}}>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                </Card.Text>
                </Card.Body>
                <Card.Img src={img6} className={"releases-card-for-presentation-img"}/>
            </Card>

            <Card className={"releases-card-for-presentation-mobile"}>
                <Card.Body>
                <Card.Text>
                    <h2 style={{font: "normal normal bold 25px/48px Poppins", 'letter-spacing': '0px', color: '#000000', opacity: '1', 'margin-bottom': '30px'}}>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                </Card.Text>
                </Card.Body>
                <div className={"releases-card-for-presentation-img"}></div>
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

export default Communiques;