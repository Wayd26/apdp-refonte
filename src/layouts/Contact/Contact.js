import React from 'react';
import "./Contact.css";
import {Card, Button, Form,} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {FaFacebook, FaYoutube, FaPhoneAlt} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {MdLocationPin} from 'react-icons/md';
import {BiEnvelope} from 'react-icons/bi';

const Contact = () => {

    return (
      <div style={{background: '#FFF'}}>
        <ActualiteCarousel/>
        <h2 style={{ 'color': '#000', 'padding-top':'70px' }}>CONTACT</h2>
        <Card className={'contact-card'}>
          <div className={'contact-info'}>
            <h4 style={{ 'color': '#000', 'padding-top':'70px', 'text-align':'left', 'padding-left':'20px', }}>ADDRESS</h4>
            <p style={{ 'color': '#000', 'padding-top':'30px', 'text-align':'left', 'padding-left':'20px', }}><MdLocationPin style={{ 'font-size': '30px', 'margin-right':'20px' }}/> Rue 6 . 076 Immeuble El Marzouk Joël  COTONOU</p>
            <p style={{ 'color': '#000', 'padding-top':'30px', 'text-align':'left', 'padding-left':'20px', }}><BiEnvelope style={{ 'font-size': '30px', 'margin-right':'20px' }}/> contact@apdp.bj</p>
            <p style={{ 'color': '#000', 'padding-top':'30px', 'text-align':'left', 'padding-left':'20px', }}><FaPhoneAlt style={{ 'font-size': '30px', 'margin-right':'20px' }}/> (+ 229 ) 21 32 57 88</p>
            <hr style={{ 'margin-top':'150px' }}/>
            <h4 style={{ 'color': '#000', 'padding-top':'10px', 'text-align':'left', 'padding-left':'20px', }}>Rejoignez-nous</h4>
            <FaFacebook style={{ 'font-size':'20px', 'color': '#2289FF', 'margin-top':'10px', 'float':'left', 'margin-left':'20px', }}/>
            <AiFillTwitterCircle style={{ 'font-size':'20px', 'color': '#2289FF', 'margin-top':'10px', 'float':'left', 'margin-left':'20px', }}/>
            <FaYoutube style={{ 'font-size':'20px', 'color': '#FF0000', 'margin-top':'10px', 'float':'left', 'margin-left':'20px', }}/>
            <p style={{ 'color': '#000', 'padding-top':'30px', 'text-align':'left', 'padding-left':'20px', 'font-size':'12px' }}>Ne ratez pas l'actualité de l'APDP en temps réel sur nos réseaux sociaux.</p>
          </div>
          <Card.Body>
            <Card.Text>
              <Form className={'contact-form'}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label style={{ 'text-transform':'uppercase', 'font-size':'20px' }}>Formulaire de contact</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                  {/* <Form.Label>Nom</Form.Label> */}
                  <br/>
                  <Form.Control type="text" placeholder="Nom &amp; Prénoms" />
                  <br/>
                  {/* <Form.Label>E-mail</Form.Label> */}
                  <Form.Control type="email" placeholder="E-mail" />
                  <br/>
                  {/* <Form.Label>Site web</Form.Label> */}
                  <Form.Control type="text" placeholder="Sujet" />
                  <br/>
                  {/* <Form.Label>Commentaire</Form.Label> */}
                  <Form.Control as="textarea" placeholder="Message" style={{ height: '100px' }}/>
                </Form.Group>
                <Button variant="warning" type="submit" style={{ 'color': 'white', 'width': '100%' }}>
                  Envoyer
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62132566.93361422!2d-18.583534287258896!3d18.105275595040176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023550afe0504a5%3A0xd56e57390d94c333!2sAPDP%20B%C3%A9nin!5e0!3m2!1sfr!2sci!4v1644769515144!5m2!1sfr!2sci"
          width="92%"
          height="250"
          frameBorder="0"
          style={{ border: 0, margin:20, background: '#4385F6 0% 0% no-repeat padding-box', }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    )
}

export default Contact;
