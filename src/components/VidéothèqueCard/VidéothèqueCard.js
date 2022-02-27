import React from 'react';
import "./VidéothèqueCard.css"

const VidéothèqueCard = () => {
  return <div className="videotheque-card">
  {/* <img src={image} className="videotheque-card-video" /> */}
  <iframe className="videotheque-card-video" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
  <p className="videotheque-card-label">VIDEO</p>
</div>;
};

export default VidéothèqueCard;
