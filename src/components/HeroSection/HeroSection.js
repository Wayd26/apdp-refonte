import React, { useState, useEffect } from 'react'
import './HeroSection.css'

const HeroSection = () => {
    const [active, setActive] = useState("")
  return (
    <div>
        <div className="big__section"></div>
        {/* <div class="submenu__section">
            <div onClick={e => setActive(e.target.innerHTML)} className={active == 'Activités' ? 'submenu__item submenu__item__active' :'submenu__item'}>{JSON.parse(localStorage.getItem('active-menu'))?.name}</div>
            
        </div> */}
    </div>
  )
}

export default HeroSection