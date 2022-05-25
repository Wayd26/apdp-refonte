import React, {useState, useEffect} from 'react';
import RightCard from '../../components/RightCard/RightCard';
import "./VosDroits.css";
import {Tabs, Tab} from "react-bootstrap";
import RightsContent from '../../components/RightsContent/RightsContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';
import { getATypeOfArticles, getRightsOrDuties } from '../../http/http';
import {useNavigate} from "react-router-dom";


const VosDroits = () => {

    const [key, setKey] = useState('particulier');
    const [droitsPrives, setDroitsPrives] = useState();
    const [droitsParticuliers, setDroitsParticuliers] = useState();
    const [droitsPubliques, setDroitsPubliques] = useState();

    const loadDroitsData = async (type, category, section) => {
        const resp = await getRightsOrDuties(type, category, section)
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            if(category == "droit_particulier") {
              setDroitsParticuliers(resp.data.data)
            }
            if(category == "droit_structure_privee") {
              setDroitsPrives(resp.data.data)
            }
            if(category == "droit_administration_publique") {
              setDroitsPubliques(resp.data.data)
            }
        }
    }
    
    useEffect(() => {
        loadDroitsData("droits", "droit_particulier", "");        
        loadDroitsData("droits", "droit_structure_privee", "");        
        loadDroitsData("droits", "droit_administration_publique", "");        
    }, [])


    return (
      <div style={{background: '#E2E2E2', paddingBottom: "40px", paddingTop: "40px"}}>
{/* <ActualiteCarousel /> */}

        <div className={"your-rights"} id={"your-rights"}>

            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 "
    >
      {/* <div className="col-sm-4"> */}

      <Tab eventKey="particulier" title=" Je suis un Particulier">
        <RightsContent categorie={"Particulier"} droits={droitsParticuliers}/>
      </Tab>
      {/* </div> */}
      {/* <div className="col-sm-4"> */}
      <Tab eventKey="entreprise_et_organisme" title="Je suis une Entreprise et Organisme">
      <RightsContent categorie={"Structure Privée"}  droits={droitsPrives} />
 
      </Tab>
      {/* </div> */}
      
      {/* <div className="col-sm-4"> */}
      <Tab eventKey="administration_publique" title="Je suis une Administration Publique">
      <RightsContent categorie={"Administration Publique"} droits={droitsPubliques} />
      </Tab>  
      {/* </div> */}
    </Tabs>
        </div>
      </div>
    )
}

export default VosDroits;
