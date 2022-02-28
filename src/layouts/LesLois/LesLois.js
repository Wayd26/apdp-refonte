import React, {useState, useEffect} from 'react'
import LoiCard from '../../components/LoiCard/LoiCard';
import "./LesLois.css"
import {getATypeOfArticles} from '../../http/http';


const LesLois = () => {

    const [communiques, setCommuniques] = useState();

    const loadCommuniquesData = async () => {
        const resp = await getATypeOfArticles("communiques")
        if(resp.response && resp.response.status !== 200){
            console.log("error ",resp.response)
        } else {
            console.log("data ",resp.data.data)
            setCommuniques(resp.data)
        }
    }
    
    useEffect(() => {
        loadCommuniquesData()        
    }, [])
    
    return (
        
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>
            <p className="lois-title">LOIS</p>

            <div className="lois-container row d-flex justify-content-between">
                <LoiCard />
                <LoiCard />
            </div>
        </div>
    )
}

export default LesLois
