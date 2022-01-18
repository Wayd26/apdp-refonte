import React from 'react';
import RapportAnnuelRow from '../../components/RapportAnnuelRow/RapportAnnuelRow';
import "./RapportsAnnuels.css"

const RapportsAnnuels = () => {
    return (
        <div style={{backgroundColor: "#F7F7F7"}}>

            <div className="rapports-annuels-box">
                <p className="rapports-annuels-title">Rapports Annuels</p>

                <div className="rapports-annuels-row-box">
                    <RapportAnnuelRow period={2021}/>
                    <RapportAnnuelRow period={2020}/>
                    <RapportAnnuelRow period={2019}/>
                    <RapportAnnuelRow period={2018}/>
                    <RapportAnnuelRow period={2017}/>
                    <RapportAnnuelRow period={2016}/>
                </div>
            </div>
            
        </div>
    )
}

export default RapportsAnnuels
