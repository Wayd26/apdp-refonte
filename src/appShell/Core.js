import React, { useState, useEffect } from 'react'
import { getATypeOfArticles } from '../http/http'
import ActualityListTemplate from '../templates/ActualityListTemplate/ActualityListTemplate'
import DocumentationListTemplate from '../templates/DocumentationListTemplate/DocumentationListTemplate'
import FaqTemplate from '../templates/FaqTemplate/FaqTemplate'
import MemberListTemplate from '../templates/MemberListTemplate/MemberListTemplate'
import VideothequeTemplate from '../templates/VideothequeTemplate/VideothequeTemplate'

const Core = ({model}) => {

  return (
    <div>
        {model == "actualites" && <ActualityListTemplate />}
        {model == "communiques" && <ActualityListTemplate />}
        {model == "documentations" && <DocumentationListTemplate />}
        {model == "inconnu" && <MemberListTemplate />}
        {model == "videotheque" && <VideothequeTemplate />}
        {model == "inconnu2" && <FaqTemplate />}
    </div>
  )
}

export default Core