import React from 'react'
import "./Commissaire.css";
import img5 from "../../assets/images/img5.jpg";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"


const Commissaire = () => {
    return (
        <div className='info-section'>
            <ActualiteCarousel />
            <p className="commissaire-title">CONTRIBUTION DU COMMISSAIRE DU GOUVERNEMENT AUX ACTIVITÉS DE L’APDP</p>
            <hr className="commissaire-hr"></hr>
            <div className='content'>
                <Card style={{ 'margin-top': '100px', }}>
                    <Card.Body>
                        <img src={img5} className='rounded-circle' style={{ width: '300px', height: '300px', position: 'relative', top: '-180px',}}/>
                        <h3 style={{position: 'relative', top: '-100px',}}>Mme. Félicité AHOUANDOGBO née TALON</h3>
                        <Card.Text style={{'margin': '0px 100px 100px 100px', 'text-align': 'justify',}}>
                        La loi n° 2017-20 du 20 avril 2018 portant code du numérique en République du Bénin (Livre 5ième relatif à la protection des données à caractère personnel et de la vie privée) en son article 465, dispose qu’« un Commissaire du Gouvernement, désigné par le Président de la République, siège auprès de l’ APDP… ». Dès sa nomination, le commissaire du Gouvernement, prenant la mesure de son rôle, a servi d’interface entre l’APDP et les administrations notamment le Gouvernement. Par ailleurs, le commissaire du gouvernement a donné son avis sur tous les projets de délibérations relativement aux demandes (autorisations, déclarations et avis) dont l’APDP a été saisie. En outre, le commissaire du Gouvernement s’est investi dans plusieurs activités relevant de ses attributions à savoir : • présenter les observations du Gouvernement lors des séances de l’APDP ; • assister les personnes morales de droit public et celles de droit privé gérant un service public à l’accomplissement des formalités préalables liées aux déclarations, aux demandes d’avis ou d’autorisations dans le cadre de la mise en oeuvre d’un traitement de données personnelles ; • informer et conseiller les ministères sur l’ensemble des questions touchant à la protection des libertés dans les traitements informatiques des administrations ; • coordonner le rôle des ministères dans la protection des données personnelles ; • apporter son concours aux services du Président de la République sur tout sujet intéressant les traitements automatisés et la protection des données à caractère personnel. Aussi, le Commissaire du Gouvernement a-t-il contribué de par sa position à la dynamique amorcée depuis l’adoption de la loi n° 2017-20 du 20 avril 2018 portant code du numérique en République du Bénin (Livre 5ième relatif à la protection des données à caractère personnel et de la vie privée).
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            

        </div>
    )
}

export default Commissaire
