import React, { useState, useEffect } from 'react';
import "./Communiques.css";
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import FaqSection from '../../components/FaqSection/FaqSection';
import { Carousel, Card, Figure, Button, ButtonGroup, Accordion } from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import { getATypeOfArticles } from '../../http/http';
import { useNavigate } from "react-router-dom";
import { RiCalendar2Line, RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill } from "react-icons/ri";
import Pagination from '../../components/Pagination/Pagination';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Communiques = () => {

    const [communiques, setCommuniques] = useState([]);
    const navigate = useNavigate()
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
        loadCommuniquesData()
        console.log("Arretes data ", communiques)
    }, [pageNumber])

    const handleMoreClicked = (id) => {
        navigate(`/communique/${id}`)
    }

    const loadCommuniquesData = async () => {
        const resp = await getATypeOfArticles("communiques", pageNumber)
        if (resp.response && resp.response.status !== 200) {
            console.log("error ", resp.response)
        } else {
            console.log("data ", resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setCommuniques(resp.data.data)
        }
    }

    return (
        <div className={"releases"} id={"releases"}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
                <Breadcrumb.Item active>Communiqués et Newsletters</Breadcrumb.Item>
            </Breadcrumb>
            <p className={'page-title'}>COMMUNIQUES ET NEWSLETTERS</p>
            {/* <p className={'page-subtitle'}>Lorem ipsum dolor sit amet, consetetur sadipsiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p> */}
            <div className={'releases-section'} id={'releases-section'}>
                {/* Releases card list */}
                <div className={"releases-first-section"} id={"releases-first-section"}>
                    {communiques && communiques.map((communique, index) =>
                    (<><Card key={index} className={"releases-card"}>
                        <div className={'releases-card-image-div'} id={'releases-card-image-div'} style={{ "backgroundImage": `url(${communique?.image_url})` }}>
                        </div>
                        <Card.Body>
                            <Card.Text className={"release-card-text"}>
                                <p className={"release-card-title"}>{communique.title}</p>
                                <p className={"release-card-subtitle"}>{communique.sub_title}</p>
                                {/* <a href="/communique/details-1" className={"release-card-link"}>Lire plus</a> */}
                                <Button onClick={() => handleMoreClicked(communique.id)} variant="light" style={{ width: '100px', fontSize: '8px', backgroundColor: '#FFF', borderRadius: '24px', float: 'right', }}>
                                    LIRE PLUS <RiArrowRightCircleFill style={{ width: '25px', height: '25px', marginLeft: '0px', position: 'relative', right: '-10px', color: '#FFBE00', }} />
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                        <br />
                    </>)
                    )
                    }
                </div>
                {communiques && communiques?.length !== 0 && <Pagination
                    changePage={changePage}
                    pageCount={totalPage}
                    perPage={perPage}
                />}

            </div>


        </div>
    )
}

export default Communiques;