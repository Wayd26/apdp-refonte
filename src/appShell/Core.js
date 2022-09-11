import React, { useState, useEffect } from 'react'
import ActualityListTemplate from '../templates/ActualityListTemplate/ActualityListTemplate'

const Core = () => {


    const [subMenu, setSubMenu] = useState()
    const [subSubMenu, setSubSubMenu] = useState()

    useEffect(() => {
        let temp1 = JSON.parse(localStorage.getItem('subMenu'))
        // let temp2 = localStorage.getItem('subSubMenu') != null && JSON.parse(localStorage.getItem('subSubMenu'))
      setSubMenu(temp1)
    //   setSubSubMenu(temp2)
    }, [localStorage.getItem('subSubMenu'), localStorage.getItem('subMenu')], subMenu, subSubMenu)
    
  return (
    <div>
        {/* {JSON.stringify(subSubMenu)} */}
        {/* {JSON.stringify(subMenu)} */}
        <ActualityListTemplate />
    </div>
  )
}

export default Core