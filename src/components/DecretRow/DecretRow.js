import React, { useState } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./DecretRow.css";
import decretImg from  "../../assets/images/img7.jpg"

const DecretRow = () => {

    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }

  return <div className="decret-row">

            <div className={opened === true ? "decret-row-blue-clicked d-flex justify-content-space-between" :"decret-row-blue-not-clicked d-flex justify-content-space-between"} onClick={handleOpenDetails} >
                <FiPlus className="decret-row-blue-plus-icon"/>
                Décret N°2016-465 du 03 Août 2016 portant obligation d'identification des abonnés aux réseaux et services de communications électroniques en République du Bénin.
            </div>

           {opened === true ? <div className="decret-row-details row ">
                <div className="decret-row-details-text-container col-sm-8">
                    <p className="decret-row-details-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, n
                    </p>
                </div>
                <div className="decret-row-details-button-container col-sm">
                    <img src={decretImg} className="decret-arrete-row-details-image" />
                    <button className="decret-arrete-row-details-button">
                        Télécharger   <MdFileDownload className="decret-row-details-button-icon" />
                    </button>
                
                </div>
            </div> : null}

        </div>;
};

export default DecretRow;