import React, { useState } from 'react';
import "./RapportAnnuelRow.css"
import {FiPlus} from "react-icons/fi"
import {MdFileDownload} from "react-icons/md"
import rapportImg from  "../../assets/images/img6.jpg"

const RapportAnnuelRow = (props) => {
    const {period, description, fileUrl} = props; 
    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }
    return (
        <div className="rapports-annuels-row">

            <div className="rapports-annuels-row-blue" onClick={handleOpenDetails} >
                <FiPlus className="rapports-annuels-row-blue-plus-icon"/> Rapport Bilan {period}
            </div> 

           {opened === true ? <div className="rapports-annuels-row-details row ">
                <div className="rapports-annuels-row-details-text-container col-sm-8">
                    <p className="rapports-annuels-row-details-text">
                    {description}
                    </p>
                </div>
                <div className="rapports-annuels-row-details-button-container col-sm">
                <img src={rapportImg} className="rapports-annuels-row-details-image" />
                    <a href={fileUrl} download>
                        <button className="rapports-annuels-row-details-button">
                            Télécharger   <MdFileDownload className="rapports-annuels-row-details-button-icon"/>
                        </button>
                    </a>
                </div>
            </div> : null}

        </div>
    )
}

export default RapportAnnuelRow
