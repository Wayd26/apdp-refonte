import React, {useState, useEffect} from 'react';
import "./PlansDePassation.css";
import pdf from '../../assets/images/pdf.png'
import doc from '../../assets/documents/CODE_DU_NUMERIQUE_DU_BENIN_EDITION 2019_ADN.pdf';
import {Carousel, Card, Button, ButtonGroup, Accordion} from "react-bootstrap";
import { RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill } from "react-icons/ri";
import {FaRegFilePdf, FaRegFileExcel} from "react-icons/fa";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {getATypeOfArticles} from '../../http/http';


const PlansDePassation = () => {
    const [communiques, setCommuniques] = useState();

    const loadCommuniquesData = async () => {
        const resp = await getATypeOfArticles("communiques")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setCommuniques(resp.data)
        }
    }
    
    useEffect(() => {
        loadCommuniquesData()        
    }, [])

    return (
        <div className={"inheritance-plan"} id={"inheritance-plan"}>
            
            <div style={{ 'display':'flex', 'align-items':'center', 'flex-direction':'column' }}>
                <h4 style={{'color': 'white', 'margin-top': '100px', 'margin-bottom': '0px', 'background-color': '#4385F6', 'width': '98%', 'padding': '20px',}}>PLANS DE PASSATION</h4>
                {/* inheritance-plan list 1 */}
                <div className={"inheritance-plan-card-list row text-align left"}>
                    <Card className={"inheritance-plan-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"inheritance-plan-card-img rounded-circle"} id={"inheritance-plan-card-img rounded-circle"}>
                            <FaRegFileExcel style={{'font-size': '150px', 'position': 'relative', 'top': '20px', 'color': 'green', }}/>
                        </div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>PLAN PREVISIONNEL DE PASSATION DES MARCHÉS PUBLICS</Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '10px', 'color': '#2E2E2E', 'font-weight': 'normal', 'margin': '20px'}}>
                            Marché de fournitures, travaux, services courants et prestations intellectuelles
                            </Card.Text>
                            <a href={doc} download="PDF.pdf">
                                <Button variant="light" style={{ width: '50%', 'font-size': '15px', 'background-color': '#FFF', 'border-radius': '24px', 'color':'#727C8E', 'margin-bottom': '20px', }}>
                                    Télécharger <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>

                    <Card className={"inheritance-plan-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"inheritance-plan-card-img rounded-circle"} id={"inheritance-plan-card-img rounded-circle"}>
                            <FaRegFileExcel style={{'font-size': '150px', 'position': 'relative', 'top': '20px', 'color': 'green', }}/>
                        </div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>AVIS GÉNÉRAL DE PASSATION DES MARCHÉS PUBLICS</Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '10px', 'color': '#2E2E2E', 'font-weight': 'normal', 'margin': '20px'}}>
                            Marché de fournitures, travaux, services courants et prestations intellectuelles
                            </Card.Text>
                            <a href={doc} download="PDF.pdf">
                                <Button variant="light" style={{ width: '50%', 'font-size': '15px', 'background-color': '#FFF', 'border-radius': '24px', 'color':'#727C8E', 'margin-bottom': '20px', }}>
                                    Télécharger <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>

                    <Card className={"inheritance-plan-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"inheritance-plan-card-img rounded-circle"} id={"inheritance-plan-card-img rounded-circle"}>
                            <FaRegFileExcel style={{'font-size': '150px', 'position': 'relative', 'top': '20px', 'color': 'green', }}/>
                        </div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>PLAN PREVISIONNEL DE PASSATION DES MARCHÉS PUBLICS</Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '10px', 'color': '#2E2E2E', 'font-weight': 'normal', 'margin': '20px'}}>
                            Marché de fournitures, travaux, services courants et prestations intellectuelles
                            </Card.Text>
                            <a href={doc} download="PDF.pdf">
                                <Button variant="light" style={{ width: '50%', 'font-size': '15px', 'background-color': '#FFF', 'border-radius': '24px', 'color':'#727C8E', 'margin-bottom': '20px', }}>
                                    Télécharger <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>

                    <Card className={"inheritance-plan-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"inheritance-plan-card-img rounded-circle"} id={"inheritance-plan-card-img rounded-circle"}>
                            <FaRegFileExcel style={{'font-size': '150px', 'position': 'relative', 'top': '20px', 'color': 'green', }}/>
                        </div>
                            <Card.Title style={{ 'text-align': 'center', 'font-weight': 'bold' }}>AVIS GÉNÉRAL DE PASSATION DES MARCHÉS PUBLICS</Card.Title>
                            <Card.Text style={{'text-align': 'center', 'font-size': '10px', 'color': '#2E2E2E', 'font-weight': 'normal', 'margin': '20px'}}>
                            Marché de fournitures, travaux, services courants et prestations intellectuelles
                            </Card.Text>
                            <a href={doc} download="PDF.pdf">
                                <Button variant="light" style={{ width: '50%', 'font-size': '15px', 'background-color': '#FFF', 'border-radius': '24px', 'color':'#727C8E', 'margin-bottom': '20px', }}>
                                    Télécharger <RiArrowRightCircleFill  style={{ 'width': '25px', 'height': '25px', 'margin-left': '0px', position: 'relative', 'right': '-10px', color: '#FFBE00',}}/>
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PlansDePassation;
