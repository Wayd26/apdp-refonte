import React from 'react'
import './ActualityItemTemplate.css'
import image from '.././../assets/images/img7.jpg'
import { useNavigate } from 'react-router-dom'


const ActualityItemTemplate = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div class="actuality__item-template__header">Activité</div>
            <div class="actuality__item-template__content">
                <img src={image} alt="" />

                <div class="text-content">
                    <div class="actuality__item__title">Lorem are many variations</div>
                    <div class="actuality__item__subtitle-content">
                        <div class="actuality__item__subtitle">Lorem are many variations variations au</div>
                    </div>
                    <div class="actuality__item__description">
                        Lorem Ipsum est simplement un faux texte de l'industrie de l'impression et de la composition. Le Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères et l'a brouillé pour en faire un livre de spécimens de caractères. Il a survécu non seulement à cinq siècles, mais aussi au saut dans la composition électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker comprenant des versions de Lorem Ipsum. Lorem Ipsum est simplement un faux texte de l'industrie de l'impression et de la composition. Le Lorem Ipsum est le texte factice standard de l'industrie depuis les on électronique, restant essentiellement inchangé. Il a été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des passages de Lorem Ipsum, et plus récemment avec des logiciels de publication assistée par ordinateur comme Aldus PageMaker comprenant des versions de Lorem Ipsum.
                    </div>
                    <button onClick={() => navigate('/template-actuality')} className="actuality__item__button">Retour</button>
                </div>
            </div>
        </div>
    )
}

export default ActualityItemTemplate
