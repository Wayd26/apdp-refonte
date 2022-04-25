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
            // console.log("data data ", resp.data.data)
                let element = resp.data.data.filter(elt => {
                    if(elt.id === activity_id) {
                    return elt
                } else {
                    return false
                } 
            })
                setActivityData(element)
        }
    }

    return (  
        <div id="details-activities" className="details-activities">
        {/* <ActualiteCarousel /> */}
        <br/>
        <br/>
        <br/>
        <br/>
       <div className="row d-flex">

        <div className="details-activities-cards-container">
           {/* Start Details activity card */}
           <div id="activity-card" className="activity-card">
            <img src={activityData && activityData[0]?.image[0]} className="activity-card-img"/>
            <p className="activity-card-title">{activityData && activityData[0]?.title}</p>
            <p className="activity-card-date"><BiCalendarCheck /> {activityData && activityData[0]?.created_at.slice(8,10)} / {activityData && activityData[0]?.created_at.slice(5,7)} / {activityData && activityData[0]?.created_at.slice(0,4)} </p>
            {/* <p className="details-activity-card-subtitle">{activityData && activityData[0]?.content}</p> */}
            <p className="details-activity-card-subtitle">
            <div dangerouslySetInnerHTML={{__html: (activityData && activityData[0]?.content)}}></div>
                
                </p>
            
        </div>
           {/* End Details activity card */}
            
        </div>
        <div className="details-activities-others-container">
            <p className="popular-activities-title">Activités Populaires</p>
            <hr className="popular-activities-hr"></hr>
            {/* Start Popular Activites */}
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
            </div>
            <div className="row my-3">
                <div className="col-4">
                    <img src={img5} className="popular-activities-img"/>
                </div>
                <div className="col-8">
                    <p className="popular-activities-desc">Eirmod tempor invidunt ut lab ore et dolore magna consetetur sadipscing elitr aliquyam</p>
                </div>
            </div>

            {/* End Popular Activities */}
            {/* Start Categories */}
            <p className="categories-title">Catégories</p>
            <hr className="categories-hr"></hr>
            <p className="categories-items">Lorem ipsum(13)</p>
            <p className="categories-items">Lorem ipsum(5)</p>
            <p className="categories-items">Lorem ipsum(8)</p>
            <p className="categories-items">Lorem ipsum(11)</p>
            <p className="categories-items">Lorem ipsum(7)</p>
            {/* End Categories */}
           
        </div>
       </div>

       {/* <FaqSection /> */}
    </div>
    )
}

export default DetailsActivite
