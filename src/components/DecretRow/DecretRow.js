import React, { useState } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./DecretRow.css";
// import decretImg from  "../../assets/images/img7.jpg"

const DecretRow = (props) => {
    const { label, description, fileUrl, decretImg } = props;
    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }

  return <div className="decret-row">

            <div className={opened === true ? "decret-row-blue-clicked d-flex justify-content-space-between" :"decret-row-blue-not-clicked d-flex justify-content-space-between"} onClick={handleOpenDetails} >
                <FiPlus className="decret-row-blue-plus-icon"/>
                {label}
            </div>

           {opened === true ? <div className="decret-row-details row ">
                <div className="decret-row-details-text-container col-sm-8">
                    <p className="decret-row-details-text">
                    {description}
                    </p>
                </div>
                <div className="decret-row-details-button-container col-sm">
                    <img src={decretImg} className="decret-row-details-image" />
                    <a href={fileUrl} download>
                        <button className="decret-arrete-row-details-button">
                            Télécharger   <MdFileDownload className="decret-row-details-button-icon" />
                        </button>
                    </a>
                
                </div>
            </div> : null}

        </div>;
};

export default DecretRow;
