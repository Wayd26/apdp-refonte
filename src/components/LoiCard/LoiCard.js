import React, { useEffect } from 'react';
import "./LoiCard.css";
import img_opposition from "../../assets/icons/droit-opposition.jpg"
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
            <img  src={data.image[0]} className="loi-card-image"/>
            <p className="loi-card-title">{data.title}</p>
            <p className="loi-card-description">{data.sub_title}</p>
            <button onClick={() =>handleButtonClicked(data.id)} className="loi-card-button">EN SAVOIR PLUS</button>
        </div>
    )
}

export default LoiCard
