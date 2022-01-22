import React from 'react'
import LoiCard from '../../components/LoiCard/LoiCard';
import "./LesLois.css"

const LesLois = () => {
    return (
        
        <div style={{backgroundColor: "#F7F7F7"}}>
            <p className="lois-title">LOIS</p>

            <div className="lois-container row d-flex justify-content-between">
                <LoiCard />
                <LoiCard />
            </div>
        </div>
    )
}

export default LesLois
