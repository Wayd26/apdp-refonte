import React from 'react'
import LoiCard from '../../components/LoiCard/LoiCard';
import "./LesLois.css"

const LesLois = () => {
    return (
        
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
            <p className="lois-title">LOIS</p>

            <div className="lois-container row d-flex justify-content-between">
                <LoiCard />
                <LoiCard />
            </div>
        </div>
    )
}

export default LesLois
