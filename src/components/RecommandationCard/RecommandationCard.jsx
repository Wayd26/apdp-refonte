import React from 'react';
import "./RecommandationCard.css"

const RecommandationCard = (props) => {
    const {data} = props;
    React.useEffect(()=>{console.log(data)}, [])
  return (
    <div className="recommandation-card">
            <img  src={data.image_url} className="recommandation-card-image"/>
            <p className="recommandation-card-title">{data.title}</p>
            <p  className="recommandation-card-description pt-2" 
                dangerouslySetInnerHTML={{__html: (data && data.sub_title)}}></p>
            {/* <div dangerouslySetInnerHTML={{__html: (activityData && activityData[0]?.content)}}></div> */}

            {/* <a href={data.image_url} download>
            <button className="recommandation-card-button">Télécharger</button>
            </a> */}
        </div>
  )
}

export default RecommandationCard