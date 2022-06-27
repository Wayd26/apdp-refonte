import React, { useState, useEffect} from 'react'
import "./Commissaire.css";
import img5 from "../../assets/images/img5.jpg";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"
import fat from "../../assets/images/f_a_t.png"
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';



const Commissaire = () => {

    const [commissaire, setCommissaire] = useState();

    const loadCommissaireData = async () => {
        const resp = await getATypeOfArticles("commissariat_du_gouvernement")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data[0])
            setCommissaire(resp.data.data[0])
        }
    }
    
    useEffect(() => {
        loadCommissaireData()        
    }, [])
    return (
        <div className='info-section'>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Connaitre l'APDP</Breadcrumb.Item>
                <Breadcrumb.Item active>Commissariat du Gouvernement</Breadcrumb.Item>
            </Breadcrumb>
            {/* <ActualiteCarousel /> */}
            <p className="commissaire-title">{commissaire?.title}</p>
            <hr className="commissaire-hr"></hr>
            <div className='content'>
                <Card style={{ 'margin-top': '100px', }}>
                    <Card.Body>
                        <div className='rounded-circle' style={{ backgroundImage: `url('${commissaire?.image_url ? commissaire?.image_url : fat}'`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '300px', width: '300px', margin: 'auto', position: 'relative', top: '-120px',}}></div>
                        {/* <img src={commissaire?.image_url ? commissaire?.image_url : fat}  style={{ width: '300px', height: '300px', position: 'relative', top: '-180px',}}/> */}
                        <h3 style={{position: 'relative', top: '-100px',}}>{commissaire?.sub_title}</h3>
                        <Card.Text style={{'margin': '0px 100px 100px 100px', 'text-align': 'left',}}>
                        <div dangerouslySetInnerHTML={{__html: (commissaire && commissaire?.content)}}></div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            

        </div>
    )
}

export default Commissaire
