import React, {useState, useEffect} from 'react';
import "./LaLoi.css";
import {Card, Button, Form,} from "react-bootstrap";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const LaLoi = () => {

    return (
      <div style={{background: '#FFF'}}>
        <ActualiteCarousel/>
        <h2 style={{ 'color': '#4385F6', 'margin-top':'100px' }}>La loi 2009-09 Du 22 MAI 2009</h2>
        <Card className={'law-card'}>
          <Card.Body>
            <Card.Img src={img5} />
            <Card.Text>
            Nous vivons aujourd’hui dans un monde dans lequel l’informatique est omniprésente et manipule abondamment les données personnelles sous toutes ses formes. C’est pour protéger et promouvoir, dans la sphère numérique, les libertés individuelles, le droit à l’intimité, la protection de la vie privée que le BENIN s’est dopté de La loi 2009-09 Du 22 MAI 2009
            <Button variant="primary">Télécharger(Version française)</Button>
            <Button variant="warning">Télécharger(Version anglaise)</Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <br/>
        <br/>
        <br/>
        <br/>

        <Form className={'law-form'}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Laisser un commentaire</Form.Label>
            <br/>
            <Form.Text className="text-muted">
              Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont indiqués avec *
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Commentaire</Form.Label>
            <Form.Control as="textarea" placeholder="Entrez un commentaire" style={{ height: '100px' }}/>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="formBasicInfos">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrez votre nom" />
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Entrez votre e-mail" />
            <Form.Label>Site web</Form.Label>
            <Form.Control type="text" placeholder="Entrez l'adresse de votre site web" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Laisser un commentaire
          </Button>
        </Form>
      </div>
    )
}

export default LaLoi;
