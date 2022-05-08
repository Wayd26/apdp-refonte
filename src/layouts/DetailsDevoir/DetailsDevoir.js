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
            console.log("data data ", resp.data.data)
                let element ; 
                resp.data?.data?.map(elt => {
                    if(elt.id == devoir_id) {
                        console.log(elt)
                        setDevoirData(elt)
                } else {
                    return false
                } 
            })

        }
    }

    return (
        <div id="details-droit" className="details-devoir" style={{background: '#E2E2E2', paddingBottom: "40px", paddingTop: "40px"}}>
            <p className="details-devoir-title mt-4">Vos Devoirs</p>
            <div className="details-devoir-image-container mx-auto mt-4">
                <img src={devoirData?.image_url} className="details-devoir-image"/>
            </div>
            <div className="details-devoir-text-container mx-auto">
                <p className="details-devoir-text-title">{devoirData?.title}</p>
                <p className="details-devoir-text-subtitle">{devoirData?.sub_title}</p>
                <p className="details-devoir-text-content" dangerouslySetInnerHTML={{__html: (devoirData?.content)}}></p>
            </div>
        </div>
    )
}

export default DetailsDevoir;
 