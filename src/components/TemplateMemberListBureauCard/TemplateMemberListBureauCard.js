import React from 'react'
import image from '.././../assets/images/img7.jpg'
import { useNavigate } from 'react-router-dom'
import './TemplateMemberListBureauCard.css'


const TemplateMemberListBureauCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/template-member-item')} className='member-bureau-list__card d-flex flex-wrap'>
        <div class="member-bureau-list__card__image">
        <img src={image} alt="" />

        </div>
        <div class="member-bureau-list__card__text-content">
            <div class="description">Mr Yvon DETCHENOU</div>
            <hr />
            <div class="footer-content d-flex">
                <div class="footer-content__buttons">
                    {/* <button class="read-button" >Lire</button> */}
                    <button class="download-button">Président</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemplateMemberListBureauCard