import React, {useState, useEffect} from 'react';
import "./Membres.css";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import avatar from '../../assets/icons/avatar.jpg'
import FaqElement from '../../components/FaqElement/FaqElement';
import {Carousel, Card, Button, ButtonGroup, Accordion} from "react-bootstrap";
import { RiCalendar2Line, RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill } from "react-icons/ri";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const Membres = () => {

    return (
        <div className={"members"} id={"members"}>
            {/* Carousel */}

            <h3 style={{color: 'blue', 'margin-top': '100px', 'margin-bottom': '100px',}}>LES MEMBRES DE LA 3ÈME MANDATURE</h3>
            
            {/* members list 1 */}
            <div className={"members-card-list row text-align left"}>
                <h4 style={{color: '#f68b1e', 'margin-bottom': '10px',}}>LE BUREAU </h4>
                <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                    <Card.Body>
                    <div className={"members-card-img-1 rounded-circle"} id={"members-card-img-1 rounded-circle"}></div>
                        <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Yvon DETCHENOU </Card.Title>
                        <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                        Président
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                    <Card.Body>
                    <div className={"members-card-img-2 rounded-circle"} id={"members-card-img-2 rounded-circle"}></div>
                        <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M.    Amouda
                        ABOUSEYDOU </Card.Title>
                        <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                        Rapporteur
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div style={{ 'background-color': '#dfdcdc', 'padding-bottom': '50px',}}>
                <h4 style={{color: '#f68b1e', 'margin-top': '0px', 'margin-bottom': '50px', 'padding-top':'50px',}}>LES CONSEILLERS</h4>

                {/* members list 2 */}
                <div className={"members-card-list row text-align left"}>
                    <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"members-card-img-3 rounded-circle"} id={"members-card-img-3 rounded-circle"}></div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Yaya Worou
                            AKIBOU SORO </Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                            Conseiller
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"members-card-img-4 rounded-circle"} id={"members-card-img-4 rounded-circle"}></div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Euric GUIDI </Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                            Conseiller
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"members-card-img-5 rounded-circle"} id={"members-card-img-5 rounded-circle"}></div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Wally Boda
                            Mamoudou ZOUMAROU </Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                            Conseiller
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"members-card-img-6 rounded-circle"} id={"members-card-img-6 rounded-circle"}></div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Judicaël
                            TANDJIEKPON </Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                            Conseiller
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"members-card-img-7 rounded-circle"} id={"members-card-img-7 rounded-circle"}></div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Claude DieuDonné MONTCHO </Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                            Conseiller
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className={"members-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"members-card-img-8 rounded-circle"} id={"members-card-img-8 rounded-circle"}></div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>M. Louis Augustin
                            FIDEGNON </Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '15px', 'color': '#f68b1e', 'font-weight': 'bold'}}>
                            Conseiller
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}

export default Membres;
