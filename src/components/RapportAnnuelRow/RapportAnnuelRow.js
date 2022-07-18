import React, { useState } from 'react';
import "./RapportAnnuelRow.css"
import { FiPlus } from "react-icons/fi"
import { MdFileDownload } from "react-icons/md"
import rapportImg from "../../assets/icons/document.svg"

const RapportAnnuelRow = (props) => {
    const { period, description, fileUrl, title } = props;
    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }
    return (
        <div className="rapports-annuels-row">

            <div className="rapports-annuels-row-blue" onClick={handleOpenDetails} >
                <FiPlus className="rapports-annuels-row-blue-plus-icon" /> {title} {period}
            </div>

            {opened === true ? <div className="row d-flex flex-justify-content mt-4">
                {/* <div className="rapports-annuels-row-details-text-container col-sm-8">
                    <p className="rapports-annuels-row-details-text">
                    {description}
                    </p>
                </div> */}
                <div className="d-flex justify-content-between" style={{ alignItems: 'center' }}>
                    {/* <img src={rapportImg} className="rapports-annuels-row-details-image" /> */}
                    <div style={{ backgroundImage: `url('${rapportImg}'`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '100px' }} className="rapports-annuels-row-details-image">

                    </div>
                    <a href={fileUrl} download>
                        <button className="rapports-annuels-row-details-button">
                            Télécharger   <MdFileDownload className="rapports-annuels-row-details-button-icon" />
                        </button>
                    </a>
                </div>
            </div> : null}

        </div>
    )
}

export default RapportAnnuelRow
