import React, {useState} from 'react'
import './FaqElement.css'
import {BiPlus, BiMinus} from 'react-icons/bi'

const FaqElement = (props) => {

    const { question, answer} = props;

    const [expanded, setExpanded] = useState(false)

    const handlePlusOrMinusClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div className={expanded === false ? 'faq-div-not-selected mx-auto' : 'faq-div-selected mx-auto' }>
            <div className={'row d-flex flex-nowrap justify-content-between'}>

                <div className={'faq-label col-11 m-auto'}>
                {question} 
                </div>
                
                <div className={'col'}>
                {expanded === false ? <BiPlus className={'display-more-icon'} onClick={handlePlusOrMinusClick} /> : 
                <BiMinus className={'display-less-icon'} onClick={handlePlusOrMinusClick} /> }
                </div>

            </div>
            {expanded === true && <div className={'row faq-description'}>
            {answer}
            </div>}
        </div>
    )
}

export default FaqElement
