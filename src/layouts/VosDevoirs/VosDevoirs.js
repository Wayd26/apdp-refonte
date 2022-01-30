import React, {useState, useEffect} from 'react';
import DutyCard from '../../components/DutyCard/DutyCard';
import "./VosDevoirs.css";
import {Tabs, Tab} from "react-bootstrap";
import DutiesContent from '../../components/DutiesContent/DutiesContent';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';

const VosDevoirs = () => {

    const [key, setKey] = useState('particulier');


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
      <Tab eventKey="particulier" title="Particulier">
        <DutiesContent />
      </Tab>
      <Tab eventKey="entreprise_et_organisme" title="Entreprise et Organisme">
      <DutiesContent />

      </Tab>
      <Tab eventKey="administration_publique" title="Administration Publique" >
      <DutiesContent />
      </Tab>
    </Tabs>
        </div>
        </div>
    )
}

export default VosDevoirs;
