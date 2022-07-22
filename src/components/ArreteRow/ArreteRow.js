import React, { useState, useEffect } from 'react';
import {FiPlus} from "react-icons/fi";
import {MdFileDownload} from "react-icons/md";
import "./ArreteRow.css";
import image from  "../../assets/icons/document.svg"
import { useHref } from 'react-router-dom';
import pdfFile from "../../assets/images/pdf_file.jpeg"


const ArreteRow = (props) => {

    const {data} = props;

    const [opened, setOpened] = useState(false);

    const handleOpenDetails = () => {
        setOpened(!opened);
    }

    useEffect(() => {
      console.log(data)
    }, [data])
    

  return <div className="arrete-row">

            <div className={opened === true ? "arrete-row-blue-clicked d-flex justify-content-space-between" :"arrete-row-blue-not-clicked d-flex justify-content-space-between"} onClick={handleOpenDetails} >
                <FiPlus className="arrete-row-blue-plus-icon"/>
                {data.title}
            </div>

           {opened === true ? <div className="arrete-row-details row ">
                {/* <div className="arrete-row-details-text-container col-sm-8">
                    <p className="arrete-row-details-text">
                    <div dangerouslySetInnerHTML={{__html: (data && data.content)}}></div>
                    </p>
                </div> */}
                <div className="d-flex justify-content-between">
                    <img src={pdfFile} className="arrete-row-details-image" />
                    <a href={data.image_url} download>
                    <button className="arrete-row-details-button">
                        Télécharger   <MdFileDownload className="arrete-row-details-button-icon" />
                    </button>
                    </a>

                
                </div>
            </div> : null}

        </div>;
};

export default ArreteRow;
