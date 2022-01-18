import React, { useState } from 'react';
import "./RapportAnnuelRow.css"
import {FiPlus} from "react-icons/fi"
import {MdFileDownload} from "react-icons/md"

const RapportAnnuelRow = (props) => {
    const {period} = props; 
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, n
                    </p>
                </div>
                <div className="rapports-annuels-row-details-button-container col-sm">
                    <button className="rapports-annuels-row-details-button">
                        Télécharger   <MdFileDownload className="rapports-annuels-row-details-button-icon" />
                    </button>
                </div>
            </div> : null}

        </div>
    )
}

export default RapportAnnuelRow
