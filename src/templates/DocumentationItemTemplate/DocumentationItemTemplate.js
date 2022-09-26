import React from 'react'
import './DocumentationItemTemplate.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate } from 'react-router-dom'


const DocumentationItemTemplate = () => {
    const navigate = useNavigate()
  return (
<div>
            <div class="documentation__item-template__header">Documentation</div>
            <div class="documentation__item-template__content">
                {/* <img src={image} alt="" /> */}
                <div class="text-content">
                    <div class="documentation__item__title">Lorem are many variations</div>
                    <div class="documentation__item__subtitle-content">
                        <div class="documentation__item__subtitle">Lorem are many variations variations au</div>
                    </div>
                    <div class="documentation__item__description">
                        Lorem Ipsum est simplement un faux texte de l'industrie de l'impression et de la composition. Le Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères et l'a brouillé pour en faire un livre de spécimens de carac comme Aldus PageMaker comprenant des versions de Lorem Ipsum.
                    </div>
                    <div class="buttons-content d-flex">

                    <button className="documentation__item__read-button">lire</button>
                    <button className="documentation__item__download-button">Télécharger</button>
                    <button onClick={() => navigate('/template-documentation')} className="documentation__item__back-button">Retour</button>
                    </div>
                </div>
            </div>
        </div>  )
}

export default DocumentationItemTemplate