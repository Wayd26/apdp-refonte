import React from 'react'
import './RightDutyCard.css'
import { RiArrowRightCircleFill } from 'react-icons/ri'


const RightDutyCard = () => {
    return (
        <div className={'right-duty-card'}>
            <div className={'right-duty-card-title'}>Mes droits</div>
            <button className={'right-duty-more-button d-flex justify-content-around align-self-right'}>
                <span className={'more-text'}>Découvrir</span>
                <RiArrowRightCircleFill className={'more-button-arrow'} />
            </button>
        </div>
    )
}

export default RightDutyCard
