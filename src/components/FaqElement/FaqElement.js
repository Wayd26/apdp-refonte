import React, {useState} from 'react'
import './FaqElement.css'
import {BiPlus, BiMinus} from 'react-icons/bi'

const FaqElement = () => {

    const [expanded, setExpanded] = useState(false)

    const handlePlusOrMinusClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div className={expanded == false ? 'faq-div-not-selected mx-auto' : 'faq-div-selected mx-auto' }>
            <div className={'row d-flex flex-nowrap justify-content-between'}>

                <div className={'faq-label col-11 m-auto'}>
                Comment protéger mes données sur internet ? 
                </div>
                
                <div className={'col'}>
                {expanded == false ? <BiPlus className={'display-more-icon'} onClick={handlePlusOrMinusClick} /> : 
                <BiMinus className={'display-less-icon'} onClick={handlePlusOrMinusClick} /> }
                </div>

            </div>
            {expanded == true && <div className={'row faq-description'}>
            Protéger ses données privées est devenu un véritable casse-tête. Alors que la journée mondiale de la protection des données privées fêtait ce 28 janvier son dixième anniversaire, les internautes sont de plus en plus nombreux à se pencher sur la protection de leurs données.

De la simple collecte de données de navigation pour vous proposer des publicités ciblées au traçage de votre lèche-vitrine en ligne générant un e-mail vous rappelant de valider votre panier d’achat, la collecte des données est devenue aussi insidieuse que permanente. L’internaute peu aguerri, qui n’y prête bien souvent que très peu d’intérêt, voit alors ses données personnelles utilisées et monétisées à son insu. Encore pire, avec toutes ces données récoltées sur vos activités en ligne, les géants du web sont en mesure de vous placer dans des catégories très précises pour optimiser au mieux leur ciblage.

Pour éviter ce genre de désagréments, il est possible d’adapter ses outils, et de modifier ses habitudes. A commencer par la configuration de son navigateur web. Depuis le 25 mai 2018, le RGPD impose aux sites web de demander l’autorisation de l’internaute avant de déposer des cookies sur son ordinateur. Si beaucoup d’internautes ignorent la finalité de ces petits fichiers au nom inoffensif, il est nécessaire de s’arrêter un instant pour comprendre de quoi il en retourne. Plutôt que d’accepter bêtement tout ce que proposent les bannières RGPD pour s’en débarrasser, mieux vaut prendre certaines précautions.

Mais pour protéger un tant soit peu ses données personnelles, il est parfois indispensable de tirer un trait sur certains outils ou plates-formes trop permissifs pour adopter des services plus respectueux de votre vie privée. Du navigateur web au moteur de recherche, en passant par les services de messagerie ou les fournisseurs d’email, nous avons sélectionné pour vous les meilleurs outils et les bonnes pratiques à suivre pour vous aider à préserver votre vie privée en ligne.
            </div>}
        </div>
    )
}

export default FaqElement
