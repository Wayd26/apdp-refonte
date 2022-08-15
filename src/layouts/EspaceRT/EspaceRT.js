import React, {useEffect, useState} from 'react';
import EspaceRtCard from '../../components/EspaceRtCard/EspaceRtCard';
import "./EspaceRT.css";
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import videosurveillance from '../../assets/documents/Modele-de-Registre-des-activites-de-Videosurveillance.xls';
import traitement from '../../assets/documents/Registre-des-activites-de-traitement.xls';

const EspaceRT = () => {
    const [espaceRt, setEspaceRt] = useState();

    // const loadCommuniquesData = async () => {
    //     const resp = await getATypeOfArticles("communiques")
    //     if(resp.response && resp.response.status !== 200){
    //         console.log("error ",resp.response)
    //     } else {
    //         console.log("data ",resp.data.data)
    //         setCommuniques(resp.data)
    //     }
    // }
    
    useEffect(() => {
        // loadCommuniquesData()        
    }, [])
    const espaceRtData = [
        {id: 1,
        label: "Modèle de registre des activités de Videosurveillance",
        file: videosurveillance
    },
        {id: 2,
        label: "Registre des activites de traitement",
        file: traitement}
    ]

  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="espace-rt-container">
          <p className="espace-rt-title">ESPACE RT</p>
          <div className="espace-rt-cards-container row d-flex ">
          {espaceRtData.map((item, index) => (

              <div key={index} className="col-sm-4 col-xs-12">
              <EspaceRtCard label={item.label} file={item.file} />
              </div>
          ))}
          </div>
      </div>
  </div>;
};

export default EspaceRT;
