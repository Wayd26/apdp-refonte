import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './TemplateVideothequeCard.css'

const TemplateVideothequeCard = (props) => {

    const { id, title, content, created_at, document_url, image_url, sub_title } = props
    const navigate = useNavigate()
    const { menu } = useParams()
    return (
        <div className='template-videotheque-card'>            
            <iframe className="template-videotheque-card-video"
                // src={sub_title}
                // src={sub_title.includes("embed") ? sub_title : (`https://www.youtube.com/embed/${sub_title.slice(32, -1)+sub_title[sub_title.length - 1]}`)}
                src={sub_title.includes("embed") ? sub_title : (`https://www.youtube.com/embed/${sub_title.slice(32, 43)}`)}
            >
            </iframe>
            <p className="template-videotheque-card-label">{title}</p>
            
        </div>
    )
}

export default TemplateVideothequeCard