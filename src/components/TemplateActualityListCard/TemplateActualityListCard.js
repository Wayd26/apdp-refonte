import React from 'react'
import './TemplateActualityListCard.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate } from 'react-router-dom'

const TemplateActualityListListCard = () => {
    const navigate = useNavigate()
    return (
        <div className='actuality-list__card d-flex flex-wrap'>
            <div className="actuality-list__card__image">
                <img src={image} alt="" />
            </div>
            <div className="actuality-list__card__content">
                <div class="content__text">
                <div className="title">ACTIVITÉ TEST TITRE 2 | 11/06/2022</div>
                <div className="subtitle">Lorem ipsum dolor</div>
                <div className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd gubergren, 
                    no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </div>
                </div>
            <div className="actuality-list__card__footer">
                <button onClick={() => navigate('/main-item/2')}>Lire la suite</button>
            </div>
            </div>

        </div>
    )
}

export default TemplateActualityListListCard