import React, {useState, useEffect} from 'react';
import "./StatutDemande.css";
import ActualiteCarousel from "../../components/ActualiteCarousel/ActualiteCarousel";
import { ToastContainer, toast } from 'react-toastify';
import {getRequestedQuery} from '../../http/http';
import {useNavigate} from "react-router-dom";
 


const StatutDemande = () => {

    const navigate = useNavigate()
    const [status, setStatus] = useState();
    const [query, setQuery] = useState({});

    const loadQueryData = async (e) => {
        e.preventDefault();
        var ref_number = e.target[1].value.toUpperCase();
        const resp = await getRequestedQuery(ref_number);
        if(!resp.data.data.id){
            document.getElementById("ref_number_input").className = "form-control is-invalid"
        } else {
            document.getElementById("ref_number_input").className = "form-control"
            setQuery(resp.data.data);
        }
    }
    
    
    useEffect(() => {
        // console.log("Query data ", query);
        // console.log("Status data ", status);
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
                    <input className='form-control' style={{ border: "1.5px solid black", borderRadius: "5px", width: "50%", height: "50px", padding: "0px 15px", minWidth: "200px", }} type="text" id="ref_number_input" name="ref_number_input" required/>
                    <div class="invalid-feedback" style={{ padding: "0px 15px", }}>
                        Numéro de référence invalide!!!
                    </div>
                </div>
                <button type='submit' style={{ marginTop: "50px", padding: "10px", width: "200px", borderRadius: "5px", fontSize: "15px", backgroundColor: "darkorange", color: "white", fontWeight: "bold", }}>Vérifier</button>
            </form>

            {/* Status result */}
            { query.status ? <div>
                <h4 style={{ paddingTop: "40px", paddingBottom: "40px"}}>Demande N° {query.id}</h4>
                <div style={{ backgroundColor: "rgb(225, 225, 225)", padding: "40px", borderRadius: "15px", }}>
                    <h4 style={{ paddingTop: "40px", paddingBottom: "40px"}}>{query.label}</h4>
                    <p style={{ padding: "40px 0px", }}>Statut: <b style={{ color: "#4385f6" }}>{query.status.toUpperCase()}</b> </p>
                </div>
            </div>:<div></div>
            }
        </div>
    )
}

export default StatutDemande;
