import React, { useState } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./ArreteRow.css";
import arreteImg from  "../../assets/images/img7.jpg"

const ArreteRow = () => {

    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }

  return <div className="arrete-row">

            <div className={opened === true ? "arrete-row-blue-clicked d-flex justify-content-space-between" :"arrete-row-blue-not-clicked d-flex justify-content-space-between"} onClick={handleOpenDetails} >
                <FiPlus className="arrete-row-blue-plus-icon"/>
                Arreté N°2018-45 du 03 Août 2020 portant obligation d'identification des abonnés aux réseaux et services de communications électroniques en République du Bénin.
            </div>

           {opened === true ? <div className="arrete-row-details row ">
                <div className="arrete-row-details-text-container col-sm-8">
                    <p className="arrete-row-details-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, n
                    </p>
                </div>
                <div className="arrete-row-details-button-container col-sm">
                    <img src={arreteImg} className="arrete-row-details-image" />
                    <button className="arrete-row-details-button">
                        Télécharger   <MdFileDownload className="arrete-row-details-button-icon" />
                    </button>
                
                </div>
            </div> : null}

        </div>;
};

export default ArreteRow;
