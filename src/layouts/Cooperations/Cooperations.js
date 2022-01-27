import React from 'react';
import "./Cooperations.css";
import {Card} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const Cooperations = () => {

    return (
      <div style={{background: '#FFF'}}>
        <ActualiteCarousel/>
        <div className={'cooperations-div'} style={{ 'padding-bottom': '100px' }}>
          <h2 style={{ 'color': '#4385F6', 'margin': '100px' }}>COOPÉRATION</h2>
          <div className={'cooperations-cards row'} style={{ 'margin': '100px', 'justify-content': 'center', }}>
            <Card className={"cooperations-card col-md-6 col-lg-4 col-xl-4"} style={{ width: '20rem', padding: '30px', 'border-radius': '10px' }}>
              <Card.Body>
                <Card.Title style={{ 'font-size': '25px', 'font-weight': 'bold', 'padding-top': '50px', 'padding-bottom': '50px' }}>Bilatérales</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className={"cooperations-card col-md-6 col-lg-4 col-xl-4"} style={{ width: '20rem', padding: '30px', 'border-radius': '10px' }}>
              <Card.Body>
                <Card.Title style={{ 'font-size': '25px', 'font-weight': 'bold', 'padding-top': '50px', 'padding-bottom': '50px' }}>Régionales</Card.Title>
                <Card.Text style={{ 'font-size':'12px', 'text-align': 'justify' }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className={"cooperations-card col-md-6 col-lg-4 col-xl-4"} style={{ width: '20rem', padding: '30px', 'border-radius': '10px' }}>
              <Card.Body>
                <Card.Title style={{ 'font-size': '25px', 'font-weight': 'bold', 'padding-top': '50px', 'padding-bottom': '50px' }}>Internationales</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )
}

export default Cooperations;
