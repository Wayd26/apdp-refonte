import React, { useState, useEffect } from 'react';
import "./GlobalResearch.css";
import { Card, Button, Tab, Row, Nav, Form, InputGroup } from "react-bootstrap";
import img5 from '../../assets/images/img5.jpg'
import img8 from '../../assets/images/img8.png'
import { GiInjustice } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getAllArticles, getArticlesResearched, getATypeOfArticles } from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';


const GlobalResearch = () => {
  const navigate = useNavigate()

  const [articlesResearched, setArticlesResearched] = useState([]);
  const [searchText, setSearchText] = useState("empty");
  const [perPage, setPerPage] = useState(15);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    setPageNumber(currentPage)
    console.log("ok ", selected + 1)
  }
  useEffect(() => {
    if(searchText != "empty") {
      loadResultsData(1, searchText)
      console.log("Recherche data searchText changed", articlesResearched)
    } else {
      loadResultsData(1, "")
    }
  }, [searchText])

  useEffect(() => {
    if(searchText == "empty") {

      loadResultsData(pageNumber, "")
    } else {
      loadResultsData(pageNumber, searchText)

    }
    console.log("Recherche data page Number change", articlesResearched)
  }, [pageNumber])

  const loadResultsData = async (page, text) => {
    const response = await getArticlesResearched(text, page)
    if(response.response && response.response.status !== 200) {
      console.log("Error Searched", response.response)
    } else {
      console.log("Data Searched", response)
      const perPageValue = response?.data?.per_page
      setPerPage(perPageValue)
      const total = response?.data?.total;
      setTotalPage(Math.ceil(total / perPageValue))
      setArticlesResearched(response.data?.data)
    }
  }

  const handleSearch = (e) => {
    console.log(e.target.value)
    if(e.target.value == "") {
      setSearchText("empty")
    } else {
      setSearchText(e.target.value)
    }
  }

  return (
    <div style={{ background: '#E2E2E2', paddingTop: "40px", paddingBottom: "40px" }}>
      {/* <ActualiteCarousel/> */}
      {/* <Breadcrumb>
          <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Documentation</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Textes Nationaux</Breadcrumb.Item>
          <Breadcrumb.Item active>Décisions publiques</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className={'deliberations-div'}>
        <h3>Rechercher une information</h3>

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

              <InputGroup>
              <Form.Control value={searchText == "empty" ? "" : searchText} onChange={(e) => handleSearch(e)} type="text" placeholder="Saisissez des mots ici..." className='deliberation-search-input' />
        <InputGroup.Text>
        
                    <BiSearchAlt title='Rechercher globalement sur le site'  style={{ height: 25, width: 40, color: 'black' }} />
        </InputGroup.Text>

      </InputGroup>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {/* <h3 style={{ 'text-transform': 'uppercase', 'text-align': 'left', marginBottom: "30px"}}>DéLIBéRATIONS 2022 (nombre: 04)</h3> */}
                  <div className={'pane-cards mb-5'}>
                    {articlesResearched.length != 0 ? articlesResearched
                      .map((result, index) =>
                        <Card key={index + "w"} style={{ 'text-align': 'left', }}>
                          <Card.Body>
                            <Card.Title style={{ 'font-weight': 'bold', }}>{result.title}</Card.Title>
                            <Card.Text style={{ 'margin-top': '30px', 'margin-bottom': '30px' }}>
                              <div dangerouslySetInnerHTML={{ __html: (result?.content) }}></div>
                            </Card.Text>
                            {/* <a href={result.image_url} download> */}
                              <Button variant="outline-primary" onClick={() => navigate(`/recherche-globale/${result.id}/${pageNumber}/${searchText}`)} style={{ 'float': 'right' }}> Lire plus</Button>
                            {/* </a> */}
                          </Card.Body>
                        </Card>
                      ) : <h1> Aucun résultat </h1>
                    }


                  </div>
                    {articlesResearched && articlesResearched?.length !== 0 && <Pagination
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

export default GlobalResearch;
