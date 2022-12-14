import React from 'react'
import './ShortcutCard.css'
import { HiLink } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';


const ShortcutCard = (props) => {
    const { ind, label, link } = props;

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(link)} className={((ind % 2 && (ind < 4 || ind > 7)) || ((ind % 2) === 1 && (ind > 3 || ind < 8))) ? 'shortcut-card-second' : 'shortcut-card'}>
            <div className={'shortcut-icon-container  d-flex justify-content-center'}>
                <HiLink className={'shortcut-icon'} />
                
            </div>
            <p className={(ind % 2 && (ind < 4 || ind > 7)) || ((ind % 2) === 1 && (ind > 3 || ind < 8)) ? 'shortcut-text-second' : 'shortcut-text'}>{label}</p>
        </div>
    )
}

export default ShortcutCard
