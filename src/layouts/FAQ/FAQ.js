import React, {useState, useEffect} from 'react';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel'
import FaqSection from '../../components/FaqSection/FaqSection'
import "./FAQ.css";
import all_faq_folders from '../../assets/icons/allfaqs-folders.svg'
import faq_image from '../../assets/icons/faq-image.svg'
import {BiSearchAlt} from "react-icons/bi"
import {getATypeOfArticles, getFaq} from '../../http/http';
import FaqElement from '../../components/FaqElement/FaqElement';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const FAQ = () => {

    const [faq, setFaq] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearchText(e.target.value)
      }

    const loadFaqData = async () => {
        const resp = await getFaq()
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setFaq(resp.data.data)
        }
    }
    
    useEffect(() => {
        loadFaqData()        
    }, [])
    
    useEffect(() => {
     console.log(faq)
    }, [faq])
    
    return (
        <div style={{background: "#F7F7F7"}}>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Régime de protection de deonnées</Breadcrumb.Item>
                <Breadcrumb.Item active>FAQ</Breadcrumb.Item>
            </Breadcrumb>
            {/* <ActualiteCarousel /> */}
            <div className="faq-container">

                <img src={faq_image} className="faq-image" />

                {/* <p className="faq-title">FOIRE AUX QUESTIONS - TOUTES LES FAQS</p> */}
                <p className="faq-allfaq">
                    <img src={all_faq_folders} className="faq-allfaq-img"/>
                    FOIRE AUX QUESTIONS - TOUTES LES FAQS
                </p>
                {/* <p className="faq-select-category">SÉLECTIONNER LA CATÉGORIE DE VOTRE QUESTION</p> */}
                <div className="faq-input-container  flex-nowrap">
                    <BiSearchAlt className="faq-input-icon"/>
                    <input className="faq-input" value={searchText} onChange={(e) => handleSearch(e)} placeholder="Rechercher dans la FAQ"/>

                   
                </div>
                
                {/* <p className="faq-see-allfaq">Voir toutes les questions fréquemment posées</p> */}
            </div>
           
            {faq?.length != 0 && <FaqSection data={faq
                      .filter((q) => {
                        return q.question?.toLowerCase()?.indexOf(searchText?.toLowerCase()) > -1
                      })}/>}
            
        </div>
    )
}

export default FAQ
