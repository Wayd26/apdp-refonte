import React, { useState, useEffect } from 'react'
import ActualityListTemplate from '../templates/ActualityListTemplate/ActualityListTemplate'
import DocumentationListTemplate from '../templates/DocumentationListTemplate/DocumentationListTemplate'
import FaqTemplate from '../templates/FaqTemplate/FaqTemplate'
import MemberListTemplate from '../templates/MemberListTemplate/MemberListTemplate'
import VideothequeTemplate from '../templates/VideothequeTemplate/VideothequeTemplate'

const Core = () => {


    const [subMenu, setSubMenu] = useState()
    const [subSubMenu, setSubSubMenu] = useState()

    useEffect(() => {
        let temp1 = JSON.parse(localStorage.getItem('subMenu'))
        let temp2 = JSON.parse(localStorage.getItem('subSubMenu'))                  
      setSubMenu(temp1)
      // console.log("Temps2 ", localStorage.getItem('subSubMenu'))
      console.log("Temps2 ", temp2)
      setSubSubMenu(temp2)
    }, [subMenu, subSubMenu])
    
  return (
    <div>
        {/* <h2>Here is the subSubMenu</h2>
        <h1>{JSON.stringify(subSubMenu)}</h1>
        <br/>
        <h2>Here is the subMenu</h2>
        <h1>{JSON.stringify(subMenu)}</h1> */}
        {/* <ActualityListTemplate /> */}
        <DocumentationListTemplate />
        {/* <MemberListTemplate /> */}
        {/* <VideothequeTemplate /> */}
        {/* <FaqTemplate /> */}
    </div>
  )
}

export default Core