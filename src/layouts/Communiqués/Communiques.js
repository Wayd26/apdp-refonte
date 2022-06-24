import React, {useState, useEffect} from 'react';
import "./Communiques.css";
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import FaqSection from '../../components/FaqSection/FaqSection';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import { getATypeOfArticles } from '../../http/http';
import {useNavigate} from "react-router-dom";
import {RiCalendar2Line, RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill} from "react-icons/ri";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Communiques = () => {

    const [communiques, setCommuniques] = useState([]);
    const navigate = useNavigate()

    const handleMoreClicked = (id) =>{
        navigate(`/communique/${id}`)
    }

    const loadCommuniquesData = async () => {
        const resp = await getATypeOfArticles("communiques")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setCommuniques(resp.data.data)
        }
    }
    
    useEffect(() => {
        loadCommuniquesData()        
    }, [])

    return (
        <div className={"releases"} id={"releases"}>
   
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
                <Breadcrumb.Item active>Communiqués et Newsletters</Breadcrumb.Item>
            </Breadcrumb>
            <p className={'page-title'}>COMMUNIQUES ET NEWSLETTERS</p>
            {/* <p className={'page-subtitle'}>Lorem ipsum dolor sit amet, consetetur sadipsiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p> */}
            <div className={'releases-section'} id={'releases-section'}>
                {/* Releases card list */}
                <div className={"releases-first-section"} id={"releases-first-section"}>
                {communiques && communiques.map((communique, index) => 
                    (<><Card className={"releases-card"}>
                        <div className={'releases-card-image-div'} id={'releases-card-image-div'} style={{ "backgroundImage" : `url(${communique?.image_url})`}}>
                        </div>
                        <Card.Body>
                        <Card.Text className={"release-card-text"}>
                            <p className={"release-card-title"}>{communique.title}</p>
                            <p className={"release-card-subtitle"}>{communique.sub_title}</p>
                            {/* <a href="/communique/details-1" className={"release-card-link"}>Lire plus</a> */}
                            <Button onClick={() => handleMoreClicked(communique.id)} variant="light" style={{ width: '100px', fontSize: '8px', backgroundColor: '#FFF', borderRadius: '24px', float: 'right', }}>
                                LIRE PLUS <RiArrowRightCircleFill  style={{ width: '25px', height: '25px', marginLeft: '0px', position: 'relative', right: '-10px', color: '#FFBE00',}}/>
                            </Button>
                        </Card.Text>
                        </Card.Body> 
                    </Card>  
                    <br />
                    </>)
                        )
                    }
                   
                    {/* <ButtonGroup className="me-2" aria-label="First group" style={{ 'margin-bottom': '80px', 'margin-top': '20px',}}>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>&#xAB;</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>1</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>2</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>3</Button>
                        <Button variant="light" style={{ 'color': '#FFBE02', border: '1px solid gray', width: '50px', height: '50px', 'font-size': '20px',}}>&#xBB;</Button>
                    </ButtonGroup> */}
                </div>

                {/* Activities list & Categories list */}
                {/* <div className={"releases-second-section"} id={"releases-second-section"}>
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

                    <BesoinAide />
                </div> */}
            </div>

            {/* Presentation card */}
            {/* <Card className={"releases-card-for-presentation"}>
                <Card.Body className={"releases-card-text-for-presentation"}>
                <Card.Text>
                    <h2 className={"releases-card-text-title-for-presentation"}>Lorem Ipsum</h2>
                    <p className={"releases-card-text-subtitle-for-presentation"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
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
            </Card> */}

            {/* FAQ section */}
            {/* <FaqSection /> */}
        </div>
    )
}

export default Communiques;