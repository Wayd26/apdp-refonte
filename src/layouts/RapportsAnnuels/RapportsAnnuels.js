import React, {useState, useEffect} from 'react';
import RapportAnnuelRow from '../../components/RapportAnnuelRow/RapportAnnuelRow';
import "./RapportsAnnuels.css"
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {getATypeOfArticles} from '../../http/http';
import {useNavigate} from "react-router-dom";

const RapportsAnnuels = () => {
    const navigate = useNavigate();
    const [rapports, setRapports] = useState([]);

    const loadRapportsData = async () => {
        const resp = await getATypeOfArticles("rapports_annuel")
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data.data)
            setRapports(resp.data.data)
        }
    }

    const dispatch = useDispatch();
    const appState = useSelector(state=>state, shallowEqual);
  
    
    useEffect(() => {
        loadRapportsData() ;
        console.log("Rapports data ", rapports)       
    }, [])
    return (
        <div style={{backgroundColor: "#E2E2E2", paddingTop: "40px", paddingBottom: "40px"}}>

            <div className="rapports-annuels-box">
                <p className="rapports-annuels-title">Rapports Annuels</p>

                <div className="rapports-annuels-row-box">
                    {rapports.map((item, index) => (
                        <RapportAnnuelRow period={item.period} title={item.title} description={item.description} fileUrl={item.image_url}/>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default RapportsAnnuels
