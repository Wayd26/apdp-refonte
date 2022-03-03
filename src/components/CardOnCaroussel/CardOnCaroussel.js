import React from 'react'
import './CardOnCaroussel.css'

const CardOnCaroussel = (props) => {
    const {title, subtitle} = props;
    return (
        <div className={'card-on-caroussel mx-auto mb-5'}>

            <p className={'card-on-caroussel-title'}>{title}</p>
            <p className={'card-on-caroussel-description'}>{subtitle}</p>
            {/* <button className={'card-on-caroussel-button'}>Lire plus</button> */}
        </div>
    )
}

export default CardOnCaroussel
