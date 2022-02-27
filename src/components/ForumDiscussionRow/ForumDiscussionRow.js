import React from 'react'
import "./ForumDiscussionRow.css"
import img5 from "../../assets/images/img5.jpg"
import {BsFillCalendarCheckFill} from "react-icons/bs"
import {TiMessages} from "react-icons/ti"

const ForumDiscussionRow = () => {
    return (
        <div className="forum-discussion-row-container">
            <div className="row">
                <div className="forum-discussion-row-image-container">
                    <img src={img5} className="forum-discussion-row-image" />
                </div>
                <div className="forum-discussion-row-details-container">
                    <p className="forum-discussion-row-details-title">Discussion 1</p>
                    <p className="forum-discussion-row-details-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, et dolore magna aliquyam eratos et acco dolores et ea rebum.</p>
                    <div className="forum-discussion-row-details-info d-flex flex-wrap">
                        <span>

                        <BsFillCalendarCheckFill className="forum-discussion-row-details-info-icon" />
                        <span className="mx-2"> 15/01/2020</span>
                        </span>
                        <span>
                        <TiMessages className="forum-discussion-row-details-info-icon"/>
                        <span className="mx-2"> 26 réponses</span>
                        </span>
                    </div>
                </div>
                <div className="forum-discussion-row-button-container">
                    <button className="forum-discussion-row-button">Plus de détails <span className="forum-discussion-row-button-span">ok</span></button>
                </div>
            </div>
        </div>
    )
}

export default ForumDiscussionRow
