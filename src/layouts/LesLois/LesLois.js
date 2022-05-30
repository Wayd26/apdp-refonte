import React, {useState, useEffect} from 'react'
import LoiCard from '../../components/LoiCard/LoiCard';
import "./LesLois.css"
import {getATypeOfArticles} from '../../http/http';


const LesLois = () => {

    const [lois, setLois] = useState();

    const loadLoisData = async () => {
        const resp = await getATypeOfArticles("lois")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setLois(resp.data.data)
        }
    }
    
    useEffect(() => {
        loadLoisData()        
    }, [])
    
    return (
        
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
            <p className="lois-title">LOIS</p>

            <div className="lois-container row d-flex justify-content-around">
            {lois ? <>{lois.map((loi, index) =>
                <LoiCard data={loi} /> )}</> : <h1> Aucune Loi </h1> 
                }
            </div>
        </div>
    )
}

export default LesLois
