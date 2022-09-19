import React, { useState, useEffect } from 'react'
import { getATypeOfArticles } from '../http/http'
import ActualityListTemplate from '../templates/ActualityListTemplate/ActualityListTemplate'
import InformationTemplate from '../templates/InformationTemplate/InformationTemplate'
import DocumentationListTemplate from '../templates/DocumentationListTemplate/DocumentationListTemplate'
import FaqTemplate from '../templates/FaqTemplate/FaqTemplate'
import MemberItemTemplate from '../templates/MemberItemTemplate/MemberItemTemplate'
import MemberListTemplate from '../templates/MemberListTemplate/MemberListTemplate'
import VideothequeTemplate from '../templates/VideothequeTemplate/VideothequeTemplate'

const Core = ({model}) => {

  return (
    <div>
        {model == "actualites" && <ActualityListTemplate />}
        {model == "communiques" && <ActualityListTemplate />}
        {model == "documentations" && <DocumentationListTemplate />}
        {model == "membres" && <MemberListTemplate />}
        {model == "videotheque" && <VideothequeTemplate />}
        {model == "biographique" && <MemberItemTemplate />}
        {model == "faqs" && <FaqTemplate />}
        {model == "mise_en_conformite" && <InformationTemplate />}
    </div>
  )
}

export default Core