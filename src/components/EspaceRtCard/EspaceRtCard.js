import React from 'react';
import "./EspaceRtCard.css";
import {FiDownload} from "react-icons/fi";
import pdfFile from "../../assets/images/pdf_file.jpeg";
import excelFile from "../../assets/icons/excel.png";



const EspaceRtCard = (props) => {

    const {label, file} = props;
  return <div className="espace-rt-card">
            <img src={excelFile} className="espace-rt-card-image"/>
            <p className="espace-rt-card-label">{label}</p>
            <a href={file} download>
              <button className="espace-rt-card-button">Télécharger <FiDownload className="espace-rt-card-button-icon" /></button>
              </a>
        </div>;
};

export default EspaceRtCard;
