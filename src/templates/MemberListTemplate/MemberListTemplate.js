import React from 'react'
import TemplateMemberListBureauCard from '../../components/TemplateMemberListBureauCard/TemplateMemberListBureauCard'
import TemplateMemberListConseillerCard from '../../components/TemplateMemberListConseillerCard/TemplateMemberListConseillerCard'
import './MemberListTemplate.css'

const MemberListTemplate = () => {
  return (
    <div>
        <div class="member__list-template-card">
            <div class="member__list-template__header mb-5">Le Bureau</div>
            <div class="member__list-template-bureau-container">
                <TemplateMemberListBureauCard />
                <TemplateMemberListBureauCard />
            </div>
            <div class="member__list-template__header">Les Conseillers</div>
            <div class="member__list-template-conseiller-container d-flex flex-wrap justify-content-between">
                <TemplateMemberListConseillerCard />
                <TemplateMemberListConseillerCard />
                <TemplateMemberListConseillerCard />
                <TemplateMemberListConseillerCard />
                <TemplateMemberListConseillerCard />
                <TemplateMemberListConseillerCard />
            </div>

        </div>
    </div>
  )
}

export default MemberListTemplate