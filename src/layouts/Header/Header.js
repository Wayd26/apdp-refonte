import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import apdp_logo from "../../assets/images/logoapdp.svg"
import NavBar from './NavBar';
import './Header.css';
import {BASE_URL} from "../../constants/Constant";
import code_numerique from "../../assets/documents/CODE_DU_NUMERIQUE_DU BENIN_EDITION 2019_ADN.pdf";
import {getATypeOfArticles} from '../../http/http';



const Header = () => {


    const [isOpen,setIsOpen] = useState(false)

    const [breaknews, setBreaknews] = useState([]);

    const loadBreaknewsData = async () => {
        const resp = await getATypeOfArticles("breaknews")
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp.data)
            setBreaknews(resp.data.data)
        }
    }
  
    
    useEffect(() => {
        loadBreaknewsData() ;
        console.log("Breaknews data ", breaknews)       
    }, [])


    const toggle_modal = () => {
        setIsOpen(!isOpen)
    }
    const goHome = () => {
        window.location.replace("/");
    } 

    const handleClickApdpInfo = () => {
        window.location.replace("/mission");
    }

    const handleClickRecommandations = () => {
        window.location.replace("/recommandations");
    }

//     useEffect(() => {
//         axios.get(BASE_URL)
// .then(response => {
// console.log(response);
// });
//      }, [])

    return (
        <React.Fragment>
                <div id={"header"}>
                    <div className="header-block-1">
                    <Row className={"d-flex flex-nowrap"}>
                        {/* <Col xs={2} >
                            <span style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "black",
                                color: "white",
                                width: 90,
                                maxHeight: "110%",
                                zIndex: 100,
                                position: 'absolute'
                            }}
                            >Alerte info <i className="ri-volume-up-fill" style={{color: "#b9a180", marginLeft: 2}}></i></span>
                        </Col> */}
                        <Col className="header-animate-text animate-text-span">
                            <span className={"animate-text-span d-flex flex-nowrap"}><span className={"animate-text-separator"}> # </span>Aut perspiciatis voluptatibus  inventore voluptatibus consequuntur enim autem inventore<span className={"animate-text-separator"}> # </span></span> 

                        </Col>
                            </Row>
                    </div>

                    <div className="header-block-2">
                        
                            {/* <a href='/'> */}

                                <div style={{cursor: "pointer"}} onClick={goHome}>
                                    {/* <img src={apdp_logo} className="logo" /> */}
                                    <object style={{cursor: "pointer"}}  data={apdp_logo} className="logo" type="image/svg+xml"></object>
                                </div>
                            {/* </a> */}
                            
                                <div className=" d-none d-md-flex header-block-2-div-2 d-flex flex-row justify-content-around">
                                {/* <div className=" row d-flex  justify-content-around"> */}
                                    <div className="col" style={{color: "#292929", fontFamily: "Montserrat", fontWeight: "bold", cursor: "pointer"}}> <a className="code_numerique" target={"_blank"} href={code_numerique} rel={"noopener noreferer"} > CODE DU NUMERIQUE </a> </div>
                                    <div className="col" style={{color: "#292929", fontFamily: "Montserrat", fontWeight: "bold", cursor: "pointer"}} onClick={handleClickRecommandations}> RECOMMANDATIONS</div>
                                    <div className="col" style={{color: "#292929", fontFamily: "Montserrat", fontWeight: "bold", cursor: "pointer"}} onClick={handleClickApdpInfo}> CONNAITRE L'APDP</div>
                                </div>
                            
                            
                                <div>
                                    <Button color="primary" onClick={toggle_modal} className="client-espace-button"><h8>EN</h8></Button>
                                </div>

                               
                              
                    </div>

                    <div className="header-block-3">
                        <NavBar/>
                    </div>
                    
                </div>     
            </React.Fragment>
    )
}

export default Header
