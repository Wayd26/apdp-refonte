import React, {useState, useEffect} from 'react';
import "./DetailsDroit.css"
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const DetailsDroit = (props) => {

    let { droit_id } = useParams();
    const [droitData, setDroitData] = useState();

    useEffect(() => {
        loadDroitData();
    }, [droit_id])

    
    const loadDroitData = async () => {
        const resp = await getATypeOfArticles("droits")
        if(resp.response && resp.response.status !== 200){
            // console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
                let element ;
                resp.data?.data?.map(elt => {   
                    if(elt.id == droit_id) {
                        console.log("elt")
                        setDroitData(elt)
                } else {
                    console.log("Nooooo")
                    return false
                } 
            })

        }
    }


    
    return (
        <div id="details-droit" className="details-droit">
            {/* <ActualiteCarousel /> */}
            <p className="details-droit-title mt-4">Vos Droits</p>
            {/* <p className="details-droit-small-desc mx-auto mt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ips</p> */}
            <div className="details-droit-image-container mx-auto mt-4">
                <img src={droitData?.image_url} className="details-droit-image"/>
            </div>
            <div className="details-droit-text-container mx-auto">
                <p className="details-droit-text-title">{droitData?.title}</p>
                <p className="details-droit-text-subtitle">{droitData?.sub_title}</p>
                <p className="details-droit-text-content" dangerouslySetInnerHTML={{__html: (droitData && droitData[0]?.content)}}></p>

            </div>
        </div>
    )
}

export default DetailsDroit
 