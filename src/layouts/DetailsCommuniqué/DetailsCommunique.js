import React, {useState, useEffect} from 'react'
import "./DetailsCommunique.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {FiDownload} from "react-icons/fi";


const DetailsCommunique = () => {

    let { communique_id } = useParams();
    const [communiqueData, setCommuniqueData] = useState();

    useEffect(() => {
        loadCommuniqueData();
    }, [communique_id])

     const loadCommuniqueData = async () => {
        const resp = await getATypeOfArticles("communiques")
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            // console.log("data data ", resp.data.data)
            let element = resp.data.data.filter(elt => {
                if(elt.id == communique_id) {
                return elt
            } else {
                return false
            } 
        })
            setCommuniqueData(element)
        }
    }


    return (
        <div id="details-releases" className="details-releases mx-auto">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Communiqués et Newsletters</Breadcrumb.Item>
                <Breadcrumb.Item active>Détails</Breadcrumb.Item>
            </Breadcrumb>
        {/* <ActualiteCarousel /> */}
        <p className="details-releases-title">{communiqueData && communiqueData[0]?.title}</p>
        <hr className="details-release-hr"></hr>
       <div className="row d-flex">

        <div className="details-releases-cards-container">
           <div id="release-card" className="release-card">
            <img src={communiqueData && communiqueData[0]?.image_url} className="release-card-img"/>
            <p className="release-card-title">{communiqueData && communiqueData[0]?.sub_title}</p>
            <p className="release-card-date"><BiCalendarCheck /> {communiqueData && communiqueData[0]?.created_at.slice(8,10)} / {communiqueData && communiqueData[0]?.created_at.slice(5,7)} / {communiqueData && communiqueData[0]?.created_at.slice(0,4)}  </p>
            <p className="details-release-card-subtitle">
                <div dangerouslySetInnerHTML={{__html: (communiqueData && communiqueData[0]?.content)}}></div>
                </p>
                <a href={communiqueData && communiqueData[0]?.document_url[0]} download>
              <button className="espace-rt-card-button">Télécharger <FiDownload className="espace-rt-card-button-icon" /></button>
              </a>
            
        </div>
        </div>
       </div>

    </div>
    )
}

export default DetailsCommunique
