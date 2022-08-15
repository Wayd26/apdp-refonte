 import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel'
import FaqSection from '../../components/FaqSection/FaqSection'
import ForumDiscussionRow from '../../components/ForumDiscussionRow/ForumDiscussionRow'
import { getAllBlogs, getAllForums, getATypeOfArticles } from '../../http/http'
import "./ForumDiscusion.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
 
 const ForumDiscusion = () => {

    const navigate = useNavigate;
    const [discussions, setDiscussions] = React.useState([]);
    const [title, setTitle] = React.useState([]);
  
  
  
    const loadForumDiscussionData = async () => {
    
     const resp = await getAllBlogs()
        
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            setDiscussions(resp.data.data)
        }
    }
    
    React.useEffect(() => {
        loadForumDiscussionData() ;
      console.log("discussions data ", discussions)       
    }, [])

     return (
         <div style={{background: "#F7F7F7"}}>
             {/* <ActualiteCarousel /> */}

            <div className="forum-discussion-box">
                <p className="forum-discussion-title">FORUM DE DISCUSSION</p>
                {/* <p className="forum-discussion-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, </p> */}
            {discussions.length != 0 ? discussions?.map((discussion, index) => <ForumDiscussionRow key={"fd"+index} data={discussion} />) : <h2>Aucune Discussion</h2> }
            
            </div>


             {/* <FaqSection /> */}
         </div>
     )
 }
 
 export default ForumDiscusion
 