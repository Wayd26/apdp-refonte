import React, { useState, useEffect } from 'react'
import './FaqTemplate.css'
import FaqSection from '../../components/FaqSection/FaqSection'
// import "../../layouts/FAQ/FAQ.css"
import all_faq_folders from '../../assets/icons/allfaqs-folders.svg'
import faq_image from '../../assets/icons/faq-image.svg'
import { BiSearchAlt } from "react-icons/bi"
import { getATypeOfArticles, getFaq } from '../../http/http';
import FaqElement from '../../components/FaqElement/FaqElement';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { ImTelegram } from 'react-icons/im';
import HeroSection from '../../components/HeroSection/HeroSection'

const FaqTemplate = () => {
    const [faq, setFaq] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [thematics, setThematics] = useState([]);
    const [thematicSelected, setThematicSelected] = useState("")

    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearchText(e.target.value)
    }

    const loadFaqData = async () => {
        let thematicsArray = [];
        let uniqueThematics = [];
        const resp = await getFaq(thematicSelected)
        if (resp.response && resp.response.status !== 200) {
            console.log("error ", resp.response)
        } else {

            console.log("data faq", resp.data)
            setFaq(resp.data.data)
            if(resp.data?.data?.length !== []) {
               
                resp.data?.data?.map((item, index) => 
                    thematicsArray.push(item.thematic.toUpperCase())
                    // thematicsArray.push({"id": index, "label": item.thematic})
                    // console.log(index, "===> ", item)
                )
            }
            console.log("thematicsArray ", thematicsArray)
        }
        if(thematics.length == 0){let temp = [...new Set(thematicsArray)];
        temp.map((item, index) => 
        uniqueThematics.push({"id": index, "label": item}))
        setThematics(uniqueThematics)}
    }

    useEffect(() => {
        loadFaqData()
    }, [thematicSelected])

    useEffect(() => {
        console.log("thematics ", thematics)
    }, [thematics])

    return (
        <div style={{ background: "#F7F7F7", marginBottom: 40 }}>
            {/* <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Régime de protection de deonnées</Breadcrumb.Item>
                <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <ActualiteCarousel /> */}
        <HeroSection />

            <div className="faq-container">

                <img src={faq_image} className="faq-image" />

                {/* <p className="faq-title">FOIRE AUX QUESTIONS - TOUTES LES FAQS</p> */}
                <p className="faq-allfaq">
                    <img src={all_faq_folders} className="faq-allfaq-img" />
                    FOIRE AUX QUESTIONS - TOUTES LES FAQS
                </p>
                {/* <p className="faq-select-category">SÉLECTIONNER LA CATÉGORIE DE VOTRE QUESTION</p> */}
                <div className="faq-input-container  flex-nowrap">
                    <BiSearchAlt className="faq-input-icon" />
                    <input className="faq-input" value={searchText} onChange={(e) => handleSearch(e)} placeholder="Rechercher..." />
                </div>

                <div className="faq-input-container  flex-nowrap">
                    <select onChange={(e) => setThematicSelected(e.target.value)} name='thematic' id="faq-thematic" className='w-100 thematic-select' style={{height: "100%", border: "none"}}>
                        <option value="" disabled="disabled" selected="true">Choisir Thématique</option>
                        <option value="">Tous</option> 
                       {thematics.map(item => <option key={item.id} value={item.label}>{item.label}</option>)}
                    </select>
                </div>

                {/* <p className="faq-see-allfaq">Voir toutes les questions fréquemment posées</p> */}
            </div>

            {faq?.length != 0 && <FaqSection data={faq
                .filter((q) => {
                    return q.question?.toLowerCase()?.indexOf(searchText?.toLowerCase()) > -1
                })} />}

        </div>
    )
}

export default FaqTemplate