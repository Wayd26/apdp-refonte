import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const HeroSection = () => {
    const [active, setActive] = useState("")
  return (
    <div>
        <div className="big__section"></div>
        {/* <div class="submenu__section">
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Activités' ? 'submenu__item submenu__item__active' :'submenu__item'}>Activités</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Communiqués et Newsletters'? 'submenu__item submenu__item__active' :'submenu__item'}>Communiqués et Newsletters</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Sondages' ? 'submenu__item submenu__item__active' :'submenu__item'}>Sondages</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Evènements' ? 'submenu__item submenu__item__active' :'submenu__item'}>Evènements</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Arnaque du mois' ? 'submenu__item submenu__item__active' :'submenu__item'}>Arnaque du mois</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Photothèque' ? 'submenu__item submenu__item__active' :'submenu__item'}>Photothèque</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Vidéothèque' ? 'submenu__item submenu__item__active' :'submenu__item'}>Vidéothèque</div>
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Marchés Publics' ? 'submenu__item submenu__item__active' :'submenu__item'}>Marchés Publics</div>
        </div> */}
    </div>
  )
}

export default HeroSection