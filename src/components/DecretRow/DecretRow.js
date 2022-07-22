import React, { useState } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./DecretRow.css";
import decretImage from  "../../assets/icons/document.svg"
import pdfFile from "../../assets/images/pdf_file.jpeg"

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
                {/* <div className="decret-row-details-text-container col-sm-8">
                    <p className="decret-row-details-text">
                    {description}
                    </p>
                </div> */}
                <div className="d-flex justify-content-between">
                    <img src={pdfFile} className="decret-row-details-image" />
                    <a href={fileUrl} download>
                    <button className="arrete-row-details-button">
                        Télécharger   <MdFileDownload className="arrete-row-details-button-icon" />
                    </button>
                    </a>
                
                </div>
            </div> : null}

        </div>;
};

export default DecretRow;
