import React from 'react'
import RightCard from '../RightCard/RightCard'
import "./RightsContent.css"

const RightsContent = () => {
    return (
        <div className={"rights-content"}>

            <p className={"rights-content-title text-center"}> Vos devoirs </p>
            <p className={"rights-content-subtitle d-flex justify-content-center mb-3 mt-2"}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et t, consetetur nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
            <div className={"row d-flex"}>

            <div className={"col-4 p-3"}> <RightCard/> </div>
            <div className={"col-4 p-3"}> <RightCard/> </div>
            <div className={"col-4 p-3"}> <RightCard/> </div>
            <div className={"col-4 p-3"}> <RightCard/> </div>
            <div className={"col-4 p-3"}> <RightCard/> </div>
            <div className={"col-4 p-3"}> <RightCard/> </div>
            </div>
        </div>
    )
}

export default RightsContent
