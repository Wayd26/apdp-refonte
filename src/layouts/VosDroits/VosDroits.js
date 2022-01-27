import React, {useState, useEffect} from 'react';
import RightCard from '../../components/RightCard/RightCard';
import "./VosDroits.css";
import {Tabs, Tab} from "react-bootstrap";
import RightsContent from '../../components/RightsContent/RightsContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const VosDroits = () => {

    const [key, setKey] = useState('particulier');


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
        <RightsContent />
      </Tab>
      {/* </div> */}
      {/* <div className="col-sm-4"> */}
      <Tab eventKey="entreprise_et_organisme" title="Je suis une Entreprise et Organisme">
      <RightsContent />

      </Tab>
      {/* </div> */}
      
      {/* <div className="col-sm-4"> */}
      <Tab eventKey="administration_publique" title="Je suis une Administration Publique">
      <RightsContent />
      </Tab>
      {/* </div> */}
    </Tabs>
        </div>
      </div>
    )
}

export default VosDroits;
