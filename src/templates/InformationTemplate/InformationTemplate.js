import React, { useEffect, useState } from 'react'
import "./InformationTemplate.css";
import img5 from "../../assets/images/img5.jpg";
import presi_apdp from "../../assets/images/President_apdp.png";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import { getATypeOfArticles } from '../../http/http';

const InformationTemplate = () => {

    const { menu } = useParams()

    const navigate = useNavigate()

    const [article, setArticle] = useState([]);
    const [perPage, setPerPage] = useState(15);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(1);



    const changePage = ({ selected }) => {
        let currentPage = selected + 1;
        setPageNumber(currentPage)
        console.log("ok ", selected + 1)
    }


    useEffect(() => {
        loadArticlesData();
        console.log("Articles data load", article)
    }, [pageNumber, menu])

    const loadArticlesData = async () => {
        console.log("subMenu load", menu)
        const resp = await getATypeOfArticles(menu, pageNumber)
        if (resp.response && resp.response.status !== 200) {
            console.log("data error ", resp.response)
        } else {
            console.log("data data load", resp.data)
            const perPageValue = resp?.data?.meta?.per_page
            setPerPage(perPageValue)
            const total = resp?.data?.meta?.total;
            setTotalPage(Math.ceil(total / perPageValue))

            setArticle(resp.data.data[0])
        }
    }    

    return (
        <div>
            <div class="actuality__item-template__header">{menu.includes("_") ? menu.replaceAll("_", " ").toUpperCase() : menu.toUpperCase()}</div>
            <div class="actuality__item-template__content">
                {article?.image_url && <img src={article && article?.image_url} alt="" />}

                <div class="text-content">
                    <div class="actuality__item__title">{article && article?.title}</div>
                    <div class="actuality__item__subtitle-content">
                        <div class="actuality__item__subtitle">{article && article?.sub_title}</div>
                    </div>
                    <div class="actuality__item__description" dangerouslySetInnerHTML={{__html: (article && article?.content)}}>
                    </div>
                    <button onClick={() => navigate(`/`)} className="actuality__item__button">Retour</button>
                </div>
            </div>
        </div>
    )
}

export default InformationTemplate