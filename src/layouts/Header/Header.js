import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import apdp_logo from "../../assets/images/logoapdp.svg"
import NavBar from './NavBar';
import './Header.css';
import {BASE_URL} from "../../constants/Constant"


const Header = () => {
    const [isOpen,setIsOpen] = useState(false)

    const [breaknews, setBreaknews] = useState([]);


    const toggle_modal = () => {
        setIsOpen(!isOpen)
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
                        
                            
                                <div>
                                    {/* <img src={apdp_logo} className="logo" /> */}
                                    <object data={apdp_logo} className="logo" type="image/svg+xml"></object>
                                </div>
                            
                                <div className=" d-none d-md-flex header-block-2-div-2 d-flex flex-row justify-content-around">
                                {/* <div className=" row d-flex  justify-content-around"> */}
                                    <div className="col" style={{color: "#292929", fontFamily: "Montserrat", fontWeight: "bold"}}> CODE DU NUMERIQUE </div>
                                    <div className="col" style={{color: "#292929", fontFamily: "Montserrat", fontWeight: "bold"}}> FOIRE AUX QUESTIONS</div>
                                    <div className="col" style={{color: "#292929", fontFamily: "Montserrat", fontWeight: "bold"}}> CONNAITRE L'APDP</div>
                                </div>
                            
                            
                                <div>
                                    <Button color="primary" onClick={toggle_modal} className="client-espace-button"><h8>FR</h8></Button>
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
