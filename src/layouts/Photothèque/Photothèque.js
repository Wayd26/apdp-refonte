import React, {useState, useEffect} from 'react';
import "./Photothèque.css";
import PhotothequeCard from "../../components/PhotothèqueCard/PhotothèqueCard"
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Photothèque = () => {

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
    
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "50px", paddingBottom: "50px"}}>
    <div className="phototheque-title">Photothèque</div>
    <div className="phototheque-cards-container row">
      {
        [0,1,2,3,4,5,6,7,8].map((item, index) => (
          

          <div className="col-sm-4 col-xs-12">
            <PhotothequeCard />
          </div>

        ))
      }
    </div>
  </div>;
};

export default Photothèque;
