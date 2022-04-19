import React, {useState, useEffect} from 'react';
import "./Recommandations.css";
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


const Recommandations = () => {
    const navigate = useNavigate();
    const [recommandations, setRecommandations] = useState([]);
    const [title, setTitle] = useState([]);
  
  
  
    const loadTextesData = async () => {
    
     const resp = await getATypeOfArticles("recommandations")
        
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            setRecommandations(resp.data.data)
        }
    }
    
    useEffect(() => {
        loadTextesData() ;
      console.log("recommandations data ", recommandations)       
    }, [])
    return <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="textes-communautaires-container">
          <p className="textes-communautaires-title">Recommandations</p>
          <div className="textes-communautaires-cards-container row">
            <div className="col-sm-4 col-xs-12">
            
            </div>
          </div>
        </div>
    </div>;
  };
  export default Recommandations