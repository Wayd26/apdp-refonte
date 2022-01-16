import React from 'react'
import "./AvisImportant.css"
import {RiAlarmWarningFill} from "react-icons/ri"

const AvisImportant = () => {
    return (
        <div className="avis-important px-3 py-3">
            <span className="d-flex flex-nowrap justify-content-between my-3 ">
                {/* <div className="avis-important-first-bloc d-flex flex-nowrap col"> */}
                <RiAlarmWarningFill className="avis-important-icon"/>
                <span className="avis-important-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</span>

                {/* </div> */}
                <span className="avis-important-button col">Télécharger</span>
            </span>
        </div>
    )
}

export default AvisImportant
