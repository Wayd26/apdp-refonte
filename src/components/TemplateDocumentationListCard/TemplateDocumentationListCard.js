import React from 'react'
import './TemplateDocumentationListCard.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate } from 'react-router-dom'


const TemplateDocumentationListCard = () => {
    const navigate = useNavigate()
  return (
    <div className='documentation-list__card d-flex flex-wrap'>
        <div class="documentation-list__card__image">
        <img src={image} alt="" />

        </div>
        <div class="documentation-list__card__text-content">
            <div class="description">Guide d'orientation universitaire 2022-2023 pour les bacheliers au Bénin</div>
            <hr />
            <div class="footer-content d-flex">
                <div class="footer-content__buttons">
                    <button class="read-button" onClick={() => navigate('/template-documentation-item')}>Lire</button>
                    <button class="download-button">Télécharger</button>
                </div>
                <div class="footer-content__time">08/08/2022 - 12:27 <span className='green-period'>.</span></div>
            </div>
        </div>
    </div>
  )
}

export default TemplateDocumentationListCard