import React from 'react'
import "./FormulaireCourrier.css";
import img5 from "../../assets/images/img5.jpg";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const FormulaireCourrier = () => {
    return (
        <div className='mail-form'>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Régime de protection de deonnées</Breadcrumb.Item>
                <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
            </Breadcrumb>
            <ActualiteCarousel />
            <Form>
                <h2>REMPLISSEZ LES CHAMPS DU FORMULAIRE POUR PERSONNALISER VOTRE COURRIER</h2>

                <div className='form-first-group'>
                    <p>Informations à préciser</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Raison de la suppression des données</Form.Label>
                        <Form.Control as="textarea" placeholder="Veuillez entrer la raison de la suppression des données..." style={{ height: '100px' }}/>
                    </Form.Group>
                </div>

                <div className='form-second-group'>
                    <div className='form-second-group-first-input-group'>
                        <p>Informations à préciser</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre prénom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre adresse" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Code postal</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre code postal" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ville</Form.Label>
                            <Form.Select aria-label="Choisissez votre ville">
                                <option>Choisissez votre ville</option>
                                <option value="cotonou">Cotonou</option>
                                <option value="calavi">Calavi</option>
                                <option value="parakou">Parakou</option>
                                <option value="porto-novo">Porto-Novo</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className='form-second-group-second-input-group'>
                        <p>Expéditeur</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre prénom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre adresse" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Code postal</Form.Label>
                            <Form.Control type="text" placeholder="Entrez votre code postal" />
                        </Form.Group>
                    </div>
                </div>

                <div className='button-group'>
                    <Button variant="primary" type="submit">
                        Afficher Plus
                    </Button>
                </div>

                <br/>

                <Form.Text className="text-muted">
                    Les informations saisies dans ce formulaire sont facultatives. Elles ont vocation à vous faciliter l'exercice des droits informatique et libertés.
                </Form.Text>
                </Form>
        </div>
    )
}

export default FormulaireCourrier
