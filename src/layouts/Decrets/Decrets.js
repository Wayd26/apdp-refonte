import React, {useState, useEffect} from 'react';
import DecretRow from '../../components/DecretRow/DecretRow';
import "./Decrets.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Decrets = () => {
  const navigate = useNavigate();
  const [decrets, setDecrets] = useState([]);

  const loadDecretsData = async () => {
      const resp = await getATypeOfArticles("decrets")
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          setDecrets(resp.data.data)
      }
  }
  
  useEffect(() => {
    loadDecretsData() ;
    console.log("Decrets data ", decrets)       
  }, [])
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <Breadcrumb>
          <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Documentation</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Textes Nationaux</Breadcrumb.Item>
          <Breadcrumb.Item active>Décrets</Breadcrumb.Item>
      </Breadcrumb>
      <div className="decrets-container">
          <p className="decrets-title">DÉCRETS</p>
          <div className="decrets-rows-container">
            {decrets.map((item, index) => (
              <DecretRow label={item.title} fileUrl={item.image_url} description={item.sub_title} decretImg={item.image_url}/>
            ))}
         </div>
      </div>
  </div>;
};

export default Decrets;
