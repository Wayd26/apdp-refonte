import React, {useState, useEffect} from 'react';
import RightCard from '../../components/RightCard/RightCard';
import "./VosDroits.css";
import {Tabs, Tab} from "react-bootstrap";
import RightsContent from '../../components/RightsContent/RightsContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const VosDroits = () => {

    const [key, setKey] = useState('particulier');


    return (
      <div style={{background: '#F7F7F7'}}>
{/* <ActualiteCarousel /> */}

        <div className={"your-rights"} id={"your-rights"}>

            <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="particulier" title="Particulier">
        <RightsContent />
      </Tab>
      <Tab eventKey="entreprise_et_organisme" title="Entreprise et Organisme">
      <RightsContent />

      </Tab>
      <Tab eventKey="administration_publique" title="Administration Publique" >
      <RightsContent />
      </Tab>
    </Tabs>
        </div>
      </div>
    )
}

export default VosDroits;
