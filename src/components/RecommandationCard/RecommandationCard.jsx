import React from 'react';
import "./RecommandationCard.css";
import {FiDownload} from "react-icons/fi";


const RecommandationCard = (props) => {
    const {data} = props;
    React.useEffect(()=>{console.log(data)}, [])
  return (
    <div className="recommandation-card">
            {/* <img src={data.image_url} className="recommandation-card-image"/> */}
            <div style={{ backgroundImage: `url('${data.image_url}'`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: 'auto', marginTop: '-50px', marginBottom: '20px', }} className="recommandation-card-image"></div>
            <p className="recommandation-card-title">{data.title}</p>
            <p  className="recommandation-card-description pt-2" 
                dangerouslySetInnerHTML={{__html: (data && data.sub_title)}}></p>
            {/* <div dangerouslySetInnerHTML={{__html: (activityData && activityData[0]?.content)}}></div> */}

            <a href={data && data[0]?.document_url[0]} download>
              <button className="espace-rt-card-button">Télécharger <FiDownload className="espace-rt-card-button-icon" /></button>
              </a>
        </div>
  )
}

export default RecommandationCard