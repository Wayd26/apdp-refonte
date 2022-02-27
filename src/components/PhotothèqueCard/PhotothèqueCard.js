import React from 'react';
import "./PhotothèqueCard.css";
import image from "../../assets/images/img7.jpg"

const PhotothèqueCard = () => {
  return <div className="phototheque-card">
    <img src={image} className="phototheque-card-image" />
    <p className="phototheque-card-label">IMAGE</p>
  </div>;
};

export default PhotothèqueCard;
