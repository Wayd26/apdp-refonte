import React, {useState, useEffect} from 'react';
import DutyCard from '../../components/DutyCard/DutyCard';
import "./VosDevoirs.css";
import {Tabs, Tab} from "react-bootstrap";
import DutiesContent from '../../components/DutiesContent/DutiesContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles } from '../../http/http';


const VosDevoirs = () => {

    const [key, setKey] = useState('particulier');
    const [devoirs, setDevoirs] = useState();

    const loadDevoirsData = async () => {
      const resp = await getATypeOfArticles("devoirs")
      if(resp.response && resp.response.status !== 200){
          console.log("error ",resp.response)
      } else {
          console.log("data ",resp.data.data)
          setDevoirs(resp.data.data)
      }
  }
    
    useEffect(() => {
        loadDevoirsData();        
    }, [])


    return (
      <div style={{background: '#E2E2E2', paddingBottom: "40px", paddingTop: "40px"}}>
      {/* <ActualiteCarousel /> */}
        <div className={"your-duties"} id={"your-duties"}>
            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="particulier" title=" Je suis un Particulier">
        <DutiesContent categorie={"Particulier"} devoirs={devoirs}/>
      </Tab>
      <Tab eventKey="entreprise_et_organisme" title=" Je suis une Entreprise et Organisme">
      <DutiesContent categorie={"Structure Privée"}  devoirs={devoirs}/>

      </Tab>
      <Tab eventKey="administration_publique" title="Je suis une Administration Publique" >
      <DutiesContent categorie={"Administration Publique"} devoirs={devoirs}/>
      </Tab>
    </Tabs>
        </div>
        </div>
    )
}

export default VosDevoirs;
