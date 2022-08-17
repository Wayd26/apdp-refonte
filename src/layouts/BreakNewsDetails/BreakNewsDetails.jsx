import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { getATypeOfArticles } from '../../http/http';
import './BreakNewsDetails.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {FiDownload} from "react-icons/fi";


const BreakNewsDetails = (props) => {

  let { breaknews_id } = useParams();
  const [breaknewsData, setBreaknewsData] = useState();


  useEffect(() => {
    loadBreaknewsData();
}, [breaknews_id])

 const loadBreaknewsData = async () => {
    const resp = await getATypeOfArticles("breaknews")
    if(resp.response && resp.response.status !== 200){
        // console.log("data error ", resp.response)
    } else {
        console.log("data data ", resp.data.data)
        let element = resp.data?.data?.filter(elt => {
            if(elt.id == breaknews_id) {
            return elt
        } else {
            return false
        } 
    })
        setBreaknewsData(element)
    }
}


  return (
    <div>
        {/* {JSON.stringify(breaknewsData)} */}
        <Breadcrumb>
            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Actualités</Breadcrumb.Item>
            <Breadcrumb.Item active>Breaknews</Breadcrumb.Item>
        </Breadcrumb>    
        <div style={{background: '#FFF'}}>
        <h2 style={{ 'color': '#4385F6', 'padding-top':'30px', marginBottom: '30px' }}>{breaknewsData && breaknewsData[0].title}</h2>
        <Card className={'breaknews-card mx-auto'}>
         <Card.Body className='breaknew-card-body'>
          
            <Card.Img className='breaknew-card-img' src={breaknewsData && breaknewsData[0]?.image_url} />
            <Card.Text className='breaknew-card-text'>
             <div dangerouslySetInnerHTML={{__html: (breaknewsData && breaknewsData[0]?.content)}}></div>
            {/* <Button variant="primary">Télécharger(Version française)</Button>*/}
            </Card.Text>
           
            <a href={breaknewsData && breaknewsData[0]?.document_url[0]} download>
              <button className="espace-rt-card-button">Télécharger <FiDownload className="espace-rt-card-button-icon" /></button>
              </a> 
          </Card.Body> 
        </Card> 

        <br/>
       
      </div>
      </div>
  )
}

export default BreakNewsDetails