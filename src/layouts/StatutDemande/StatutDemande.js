import React, {useState, useEffect} from 'react';
import "./StatutDemande.css";
import ActualiteCarousel from "../../components/ActualiteCarousel/ActualiteCarousel";
import {getRequestedQuery} from '../../http/http';
import {useNavigate} from "react-router-dom";
 


const StatutDemande = () => {

    const navigate = useNavigate()
    const [status, setStatus] = useState();
    const [query, setQuery] = useState({});

    const loadQueryData = async (e) => {
        // const resp = await getRequestedQuery("StatutDemande");
        // if(resp.response && resp.response.status !== 200){
        //     console.log("data error ", resp.response);
        // } else {
        //     setQuery(resp.data.data);
        // }
        e.preventDefault();
        setQuery({
            "id": "FEDA_38901334",
            "form_type": "Demande",
            "state": "traité"
        });
    }
    
    
    useEffect(() => {
        console.log("Query data ", query);
        console.log("Status data ", status);
    }, [])
    
    return (
        <div className={"query"} id={"query"} style={{ paddingTop: "40px", paddingBottom: "40px", width: "80%", margin: "auto"}}>           
            <ActualiteCarousel/>
            {/* Title */}
            <h4 className={'page-title-query'} style={{background: "#4385f6 0% 0% no-repeat padding-box", paddingTop: "40px", paddingBottom: "40px", borderRadius: "5px",}}>VÉRIFIER LE STATUT D'UNE DEMANDE</h4>


            {/* "Check status" input */}
            <form onSubmit={loadQueryData} style={{background: "#ffffff", paddingTop: "40px", paddingBottom: "40px", paddingRight: "10%", paddingLeft: "10%", borderRadius: "5px", textAlign: "left",}}>
                <p style={{color: "gray", fontWeight: "bold", fontSize: "20px",}}>Veuillez renseigner le numéro de référence de votre demande</p>
                <p style={{color: "gray"}}>Rechercher par :</p>
                <div style={{ color: "black" }}>
                    <input type="radio" id="ref_number" name="ref_number" value="ref_number" checked/>
                    <label style={{ fontWeight: "normal", fontSize: "12px", top: "-2px", right: "-5px", position: "relative", }} for="ref_number">Référence de la demande</label>
                </div>
                <div id='input_div'>
                    <label style={{ fontWeight: "normal", top: "15px", right: "-10px", position: "relative", backgroundColor: "white", padding: "0px 2px 0px 2px", fontSize: "12px", }} for="ref_number">Référence de la demande</label><br/>
                    <input  style={{ border: "1.5px solid black", borderRadius: "5px", width: "50%", height: "50px", padding: "0px 15px", minWidth: "200px", }} type="text" id="ref_number_input" name="ref_number_input" required/>
                </div>
                <button type='submit' style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "darkorange", color: "white", fontWeight: "bold", }}>Vérifier</button>
            </form>

            {/* Status result */}
            { query.state ? <div>
                <h4 style={{ paddingTop: "40px", paddingBottom: "40px"}}>Demande N° {query.id}</h4>
                <div style={{ backgroundColor: "rgb(225, 225, 225)", padding: "40px", borderRadius: "15px", }}>
                    <h4 style={{ paddingTop: "40px", paddingBottom: "40px"}}>{query.form_type}</h4>
                    <p style={{ padding: "40px 0px", }}>Statut: <b style={{ color: "#4385f6" }}>{query.state.toUpperCase()}</b> </p>
                </div>
            </div>:<div></div>
            }
        </div>
    )
}

export default StatutDemande;
