import React, {useState, useEffect} from 'react';
import DutyCard from '../../components/DutyCard/DutyCard';
import "./VosDevoirs.css";
import {Tabs, Tab} from "react-bootstrap";
import DutiesContent from '../../components/DutiesContent/DutiesContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles, getRightsOrDuties } from '../../http/http';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const VosDevoirs = () => {

    const [key, setKey] = useState('particulier');
    const [devoirsPrives, setDevoirsPrives] = useState();
    const [devoirsParticuliers, setDevoirsParticuliers] = useState();
    const [devoirsPubliques, setDevoirsPubliques] = useState();

  
  const loadDevoirsData = async (type, category, section) => {
    const resp = await getRightsOrDuties(type, category, section)
    if(resp.response && resp.response.status !== 200){
        console.log("error ",resp.response)
    } else {
        console.log("data ",resp.data)
        if(category == "devoir_particulier") {
          setDevoirsParticuliers(resp.data.data)
        }
        if(category == "devoir_structure_privee") {
          setDevoirsPrives(resp.data.data)
        }
        if(category == "devoir_administration_publique") {
          setDevoirsPubliques(resp.data.data)
        }
        
    }
}
    
    useEffect(() => {
        loadDevoirsData("devoirs", "devoir_particulier", "");        
        loadDevoirsData("devoirs", "devoir_structure_privee", "");        
        loadDevoirsData("devoirs", "devoir_administration_publique", "");            
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
        <DutiesContent categorie={"Particulier"} devoirs={devoirsParticuliers}/>
      </Tab>
      <Tab eventKey="entreprise_et_organisme" title=" Je suis une Entreprise et Organisme">
      <DutiesContent categorie={"Structure Privée"}  devoirs={devoirsPrives}/>

      </Tab>
      <Tab eventKey="administration_publique" title="Je suis une Administration Publique" >
      <DutiesContent categorie={"Administration Publique"} devoirs={devoirsPubliques}/>
      </Tab>
    </Tabs>
        </div>
        </div>
    )
}

export default VosDevoirs;
