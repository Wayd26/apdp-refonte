import React, {useEffect, useState} from 'react';
import "./DetailsActivite.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {BiCalendarCheck} from "react-icons/bi";
import imgCard5 from "../../assets/images/img5.jpg";
import imgCard6 from "../../assets/images/img6.jpg";
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import pdfFile from "../../assets/images/pdf_file.jpeg";
import {FiDownload} from "react-icons/fi";


const DetailsActivite = () => {

    let { activity_id } = useParams();
    const [activityData, setActivityData] = useState();

    useEffect(() => {
        loadActivitiyData();
    }, [activity_id])

     const loadActivitiyData = async () => {
        const resp = await getATypeOfArticles("activites")
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
                let element = resp.data.data.filter(elt => {
                    if(elt.id == activity_id) {
                    return elt
                } else {
                    return false
                } 
            })
                setActivityData(element)
        }
    }

    return (  
        <div id="details-activities" className="details-activities m-auto">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Activités</Breadcrumb.Item>
                <Breadcrumb.Item active>Détails</Breadcrumb.Item>
            </Breadcrumb>
        {/* <ActualiteCarousel /> */}
        <br/>
        <br/>
        <br/>
        <br/>
       <div className="row d-flex">
        <div className="details-activities-cards-container">
           {/* Start Details activity card */}
           <div id="activity-card" className="activity-card">
            <img src={activityData && activityData[0]?.image_url} className="activity-card-img"/>
            <p className="activity-card-title">{activityData && activityData[0]?.title}</p>
            <p className="activity-card-date"><BiCalendarCheck /> {activityData && activityData[0]?.created_at.slice(8,10)} / {activityData && activityData[0]?.created_at.slice(5,7)} / {activityData && activityData[0]?.created_at.slice(0,4)} </p>
            {/* <p className="details-activity-card-subtitle">{activityData && activityData[0]?.content}</p> */}
            <p className="details-activity-card-subtitle">
            <div dangerouslySetInnerHTML={{__html: (activityData && activityData[0]?.content)}}></div>
                
                </p>
                <a href={activityData && activityData[0]?.document_url[0]} download>
              <button className="espace-rt-card-button">Télécharger <FiDownload className="espace-rt-card-button-icon" /></button>
              </a>
            
        </div>
            
        </div>

       
       </div>

    </div>
    )
}

export default DetailsActivite
