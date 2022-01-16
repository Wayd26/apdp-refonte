import React from 'react'
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel'
import FaqSection from '../../components/FaqSection/FaqSection'
import "./FAQ.css";
import all_faq_folders from '../../assets/icons/allfaqs-folders.svg'
import faq_image from '../../assets/icons/faq-image.svg'
import {BiSearchAlt} from "react-icons/bi"

const FAQ = () => {
    return (
        <div style={{background: "#F7F7F7"}}>
            <ActualiteCarousel />
            <div className="faq-container">

                <img src={faq_image} className="faq-image" />

                <p className="faq-title">FOIRE AUX QUESTIONS - TOUTES LES FAQS</p>
                <p className="faq-select-category">SÉLECTIONNER LA CATÉGORIE DE VOTRE QUESTION</p>
                <div className="faq-input-container  flex-nowrap">
                    <BiSearchAlt className="faq-input-icon"/>
                    <input className="faq-input" placeholder="Rechercher dans la FAQ"/>
                </div>
                <p className="faq-allfaq">
                    <img src={all_faq_folders} className="faq-allfaq-img"/>
                    TOUTES LES FAQS
                </p>
                <p className="faq-see-allfaq">Voir toutes les questions fréquemment posées</p>
            
            </div>
            <FaqSection />
            
        </div>
    )
}

export default FAQ
