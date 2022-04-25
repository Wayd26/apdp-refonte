import React, {useState, useEffect} from 'react';
import "./LaLoi.css";
import {Card, Button, Form,} from "react-bootstrap";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';

const LaLoi = () => {

  let { loi_id } = useParams();
    const [loiData, setLoiData] = useState();


    useEffect(() => {
      loadLoiData();
  }, [loi_id])

   const loadLoiData = async () => {
      const resp = await getATypeOfArticles("lois")
      if(resp.response && resp.response.status !== 200){
          // console.log("data error ", resp.response)
      } else {
          // console.log("data data ", resp.data.data)
          let element = resp.data.data.filter(elt => {
              if(elt.id === loi_id) {
              return elt
          } else {
              return false
          } 
      })
          setLoiData(element)
      }
  }
 

    return (
      <div style={{background: '#FFF'}}>
        <h2 style={{ 'color': '#4385F6', 'padding-top':'70px' }}>{loiData && loiData[0].title}</h2>
        <Card className={'law-card'}>
          <Card.Body>
            <Card.Img src={loiData && loiData[0]?.image[0]} />
            <Card.Text>
            I <div dangerouslySetInnerHTML={{__html: (loiData && loiData[0]?.content)}}></div>
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
