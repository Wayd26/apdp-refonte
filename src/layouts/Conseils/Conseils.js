import React, {useState, useEffect} from 'react';
import "./Conseils.css";
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { RiArrowRightCircleFill, RiH1 } from 'react-icons/ri';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";
import TexteCommunautaireCard from '../../components/TexteCommunautaireCard/TexteCommunautaireCard';


const Conseils = () => {
    const navigate = useNavigate();
    const [textes_internationaux, setTextesInternationaux] = useState([]);
    const [title, setTitle] = useState([]);
  
  
  
    const loadTextesData = async () => {
    
     const resp = await getATypeOfArticles("textes_internationaux")
        
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            setTextesInternationaux(resp.data.data)
        }
    }
    
    useEffect(() => {
        loadTextesData() ;
      console.log("TextesCommunautaire data ", textes_internationaux)       
    }, [])
    return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="textes-communautaires-container">
          <p className="textes-communautaires-title">Textes Internationaux</p>
          <div className="textes-communautaires-cards-container row">
            <div className="col-sm-4 col-xs-12">
            { textes_internationaux ? textes_internationaux.map(item => (  
              <TexteCommunautaireCard title={item.title} description={item.sub_title}/>
            )) : <h1 className="px-3">Aucun Texte</h1> }
            </div>
          </div>
        </div>
    </div>;
  };
  
export default Conseils;