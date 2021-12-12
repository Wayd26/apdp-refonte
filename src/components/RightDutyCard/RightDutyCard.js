import React from 'react'
import './RightDutyCard.css'
import { RiArrowRightCircleFill } from 'react-icons/ri'


const RightDutyCard = (props) => {

    const { type } = props;

    return (
        <div className={type == 'duty' ? 'duty-card' : 'right-card'}>
            <div className={'right-duty-card-title'}>{type == 'duty' ? 'Vos devoirs' : 'Vos droits'}</div>
            <button className={'right-duty-more-button d-flex justify-content-around align-self-right'}>
                <span className={'more-text'}>Découvrir</span>
                <RiArrowRightCircleFill className={'more-button-arrow'} />
            </button>
        </div>
    )
}

export default RightDutyCard
