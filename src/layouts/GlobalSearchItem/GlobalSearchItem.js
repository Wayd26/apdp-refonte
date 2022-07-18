import React, {useEffect, useState} from 'react';
import "./GlobalSearchItem.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {BiCalendarCheck} from "react-icons/bi";
import imgCard5 from "../../assets/images/img5.jpg";
import imgCard6 from "../../assets/images/img6.jpg";
import {useParams} from "react-router-dom";
import {getArticlesResearched, getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const GlobalSearchItem = () => {

    let { recherche_id, search_text, page } = useParams();
    const [resultData, setResultData] = useState();

    useEffect(() => {
        loadResultData();
    }, [recherche_id])

     const loadResultData = async () => {
        let searchedText = "";
        if (search_text !== "empty") {
            searchedText = search_text
        }
        const resp = await getArticlesResearched(searchedText, page)
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            console.log("data data Searched", resp.data.data)
                let element = resp.data.data.filter(elt => {
                    if(elt.id == recherche_id) {
                    return elt
                } else {
                    return false
                } 
            })
                setResultData(element)
        }
    }

    return (  
        <div id="details-activities" className="details-activities m-auto">
             <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="/recherche-globale">Recherche Globale</Breadcrumb.Item>
                {/* <Breadcrumb.Item href="#">Activités</Breadcrumb.Item> */}
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
            {/* <img src={resultData && resultData[0]?.image_url} className="activity-card-img"/> */}
            <p className="activity-card-title pt-4">{resultData && resultData[0]?.title}</p>
            <p className="activity-card-date"><BiCalendarCheck /> {resultData && resultData[0]?.created_at.slice(8,10)} / {resultData && resultData[0]?.created_at.slice(5,7)} / {resultData && resultData[0]?.created_at.slice(0,4)} </p>
            {/* <p className="details-activity-card-subtitle">{activityData && activityData[0]?.content}</p> */}
            <p className="details-activity-card-subtitle">
            <div dangerouslySetInnerHTML={{__html: (resultData && resultData[0]?.content)}}></div>
                
                </p>
            
        </div>
          
            
        </div>

       
       </div>

    </div>
    )
}

export default GlobalSearchItem
