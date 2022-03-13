import React, { useState, useEffect } from 'react';
import ArreteRow from '../../components/ArreteRow/ArreteRow';
import "./Arretes.css"
import {getATypeOfArticles} from '../../http/http';


const Arretes = () => {

  const [arretes, setArretes] = useState();

  const loadArretesData = async () => {
      const resp = await getATypeOfArticles("arretes")
      if(resp.response && resp.response.status !== 200){
          console.log("error ",resp.response)
      } else {
          console.log("data ",resp.data.data)
          setArretes(resp.data.data)
      }
  }
  
  useEffect(() => {
      loadArretesData()        
  }, [])

  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="arretes-container">
          <p className="arretes-title">ARRÈTÉS</p>
          <div className="arretes-rows-container">
          {arretes ? <>{arretes.map((arrete, index) =>
                <ArreteRow data={arrete} /> )}</> : <h1> Aucun Arrêté </h1> 
                }
         </div>
      </div>
  </div>;
};

export default Arretes;
