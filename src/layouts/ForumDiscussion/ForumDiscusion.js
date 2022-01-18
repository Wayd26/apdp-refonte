 import React from 'react'
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel'
import FaqSection from '../../components/FaqSection/FaqSection'
import ForumDiscussionRow from '../../components/ForumDiscussionRow/ForumDiscussionRow'
 import "./ForumDiscusion.css"
 
 const ForumDiscusion = () => {
     return (
         <div style={{background: "#F7F7F7"}}>
             {/* <ActualiteCarousel /> */}

            <div className="forum-discussion-box">
                <p className="forum-discussion-title">FORUM DE DISCUSSION</p>
                <p className="forum-discussion-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, </p>
            <ForumDiscussionRow />
            <ForumDiscussionRow />
            <ForumDiscussionRow />
            </div>


             {/* <FaqSection /> */}
         </div>
     )
 }
 
 export default ForumDiscusion
 