import React, { useState } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./ArreteRow.css";
import arreteImg from  "../../assets/images/img7.jpg"

const ArreteRow = (props) => {

    const {data} = props;

    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }

  return <div className="arrete-row">

            <div className={opened === true ? "arrete-row-blue-clicked d-flex justify-content-space-between" :"arrete-row-blue-not-clicked d-flex justify-content-space-between"} onClick={handleOpenDetails} >
                <FiPlus className="arrete-row-blue-plus-icon"/>
                {data.title}
            </div>

           {opened === true ? <div className="arrete-row-details row ">
                <div className="arrete-row-details-text-container col-sm-8">
                    <p className="arrete-row-details-text">
                    <div dangerouslySetInnerHTML={{__html: (data && data.content)}}></div>
                    </p>
                </div>
                <div className="arrete-row-details-button-container col-sm">
                    <img src={data.image_url} className="arrete-row-details-image" />
                    <button className="arrete-row-details-button">
                        Télécharger   <MdFileDownload className="arrete-row-details-button-icon" />
                    </button>
                
                </div>
            </div> : null}

        </div>;
};

export default ArreteRow;
