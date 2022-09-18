import React, { useState, useEffect } from 'react'
import { getATypeOfArticles } from '../http/http'
import ActualityListTemplate from '../templates/ActualityListTemplate/ActualityListTemplate'
import DocumentationListTemplate from '../templates/DocumentationListTemplate/DocumentationListTemplate'
import FaqTemplate from '../templates/FaqTemplate/FaqTemplate'
import MemberListTemplate from '../templates/MemberListTemplate/MemberListTemplate'
import VideothequeTemplate from '../templates/VideothequeTemplate/VideothequeTemplate'

const Core = () => {


    const [activeMenu, setActiveMenu] = useState(null)

    useEffect(() => {
      if(activeMenu === null ){var temp = JSON.parse(localStorage.getItem('active-menu'))
    setActiveMenu(temp)
    console.log("temp ", temp)
  }
  }, [activeMenu, JSON.parse(localStorage.getItem('active-menu'))])
    
  return (
    <div>
      
        {/* <h2>Here is the subSubMenu</h2>
        <h1>{JSON.stringify(subSubMenu)}</h1>
        <br/>
        <h2>Here is the subMenu</h2>
        <h1>{JSON.stringify(subMenu)}</h1> */}
        {activeMenu?.model === "actualites" && <ActualityListTemplate />}
        {activeMenu?.model === "communiques" && <ActualityListTemplate />}
        {activeMenu?.model === "evenements" && <ActualityListTemplate />}
        
        {/* <DocumentationListTemplate /> */}
        {/* <MemberListTemplate /> */}
        {/* <VideothequeTemplate /> */}
        {/* <FaqTemplate /> */}
    </div>
  )
}

export default Core