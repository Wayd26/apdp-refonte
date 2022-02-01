import React, {useState, useEffect} from 'react';
import "./PaysMembres.css";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import avatar from '../../assets/icons/avatar.jpg'
import FaqElement from '../../components/FaqElement/FaqElement';
import {Carousel, Card, Button, ButtonGroup, Accordion} from "react-bootstrap";
import { RiCalendar2Line, RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill } from "react-icons/ri";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const PaysMembres = () => {

    return (
        <div className={"countries"} id={"countries"}>
            {/* Carousel */}
            <ActualiteCarousel/>
            <div style={{ 'display':'flex', 'align-items':'center', 'flex-direction':'column' }}>
                <h4 style={{color: 'black', 'margin-top': '100px', 'margin-bottom': '0px',}}>ASSOCIATIONS ET RÉSEAUX DE PROTECTION DES DONNÉES PERSONNELLES</h4>
                <hr style={{ 'color':'#4385F6', 'height':'5px', 'width':'300px', 'opacity':'1', 'margin-bottom': '50px' }}/>
                {/* countries list 1 */}
                <div className={"countries-card-list row text-align left"}>
                    <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"countries-card-img-1 rounded-circle"} id={"countries-card-img-1 rounded-circle"}></div>
                        </Card.Body>
                        <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black'}}>AFAPDP</p>
                    </Card>

                    <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"countries-card-img-2 rounded-circle"} id={"countries-card-img-2 rounded-circle"}></div>
                        </Card.Body>
                        <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>ICDPPC</p>
                    </Card>

                    <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"countries-card-img-2-bis rounded-circle"} id={"countries-card-img-2-bis rounded-circle"}></div>
                        </Card.Body>
                        <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>RIPD</p>
                    </Card>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div style={{ 'padding-bottom': '300px', 'display':'flex', 'flex-direction':'column', 'align-items':'center'}}>
                    <h4 style={{'color': 'black', 'margin-top': '0px', 'margin-bottom': '50px', 'padding-top':'50px',}}>LÉGISLATIONS NATIONALES SUR LA PROTECTION DES DONNÉES PERSONNELLES</h4>

                    <h5 style={{'color': 'blue', 'font-size':'20px'}}>AFRIQUE</h5>
                    <hr style={{ 'color':'#4385F6', 'height':'5px', 'width':'300px', 'opacity':'1', 'margin-bottom': '50px' }}/>

                    {/* countries list 2 */}
                    <div className={"countries-card-list row"} style={{ 'justify-content':'left !important' }}>
                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-3 rounded-circle"} id={"countries-card-img-3 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Sénégal</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-4 rounded-circle"} id={"countries-card-img-4 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Mali</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-5 rounded-circle"} id={"countries-card-img-5 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Cap-vert</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-6 rounded-circle"} id={"countries-card-img-6 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Tunisie</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-7 rounded-circle"} id={"countries-card-img-7 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Burkina-Faso</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-8 rounded-circle"} id={"countries-card-img-8 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Cameroun</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-9 rounded-circle"} id={"countries-card-img-9 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Maroc</p>
                        </Card>


                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-10 rounded-circle"} id={"countries-card-img-10 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Sierra-Léone</p>
                        </Card>
                    </div>

                    <h5 style={{'color': 'blue', 'font-size':'20px', 'margin-top':'100px'}}>EUROPE</h5>
                    <hr style={{ 'color':'#4385F6', 'height':'5px', 'width':'300px', 'opacity':'1', 'margin-bottom': '50px' }}/>

                    {/* countries list 3 */}
                    <div className={"countries-card-list row"}>
                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-11 rounded-circle"} id={"countries-card-img-11 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Allemagne</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-12 rounded-circle"} id={"countries-card-img-12 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Albanie</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-13 rounded-circle"} id={"countries-card-img-13 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Andorre</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-14 rounded-circle"} id={"countries-card-img-14 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Autriche</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-15 rounded-circle"} id={"countries-card-img-15 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Belgique</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-16 rounded-circle"} id={"countries-card-img-16 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Bosnie-Herzégovine</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-17 rounded-circle"} id={"countries-card-img-17 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Chypre</p>
                        </Card>

                        <Card className={"countries-card col-md-6 col-lg-4 col-xl-4"}>
                            <Card.Body>
                            <div className={"countries-card-img-18 rounded-circle"} id={"countries-card-img-18 rounded-circle"}></div>
                            </Card.Body>
                            <p style={{ 'text-align': 'center', 'font-weight': 'bold', 'position': 'relative', 'top':'50px', 'color':'black' }}>Croatie</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaysMembres;
