import React from 'react'
import "./AvisImportant.css"
import {RiAlarmWarningFill} from "react-icons/ri"

const AvisImportant = (props) => {

    const {title, fileLink} = props;
    return (
        <div className="avis-important px-3 py-1">
            <span className="d-flex flex-nowrap justify-content-between mt-3">
                {/* <div className="avis-important-first-bloc d-flex flex-nowrap col"> */}
                <RiAlarmWarningFill className={"avis-important-icon-active"}/>
                <span className="avis-important-text">{title}</span>

                {/* </div> */}
                <span className="avis-important-button col" style={{cursor: "pointer"}}>Télécharger</span>
            </span>
                {/* <p className={parseInt(expiryTime) == 0 ? "avis-important-expiry-time-not-active" : "avis-important-expiry-time-active"}>{parseInt(expiryTime) == 0 ? "Expiré" : "Expire dans " + expiryTime + " jour(s)"}</p> */}
        </div>
    )
}

export default AvisImportant
