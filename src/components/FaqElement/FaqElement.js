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
                    Lorem Ipsum Dolor Sit Amet, Consectetur agna Aliqua ? 
                </div>
                
                <div className={'col'}>
                {expanded == false ? <BiPlus className={'display-more-icon'} onClick={handlePlusOrMinusClick} /> : 
                <BiMinus className={'display-less-icon'} onClick={handlePlusOrMinusClick} /> }
                </div>

            </div>
            {expanded == true && <div className={'row faq-description'}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ultricies Mi Eget Mauris Pharetra. Amet Risus Nullam Eget Felis Eget Nunc Lobortis. Purus In Massa Tempor Nec. Porta Nibh Venenatis Cras Sed. Viverra Ipsum Nunc Aliquet Bibendum Enim. Risus Pretium Quam Vulputate Dignissim Suspendisse In. Non Quam Lacus Suspendisse Faucibus Interdum Posuere Lorem Ipsum Dolor. Facilisi Cras Fermentum Odio Eu Feugiat Pretium Nibh Ipsum. Risus Sed Vulputate Odio Ut Enim Blandit Volutpat Maecenas. Netus Et Malesuada Fames Ac Turpis Egestas. Sed Arcu Non Odio Euismod Lacinia At Quis Risus Sed. Praesent Elementum Facilisis Leo Vel Fringilla Est Ullamcorper. Ullamcorper Dignissim Cras Tincidunt Lobortis Feugiat Vivamus. Elit Pellentesque Habitant Morbi Tristique Senectus Et Netus. Morbi Tincidunt Augue Interdum Velit.
            </div>}
        </div>
    )
}

export default FaqElement
