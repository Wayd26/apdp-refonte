import React, { useState } from 'react';
import EspaceDpoCard from '../../components/EspaceDpoCard/EspaceDpoCard';
import "./EspaceDPO.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import FormationProgrammee from '../../components/FormationProgrammee/FormationProgrammee';
import SupportDeFormation from '../../components/SupportDeFormation/SupportDeFormation';
import FormationSuivie from '../../components/FormationSuivie/FormationSuivie';
import NoteInformation from '../../components/NoteInformation/NoteInformation';

const EspaceDPO = () => {
    const [sectionActive, setSectionActive] = useState(1)
    const espaceRtData = [
        {
            id: 1,
            label: "Supports de Formation"

        },
        {
            id: 2,
            label: "Formation Programmée"
        },
        {
            id: 3,
            label: "Formation Suivie et Attestation"
        },
        {
            id: 4,
            label: "Note d'Information"
        }
    ]

    return <div style={{ backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px" }}>

        <div className="espace-dpo-container">
            <p className="espace-dpo-title">ESPACE DPO</p>
            <div className="espace-dpo-cards-container row d-flex ">
                {espaceRtData.map((item, index) => (
                    <div key={index} className="col-sm-3 col-xs-12">
                        <button className={item.id === sectionActive ? `espace-dpo-section-button activeSection` : `espace-dpo-section-button`} onClick={() => setSectionActive(item.id)}>
                            {item.label}
                        </button>
                    </div>
                ))}
            </div>
            <div className='espace-dpo-content custom-overflow'>
                {sectionActive === 1 && <SupportDeFormation />}
                {sectionActive === 2 && <FormationProgrammee />}
                {sectionActive === 3 && <FormationSuivie />}
                {sectionActive === 4 && <NoteInformation />}

            </div>
        </div>
    </div>;
};

export default EspaceDPO;
