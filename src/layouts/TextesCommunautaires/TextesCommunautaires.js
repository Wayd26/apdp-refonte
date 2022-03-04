import React, {useState, useEffect} from 'react';
import TexteCommunautaireCard from '../../components/TexteCommunautaireCard/TexteCommunautaireCard';
import "./TextesCommunautaires.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";

const TextesCommunautaires = () => {
  const navigate = useNavigate();
  const [textes_communautaire, setTextesCommunautaire] = useState([]);

  const loadTextesCommunautaireData = async () => {
      const resp = await getATypeOfArticles("textes_communautaire")
      if(resp.response && resp.response.status !== 200){
          console.log("data error ", resp.response)
      } else {
          console.log("data data ", resp.data.data)
          setTextesCommunautaire(resp.data.data)
      }
  }
  
  useEffect(() => {
    loadTextesCommunautaireData() ;
    console.log("TextesCommunautaire data ", textes_communautaire)       
  }, [])
  return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
      <div className="textes-communautaires-container">
        <p className="textes-communautaires-title">TEXTES COMMUNAUTAIRES</p>
        <div className="textes-communautaires-cards-container row">
          <div className="col-sm-4 col-xs-12">
          { textes_communautaire.map(item => (  
            <TexteCommunautaireCard title={item.title} description={item.sub_title}/>
          )) }
          </div>
        </div>
      </div>
  </div>;
};

export default TextesCommunautaires;
