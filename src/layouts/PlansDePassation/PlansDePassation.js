import React, {useState, useEffect} from 'react';
import "./PlansDePassation.css";
import pdf from '../../assets/images/pdf.png'
import doc from '../../assets/documents/CODE_DU_NUMERIQUE_DU_BENIN_EDITION 2019_ADN.pdf';
import {Carousel, Card, Button, ButtonGroup, Accordion} from "react-bootstrap";
import { RiQuestionAnswerFill, RiEyeFill, RiArrowRightCircleFill } from "react-icons/ri";
import {FaRegFilePdf, FaRegFileExcel} from "react-icons/fa";
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {getATypeOfArticles} from '../../http/http';
import Pagination from '../../components/Pagination/Pagination';


const PlansDePassation = () => {
    const [plansDePassation, setPlansDePassation] = useState();
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }
    useEffect(() => {
        loadPlansDePassationData();
        console.log("Plans de passation data ", plansDePassation)
    }, [pageNumber])


    const loadPlansDePassationData = async () => {
        const resp = await getATypeOfArticles("plans-de-passation", pageNumber)
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setPlansDePassation(resp.data)
        }
    }
 

    return (
        <div className={"inheritance-plan"} id={"inheritance-plan"}>
            
            <div style={{ display:'flex', alignItems:'center', flexDirection:'column' }}>
                <h4 style={{color: 'white', marginTop: '100px', marginBottom: '0px', backgroundColor: '#4385F6', width: '98%', padding: '20px',}}>PLANS DE PASSATION</h4>
                {/* inheritance-plan list 1 */}
                <div className={"inheritance-plan-card-list row text-align left"}>
                    <Card className={"inheritance-plan-card col-md-6 col-lg-4 col-xl-4"}>
                        <Card.Body>
                        <div className={"inheritance-plan-card-img rounded-circle"} id={"inheritance-plan-card-img rounded-circle"}>
                            <FaRegFileExcel style={{fontSize: '150px', position: 'relative', top: '20px', color: 'green', }}/>
                        </div>
                            <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>PLAN PREVISIONNEL DE PASSATION DES MARCHÉS PUBLICS</Card.Title>
                            <Card.Text style={{textAlign: 'center', fontSize: '10px', color: '#2E2E2E', fontWeight: 'normal', margin: '20px'}}>
                            Marché de fournitures, travaux, services courants et prestations intellectuelles
                            </Card.Text>
                            <a href={doc} download="PDF.pdf">
                                <Button variant="light" style={{ width: '50%', fontSize: '15px', backgroundColor: '#FFF', borderRadius: '24px', color:'#727C8E', marginBottom: '20px', }}>
                                    Télécharger <RiArrowRightCircleFill  style={{ width: '25px', height: '25px', marginLeft: '0px', position: 'relative', right: '-10px', color: '#FFBE00',}}/>
                                </Button>
                            </a>
                        </Card.Body>
                    </Card>

                   
                </div>
                {plansDePassation && plansDePassation?.length !== 0 &&   <Pagination
                changePage={changePage}
                pageCount={totalPage}
                perPage={perPage}
            />} 
            </div>
        </div>
    )
}

export default PlansDePassation;
