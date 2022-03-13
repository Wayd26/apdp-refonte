import React, { useState, useEffect } from 'react';
import "./MissionDetails.css";
import {useParams} from "react-router-dom";
import {getATypeOfArticles} from '../../http/http';


const MissionDetails = (props) => {

    let { mission_id } = useParams();
    const [missionData, setMissionData] = useState();


    useEffect(() => {
      loadMissionData();
  }, [mission_id])

  const loadMissionData = async () => {
    const resp = await getATypeOfArticles("missions")
    if(resp.response && resp.response.status !== 200){
        // console.log("data error ", resp.response)
    } else {
        // console.log("data data ", resp.data.data)
        let element = resp.data.data.filter(elt => {
            if(elt.id == mission_id) {
            return elt
        } else {
            return false
        } 
    })
        setMissionData(element)
    }
}

    return (
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}} className="">

            <div className="mission-details-box p-3">
                <p className="mission-details-title">{missionData && missionData[0].title} </p>
                <p className="mission-details-text">
                <div dangerouslySetInnerHTML={{__html: (missionData && missionData[0]?.content)}}></div>
                </p>
            </div>
        </div>
    )
}

export default MissionDetails
