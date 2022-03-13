import React, {useState, useEffect}  from 'react';
import "./Cooperations.css";
import {Card} from "react-bootstrap";
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import {getATypeOfArticles} from '../../http/http';



const Cooperations = () => {


  const [cooperations, setCooperations] = useState();

  const loadCooperationsData = async () => {
      const resp = await getATypeOfArticles("cooperations")
      if(resp.response && resp.response.status !== 200){
          console.log("error ",resp.response)
      } else {
          console.log("data ",resp.data.data)
          setCooperations(resp.data.data)
      }
  }
  
  useEffect(() => {
    loadCooperationsData()        
  }, [])

    return (
      <div style={{background: '#E2E2E2', paddingTop: "40px", paddingBottom: "40px"}}>
        {/* <ActualiteCarousel/> */}
        <div className={'cooperations-div'} style={{ 'padding-bottom': '100px' }}>
          <h2 style={{ 'color': '#4385F6', 'margin': '100px' }}>COOPÉRATIONS</h2>
          <div className={'cooperations-cards row'} style={{ 'margin': '100px', 'justify-content': 'center', }}>
          {cooperations ? <>{cooperations.map((cooperation, index) =>
                 <Card className={"cooperations-card col-md-6 col-lg-4 col-xl-4 mb-3"} style={{ width: '20rem', padding: '30px', 'border-radius': '10px' }}>
                 <Card.Body>
                   <Card.Title style={{ 'font-size': '25px', 'font-weight': 'bold', 'padding-top': '50px', 'padding-bottom': '50px' }}>{cooperation.title}</Card.Title>
                   <Card.Text>
                   <div dangerouslySetInnerHTML={{__html: (cooperation.content)}}></div>
                   </Card.Text>
                 </Card.Body>
               </Card>
                )}</> : <h1> Aucune coopération </h1> 
                }
      
          </div>
        </div>
      </div>
    )
}

export default Cooperations;
