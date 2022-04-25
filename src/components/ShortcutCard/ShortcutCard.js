import React from 'react'
import './ShortcutCard.css'
import { HiLink } from 'react-icons/hi'

const ShortcutCard = (props) => {
    const { ind, label } = props;
    return (
        <div className={((ind % 2 && (ind < 4 || ind > 7)) || ((ind % 2) === 1 && (ind > 3 || ind < 8))) ? 'shortcut-card-second' : 'shortcut-card'}>
            <div className={'shortcut-icon-container mx-auto d-flex justify-content-center'}>
                <HiLink className={'shortcut-icon'} />
                
            </div>
            <p className={(ind % 2 && (ind < 4 || ind > 7)) || ((ind % 2) === 1 && (ind > 3 || ind < 8)) ? 'shortcut-text-second' : 'shortcut-text'}>{label}</p>
        </div>
    )
}

export default ShortcutCard
