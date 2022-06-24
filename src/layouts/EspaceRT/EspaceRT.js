import React, {useEffect, useState} from 'react';
import EspaceRtCard from '../../components/EspaceRtCard/EspaceRtCard';
import "./EspaceRT.css";
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const EspaceRT = () => {
    const [communiques, setCommuniques] = useState();

    const loadCommuniquesData = async () => {
        const resp = await getATypeOfArticles("communiques")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setCommuniques(resp.data)
        }
    }
    
    useEffect(() => {
        loadCommuniquesData()        
    }, [])
    const espaceRtData = [
        {id: 0,
        label: "GROUPE CIC"},
        {id: 1,
        label: "PARTICULIERS"},
        {id: 2,
        label: "PROFESSIONNELS"},
        {id: 3,
        label: "ENTREPRISES"},
        {id: 4,
        label: "CORPORATE"},
        {id: 5,
        label: "ASSOCIATIONS"}
    ]

  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="espace-rt-container">
          <p className="espace-rt-title">ESPACE RT</p>
          <div className="espace-rt-cards-container row d-flex ">
          {espaceRtData.map((item, index) => (

              <div key={index} className="col-sm-4 col-xs-12">
              <EspaceRtCard label={item.label} />
              </div>
          ))}
          </div>
      </div>
  </div>;
};

export default EspaceRT;
