import React, {useState, useEffect} from 'react';
import "./Deliberations.css";
import {Card, Button, Tab, Row, Nav} from "react-bootstrap";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import { GiInjustice } from 'react-icons/gi'; 
import { FaDownload } from 'react-icons/fa';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {getATypeOfArticles} from '../../http/http';


const Deliberations = () => {

  const [deliberations, setDeliberations] = useState();

  const loadDeliberationsData = async () => {
      const resp = await getATypeOfArticles("deliberations")
      if(resp.response && resp.response.status !== 200){
          console.log("error ",resp.response)
      } else {
          console.log("data ",resp.data.data)
          setDeliberations(resp.data.data)
      }
  }
  
  useEffect(() => {
      loadDeliberationsData()        
  }, [])

    return (
      <div style={{background: '#E2E2E2', paddingTop: "40px", paddingBottom: "40px"}}>
        {/* <ActualiteCarousel/> */}
        <div className={'deliberations-div'}>
          <h2>DÉLIBÉRATIONS PUBLIQUES</h2>
          <Tab.Container id="top-tabs-example" defaultActiveKey="first">
            <Row>
              <div className={'row'}>
                {/* <Nav variant="pills" className="flex-row">
                  <Nav.Item style={{cursor: "pointer"}}>
                    <Nav.Link eventKey="first"> <GiInjustice/> ANNEE 2022</Nav.Link>
                  </Nav.Item>
                  <Nav.Item style={{cursor: "pointer"}}>
                    <Nav.Link eventKey="second"> <GiInjustice/> ANNEE 2021</Nav.Link>
                  </Nav.Item>
                </Nav> */}
              </div>
              <Row>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {/* <h3 style={{ 'text-transform': 'uppercase', 'text-align': 'left', marginBottom: "30px"}}>DéLIBéRATIONS 2022 (nombre: 04)</h3> */}
                    <div className={'pane-cards'}>
                    {deliberations?.length !== 0 ? <>{deliberations?.map((deliberation, index) =>
               <Card style={{'text-align': 'left',}}>
               <Card.Body>
                 <Card.Title style={{'font-weight': 'bold',}}>{deliberation.title}</Card.Title>
                 <Card.Text style={{'margin-top': '30px', 'margin-bottom': '30px'}}>
                 <div dangerouslySetInnerHTML={{__html: (deliberation?.content)}}></div>
                 </Card.Text>
                 <Button variant="outline-primary" style={{ 'float':'right' }}><FaDownload/> Télécharger</Button>
               </Card.Body>
             </Card> 
                )}</> : <h1> Aucune Délibération </h1> 
                }
                    
                    </div>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="second">
                    <h3 style={{ 'text-transform': 'uppercase', 'text-align': 'left' }}>DéLIBéRATIONS 2021 (nombre: 02)</h3>
                    <div className={'pane-cards'}>
                      <Card style={{'text-align': 'left',}}>
                        <Card.Body>
                          <Card.Title style={{'font-weight': 'bold',}}>Délibération n°2021-010/AT/APDP du 20 Mai 2021</Card.Title>
                          <Card.Text style={{'margin-top': '30px', 'margin-bottom': '30px'}}>
                          portant autorisation de traitement, d'interconnexion et de transfert des données personnelles alphanumériques et sensibles des salariés de Banque Atlantique et des membres de leurs familles vers le Maroc dans le cadre de la gestion des Ressources Humaines.
                          </Card.Text>
                          <Button variant="outline-primary" style={{ 'float':'right' }}><FaDownload/> Télécharger</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane> */}
                </Tab.Content>
              </Row>
            </Row>
          </Tab.Container>
        </div>
      </div>
    )
}

export default Deliberations;
