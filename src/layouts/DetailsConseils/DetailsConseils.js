import React, {useState, useEffect} from 'react'
import "./DetailsConseils.css";
import img5 from "../../assets/images/img5.jpg";
import BesoinAide from '../../components/BesoinAide/BesoinAide';
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';


const DetailsConseils = () => {

    let { conseil_id } = useParams();
    const [conseilData, setConseilData] = useState();

    useEffect(() => {
        loadConseilData();
    }, [conseil_id])

     const loadConseilData = async () => {
        const resp = await getATypeOfArticles("recommandations")
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            // console.log("data data ", resp.data.data)
            let element = resp.data.data.filter(elt => {
                if(elt.id === conseil_id) {
                return elt
            } else {
                return false
            } 
        })
            setConseilData(element)
        }
    }


    return (
        <div id="details-releases" className="details-releases mx-auto">
        {/* <ActualiteCarousel /> */}
        <p className="details-releases-title">{conseilData && conseilData[0]?.title}</p>
        <hr className="details-release-hr"></hr>
       <div className="row d-flex">

        <div className="details-releases-cards-container">
           {/* Start Details release card */}
           <div id="release-card" className="release-card">
                <img src={conseilData && conseilData[0]?.image[0]} className="release-card-img"/>
                <p className="release-card-title">{conseilData && conseilData[0]?.sub_title}</p>
                <p className="release-card-date"><BiCalendarCheck /> {conseilData && conseilData[0]?.created_at.slice(8,10)} / {conseilData && conseilData[0]?.created_at.slice(5,7)} / {conseilData && conseilData[0]?.created_at.slice(0,4)}  </p>
                <p className="details-release-card-subtitle">
                <div dangerouslySetInnerHTML={{__html: (conseilData && conseilData[0]?.content)}}></div>
                </p>
            </div>
           {/* End Details release card */}
            
        </div>
        {/* <div className="details-releases-others-container">
            <p className="popular-activities-title">Activités Populaires</p>
            <hr className="popular-activities-hr"></hr> */}
            {/* Start Popular Activites */}
            {/* <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div> */}

            {/* End Popular Activities */}
            {/* Start Categories */}
            {/* <p className="categories-title">Catégories</p>
            <hr className="categories-hr"></hr>
            <p className="categories-items">Lorem ipsum(13)</p>
            <p className="categories-items">Lorem ipsum(5)</p>
            <p className="categories-items">Lorem ipsum(8)</p>
            <p className="categories-items">Lorem ipsum(11)</p>
            <p className="categories-items">Lorem ipsum(7)</p> */}
            {/* End Categories */}
           
        {/* </div> */}
       </div>

       {/* <FaqSection /> */}
    </div>
    )
}

export default DetailsConseils
