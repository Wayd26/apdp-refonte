import React, {useState} from 'react'
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import apdp_logo from "../../assets/images/logoapdp.svg"
import NavBar from './NavBar';
import './Header.css'

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle_modal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
                <div>
                    <div className="header-block-1">
                    <Row>
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
                        <Col>
                            <span className="header-animate-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        </Col>
                            </Row>
                    </div>

                    <div className="header-block-2">
                        
                            
                                <div>
                                    <img src={apdp_logo} className="logo"/>
                                </div>
                            
                                <div className="header-block-2-div-2 d-flex flex-row justify-content-between">
                                    <span style={{color: "#292929"}}> CODE DU NUMERIQUE </span>
                                    <span style={{color: "#292929"}}> IMPRIMER</span>
                                    <span style={{color: "#292929"}}> FORCE AUX QUESTIONS</span>
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
