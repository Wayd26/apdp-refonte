import React, { useState, useEffect } from 'react'
import { getATypeOfArticles } from '../http/http'
import ActualityListTemplate from '../templates/ActualityListTemplate/ActualityListTemplate'
import InformationTemplate from '../templates/InformationTemplate/InformationTemplate'
import DocumentationListTemplate from '../templates/DocumentationListTemplate/DocumentationListTemplate'
import FaqTemplate from '../templates/FaqTemplate/FaqTemplate'
import MemberItemTemplate from '../templates/MemberItemTemplate/MemberItemTemplate'
import MemberListTemplate from '../templates/MemberListTemplate/MemberListTemplate'
import VideothequeTemplate from '../templates/VideothequeTemplate/VideothequeTemplate'
import { useNavigate, useParams } from 'react-router-dom'

const Core = ({model}) => {

  const [redirection, setRedirection] = useState("");
  const { menu } = useParams()
  const navigate = useNavigate()


  const loadRedirectionUrlData = async () => {
    console.log("subMenu load", menu)
    const resp = await getATypeOfArticles(menu, 1)
    if (resp.response && resp.response.status !== 200) {
        console.log("data error ", resp.response)
    } else {
        console.log("data data load", resp.data.data[0].title)

        // navigate(resp.data.data[0].title)
        window.location.href = resp.data.data[0].title;

        setRedirection(resp.data?.data[0]?.title)
    }
}   

useEffect(() => {
  if(model == "redirection_url"){
    loadRedirectionUrlData();
    console.log("Articles data load", redirection)
  }
}, [menu, model])


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
        {model == "redirection_url" && <h1 className='m-auto p-5'>Chargement...</h1>}
        
    </div>
  )
}

export default Core