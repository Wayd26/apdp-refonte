import React from 'react'
import TemplateVideothequeCard from '../../components/TemplateVideothequeCard/TemplateVideothequeCard'
import './VideothequeTemplate.css'


const VideothequeTemplate = () => {
  return (
    <div>
        <div class="videotheque-container">
      {[0, 1, 2, 3, 4].map(item => <TemplateVideothequeCard />)}
        </div>
    </div>
  )
}

export default VideothequeTemplate