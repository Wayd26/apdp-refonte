import React, {useState, useEffect} from 'react';
import "./DetailsDevoir.css"
import rester_informe from "../../assets/icons/rester_informe.png"
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';


const DetailsDevoir = (props) => {

    let { devoir_id } = useParams();
    const [devoirData, setDevoirData] = useState();

    useEffect(() => {
        loadDevoirData();
    }, [devoir_id])

    
    const loadDevoirData = async () => {
        const resp = await getATypeOfArticles("devoirs")
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            // console.log("data data ", resp.data.data)
                let element = resp.data.data.filter(elt => {
                    if(elt.id == devoir_id) {
                    return elt
                } else {
                    return false
                } 
            })
                setDevoirData(element)
        }
    }

    return (
        <div id="details-droit" className="details-devoir" style={{background: '#E2E2E2', paddingBottom: "40px", paddingTop: "40px"}}>
            <p className="details-devoir-title mt-4">Vos Devoirs</p>
            <div className="details-devoir-image-container mx-auto mt-4">
                <img src={devoirData && devoirData[0]?.image[0]} className="details-devoir-image"/>
            </div>
            <div className="details-devoir-text-container mx-auto">
                <p className="details-devoir-text-title">{devoirData && devoirData[0]?.title}</p>
                <p className="details-devoir-text-subtitle">{devoirData && devoirData[0]?.sub_title}</p>
                <p className="details-devoir-text-content" dangerouslySetInnerHTML={{__html: (devoirData && devoirData[0]?.content)}}></p>
            </div>
        </div>
    )
}

export default DetailsDevoir;
 