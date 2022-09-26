import React from 'react'
import './TemplateMemberListConseillerCard.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate } from 'react-router-dom'


const TemplateMemberListConseillerCard = () => {
    const navigate = useNavigate()
  return (
    <div className='member-conseiller-list__card'>
        <img src={image} alt="" />
        <div class="name">Nom Conseiller</div>
        <div class="job">Conseiller</div>
    </div>
  )
}

export default TemplateMemberListConseillerCard