import React, { useState, useEffect } from 'react';
import "./Deliberations.css";
import { Card, Button, Tab, Row, Nav, Form } from "react-bootstrap";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import { GiInjustice } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles } from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Deliberations = () => {

  const [deliberations, setDeliberations] = useState([]);
  const [searchText, setSearchText] = useState("");

  const loadDeliberationsData = async () => {
    const resp = await getATypeOfArticles("decisions")
    if (resp.response && resp.response.status !== 200) {
      console.log("error ", resp.response)
    } else {
      console.log("data ", resp.data.data)
      setDeliberations(resp.data.data)
    }
  }

  useEffect(() => {
    loadDeliberationsData()
  }, [])

  const searchFunction = (rows, search) => {
    const columns = rows[0] && Object.keys(rows[0])
    return rows.filter((row) =>
      columns.some(
        (column) => row[column]?.toString().toLowerCase().indexOf(search?.toString().toLowerCase()) > -1));
  }

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <div style={{ background: '#E2E2E2', paddingTop: "40px", paddingBottom: "40px" }}>
      {/* <ActualiteCarousel/> */}
      <Breadcrumb>
          <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Documentation</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Textes Nationaux</Breadcrumb.Item>
          <Breadcrumb.Item active>Décisions publiques</Breadcrumb.Item>
      </Breadcrumb>
      <div className={'deliberations-div'}>
        <h2>DÉCISIONS PUBLIQUES</h2>

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
              <Form.Control value={searchText} onChange={(e) => handleSearch(e)} type="text" placeholder="Rechercher..." className='deliberation-search-input' />
              
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* <h3 style={{ 'text-transform': 'uppercase', 'text-align': 'left', marginBottom: "30px"}}>DéLIBéRATIONS 2022 (nombre: 04)</h3> */}
                  <div className={'pane-cards'}>
                    {deliberations.length != 0 ? deliberations
                      .filter((q) => {
                        return q.title?.toLowerCase()?.indexOf(searchText?.toLowerCase()) > -1
                      })
                      .map((deliberation, index) =>
                        <Card style={{ 'text-align': 'left', }}>
                          <Card.Body>
                            <Card.Title style={{ 'font-weight': 'bold', }}>{deliberation.title}</Card.Title>
                            <Card.Text style={{ 'margin-top': '30px', 'margin-bottom': '30px' }}>
                              <div dangerouslySetInnerHTML={{ __html: (deliberation?.content) }}></div>
                            </Card.Text>
                            <a href={deliberation.image_url} download>
                              <Button variant="outline-primary" style={{ 'float': 'right' }}><FaDownload /> Télécharger</Button>
                            </a>
                          </Card.Body>
                        </Card>
                      ) : <h1> Aucune Délibération </h1>
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
    </div >
  )
}

export default Deliberations;
