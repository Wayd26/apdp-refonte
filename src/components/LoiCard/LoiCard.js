import React, { useEffect } from 'react';
import "./LoiCard.css";
import img_loi from "../../assets/icons/document.svg"
import {useNavigate} from "react-router-dom"

const LoiCard = (props) => {

    const {data} = props;
    useEffect(()=>{console.log(data)}, [])

    const navigate = useNavigate();

    const handleButtonClicked = (id) =>{
        navigate(`/lois/${id}`)
    }
    return (
        <div className="loi-card">
            <img  src={img_loi} className="loi-card-image"/>
            <p className="loi-card-title">{data.title}</p>
            <p className="loi-card-description">{data.sub_title}</p>
            <a href={data.image_url} download>
            <button 
            // onClick={() =>handleButtonClicked(data.id)}
             className="loi-card-button">Télécharger</button>
            </a>
        </div>
    )
}

export default LoiCard
