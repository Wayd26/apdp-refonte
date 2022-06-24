import React, { useState, useEffect } from 'react'
import "./MentionsLegales.css";
import img5 from "../../assets/images/img5.jpg";
import FaqSection from '../../components/FaqSection/FaqSection';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {Carousel, Card, Figure, Button, ButtonGroup, Accordion} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {BiCalendarCheck} from "react-icons/bi"
import imgCard5 from "../../assets/images/img5.jpg"
import imgCard6 from "../../assets/images/img6.jpg"
import {getATypeOfArticles} from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const MentionsLegales = () => {

    const [mentions, setMentions] = useState();

    const loadMentionsData = async () => {
        const resp = await getATypeOfArticles("mentions")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setMentions(resp.data.data)
        }
    }
    
    useEffect(() => {
        loadMentionsData()        
    }, [])

    return (
        <div className='info-section'>
            <div className='content'>
                <Card >
                    <Card.Body style={{ 'display': 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
                        <h3 style={{'text-align': 'center', 'color': '#4385F6', 'text-transform': 'uppercase', 'padding':'50px', 'font-size': '40px'}}>MENTIONS LéGALES</h3>
                        {/* <p style={{ 'margin': '0px 100px 0px 100px',  }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p> */}
                        <hr style={{ 'color':'#4385F6', 'height':'3px', 'width':'300px', 'opacity':'0.5' }}/>
                        <br/>
                        <Card.Text style={{'margin': '0px 100px 100px 100px', 'text-align': 'justify',}}>

                        {mentions ? <>{mentions.map((mention, index) =>
                        <>
    <p style={{ 'color':'#4385F6', 'font-weight':'bolder', 'font-size':'30px', 'margin-bottom': '30px' }} >{mention.title}</p>

                <div className='pb-5' dangerouslySetInnerHTML={{__html: (mention && mention.content)}}></div> 
                </> 
)}
                    </>   
                : <h1> Aucune Mention Légale </h1> 
                }
                           
                        
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            

        </div>
    )
}

export default MentionsLegales
