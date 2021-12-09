import React from 'react'
import './UserTypeCard.css'
import { BiUser } from 'react-icons/bi'
import { RiArrowRightCircleFill } from 'react-icons/ri'
import { Button, Row } from 'react-bootstrap'

const UserTypeCard = (props) => {
    const { icon, userType, description } = props;
    return (
        <div className={'user-type-card'}>
            <div className={'icon-container d-flex justify-content-center'}>
                <BiUser className={'user-type-icon'} />
            </div>
            <div className={'user-type-label'}>Particulier</div>
            <div className={'user-type-description'}>Lorem ipsum dolor sit amet consectetur</div>
            <Row className={'d-flex justify-content-end'}>
                <button className={'user-type-more-button d-flex justify-content-around align-self-right'}>
                    <span className={'more-text'}>Lire plus</span>
                    <RiArrowRightCircleFill className={'more-button-arrow'} />
                </button>
            </Row>


        </div>
    )
}

export default UserTypeCard
