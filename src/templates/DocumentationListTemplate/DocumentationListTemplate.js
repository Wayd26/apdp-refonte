import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import TemplateDocumentationListCard from '../../components/TemplateDocumentationListCard/TemplateDocumentationListCard'
import './DocumentationListTemplate.css'

const DocumentationListTemplate = () => {
  return (
    <div className='pb-5' >
        <HeroSection />

      {[0, 1, 2, 3, 4].map(item => <TemplateDocumentationListCard />)}
    </div>
  )
}

export default DocumentationListTemplate