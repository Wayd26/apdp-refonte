import React, {useState, useEffect} from 'react';
import DutyCard from '../../components/DutyCard/DutyCard';
import "./VosDevoirs.css";
import {Tabs, Tab} from "react-bootstrap";
import DutiesContent from '../../components/DutiesContent/DutiesContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles } from '../../http/http';


const VosDevoirs = () => {

    const [key, setKey] = useState('particulier');
    const [communiques, setCommuniques] = useState();

    const loadCommuniquesData = async () => {
        const resp = await getATypeOfArticles("communiques")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setCommuniques(resp.data)
        }
    }
    
    useEffect(() => {
        loadCommuniquesData()        
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
        <DutiesContent />
      </Tab>
      <Tab eventKey="entreprise_et_organisme" title=" Je suis une Entreprise et Organisme">
      <DutiesContent />

      </Tab>
      <Tab eventKey="administration_publique" title="Je suis une Administration Publique" >
      <DutiesContent />
      </Tab>
    </Tabs>
        </div>
        </div>
    )
}

export default VosDevoirs;
