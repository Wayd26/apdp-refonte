import React from 'react'
import './TemplateVideothequeCard.css'

const TemplateVideothequeCard = () => {
    return (
        <div className='template-videotheque-card'>
            <iframe className="template-videotheque-card-video" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
            </iframe>
            <p className="template-videotheque-card-label">PRESENTATION CNIL BENIN</p>
        </div>
    )
}

export default TemplateVideothequeCard