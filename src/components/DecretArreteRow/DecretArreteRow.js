import React, { useState } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./DecretArreteRow.css";
import decretImg from  "../../assets/images/img7.jpg"

const DecretArreteRow = () => {

    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }

  return <div className="decret-arrete-row">

            <div className={opened === true ? "decret-arrete-row-blue-clicked d-flex justify-content-space-between" :"decret-arrete-row-blue-not-clicked d-flex justify-content-space-between"} onClick={handleOpenDetails} >
                <FiPlus className="decret-arrete-row-blue-plus-icon"/>
                Décret N°2016-465 du 03 Août 2016 portant obligation d'identification des abonnés aux réseaux et services de communications électroniques en République du Bénin.
            </div>

           {opened === true ? <div className="decret-arrete-row-details row ">
                <div className="decret-arrete-row-details-text-container col-sm-8">
                    <p className="decret-arrete-row-details-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, n
                    </p>
                </div>
                <div className="rapports-annuels-row-details-button-container col-sm">
                    <img src={decretImg} className="decret-arrete-row-details-image" />
                    <button className="decret-arrete-row-details-button">
                        Télécharger   <MdFileDownload className="rapports-annuels-row-details-button-icon" />
                    </button>
                
                </div>
            </div> : null}

        </div>;
};

export default DecretArreteRow;
