import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ActualityItemTemplate from '../templates/ActualityItemTemplate/ActualityItemTemplate'
import DocumentationItemTemplate from '../templates/DocumentationItemTemplate/DocumentationItemTemplate';

const CoreItem = ({type}) => {

  return (
    <div>
       {type == 'documentation' ? <DocumentationItemTemplate /> :  <ActualityItemTemplate/>}
    </div>
  )
}

export default CoreItem