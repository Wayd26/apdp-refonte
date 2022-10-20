import React from 'react'
import './TemplateDocumentationListCard.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate, useParams } from 'react-router-dom'


const TemplateDocumentationListCard = (props) => {
    
    const {id, title, content, created_at, document_url, image_url, sub_title} = props
    const navigate = useNavigate()
  const {menu} = useParams()
  return (
    <div className='documentation-list__card d-flex flex-wrap'>
        <div class="documentation-list__card__image">
        <img src={image_url ? image_url : image} alt="" />

        </div>
        <div class="documentation-list__card__text-content">
            <div class="description">{title}</div>
            {/* <div className="description" dangerouslySetInnerHTML={{ __html: (content) }}></div> */}

            <hr />
                <div class="footer-content__time">{created_at.slice(8,10)} / {created_at.slice(5,7)} / {created_at.slice(0,4)}<span className='green-period'>.</span></div>
            <div class="footer-content d-flex">
                <div class="footer-content__buttons">
                    <button class="read-button" onClick={() => navigate(`/documentations/${menu}/${id}`)}>Lire</button>
                    <a href={document_url && document_url[0]} download>
                    <button class="download-button">Télécharger</button>
                     </a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemplateDocumentationListCard