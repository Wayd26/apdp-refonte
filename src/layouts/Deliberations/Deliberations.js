import React, { useState, useEffect } from 'react';
import "./Deliberations.css";
import { Card, Button, Tab, Row, Nav, Form } from "react-bootstrap";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import { GiInjustice } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles } from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Deliberations = () => {

  const [deliberations, setDeliberations] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [perPage, setPerPage] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    setPageNumber(currentPage)
    console.log("ok ", selected + 1)
  }
  useEffect(() => {
    loadDeliberationsData()
    console.log("decisions data ", deliberations)
  }, [pageNumber])

  const loadDeliberationsData = async () => {
    const resp = await getATypeOfArticles("decisions", pageNumber)
    if (resp.response && resp.response.status !== 200) {
      console.log("error ", resp.response)
    } else {
      console.log("data ", resp.data.data)
      const perPageValue = resp?.data?.meta?.per_page
      setPerPage(perPageValue)
      const total = resp?.data?.meta?.total;
      setTotalPage(Math.ceil(total / perPageValue))

      setDeliberations(resp.data.data)
    }
  }


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
                  <div className={'pane-cards mb-5'}>
                    {deliberations.length != 0 ? deliberations
                      .filter((q) => {
                        return q.title?.toLowerCase()?.indexOf(searchText?.toLowerCase()) > -1
                      })
                      .map((deliberation, index) =>
                        <Card key={index + "w"} style={{ 'text-align': 'left', }}>
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
                    {deliberations && deliberations?.length !== 0 && <Pagination
                      changePage={changePage}
                      pageCount={totalPage}
                      perPage={perPage}
                    />}
                </Tab.Pane>

              </Tab.Content>
            </Row>
          </Row>
        </Tab.Container>
      </div>
    </div >
  )
}

export default Deliberations;
