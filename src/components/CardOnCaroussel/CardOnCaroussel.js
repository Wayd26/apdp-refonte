import React from 'react'
import { useNavigate } from 'react-router-dom';
import './CardOnCaroussel.css'

const CardOnCaroussel = (props) => {
    const {id, title, subtitle} = props;
    const navigate = useNavigate();
    return (
        <div className={'card-on-caroussel m-auto'}>

            <p className={'card-on-caroussel-title'}>{title}</p>
            {/* <p className={'card-on-caroussel-description'}>{subtitle}</p> */}
            <button className={'card-on-caroussel-button'}
                    onClick={() => navigate(`/actualites/actualites/${id}`)}>Lire plus</button>
        </div>
    )
}

export default CardOnCaroussel


