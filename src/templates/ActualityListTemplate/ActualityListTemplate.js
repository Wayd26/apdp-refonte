import React, { useState, useEffect} from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import TemplateActualityListListCard from '../../components/TemplateActualityListCard/TemplateActualityListCard'
import './ActualityListTemplate.css'

const ActualityListTemplate = () => {
  return (
    <div className='pb-5' >
        <HeroSection />

      {[0, 1, 2, 3, 4].map(item => <TemplateActualityListListCard />)}
    </div>
  )
}

export default ActualityListTemplate