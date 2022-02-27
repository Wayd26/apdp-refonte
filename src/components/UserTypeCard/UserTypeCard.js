import React from 'react'
import './UserTypeCard.css'
import { GrGroup } from 'react-icons/gr'
import { HiUserGroup } from 'react-icons/hi'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import { Button, Row } from 'react-bootstrap'
import { HiLink } from 'react-icons/hi'


const UserTypeCard = (props) => {
    const { type, description, handleClick } = props;


    return (
        <div className={'user-type-card'}>
            <div className={'icon-container d-flex justify-content-center'}>
                {type == 'demand' ? <HiLink className={'user-type-icon'} /> : <HiUserGroup className={'user-type-icon'} />}

            </div>
            <div className={'user-type-label'}>{type == 'right' ? 'Mes droits' : type == 'duty' ? 'Mes devoirs' : 'Faire une demande'}</div>
            <div className={'user-type-description'}>{description}</div>
            <Row className={'d-flex justify-content-end'}>
                <button onClick={handleClick} className={'user-type-more-button d-flex justify-content-around align-self-right'}>
                    <span className={'more-text-usertype'}>Lire plus</span>
                    <RiArrowRightCircleFill className={'more-button-arrow'} />
                </button>
            </Row>


        </div>
    )
}

export default UserTypeCard
