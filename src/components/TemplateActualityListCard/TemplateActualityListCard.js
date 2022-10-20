import React from 'react'
import './TemplateActualityListCard.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate, useParams } from 'react-router-dom'

const TemplateActualityListListCard = (props) => {


    const { id, title, content, created_at, document_url, image_url, sub_title } = props
    const navigate = useNavigate()
    const { menu } = useParams()

    return (
        <div className='actuality-list__card d-flex flex-wrap mx-auto'>
            <div className="actuality-list__card__image">
                <img src={image_url ? image_url : image} alt={image_url} />
            </div>
            <div className="actuality-list__card__content">
                <div class="content__text">
                    <div className="title">{title} | <em><strong> {created_at.slice(8, 10)} / {created_at.slice(5, 7)} / {created_at.slice(0, 4)} </strong></em></div>
                    <div className="subtitle">{sub_title}</div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: (content) }}>

                    </div>
                </div>
                <div className="actuality-list__card__footer">
                    <button onClick={() => navigate(`/actualites/${menu}/${id}`)}>Lire la suite</button>
                </div>
            </div>

        </div>
    )
}

export default TemplateActualityListListCard