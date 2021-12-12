import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    InputGroup,
    InputGroupText,
    Input
  } from 'reactstrap';
  import { Link } from "react-router-dom";

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    
    toggle = () => this.setState({isOpen: !this.state.isOpen})

    componentDidMount(){
        console.log(window.location)
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light expand="sm" style={{backgroundColor: "#2b71d3"}}  >
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="nav-bar-custom">
                        <Nav className="mr-auto" navbar>
                            <h5>
                                <NavItem className="nav-item-custom">
                                <NavLink className="nav-title"  href="/" active={window.location.pathname === "/"}>ACTUALITÉS <i class="ri-arrow-drop-down-fill fw-bold" style={{fontSize: 20}} ></i></NavLink>
                                </NavItem>
                            </h5>
                            
                            <h5>
                                <NavItem className="nav-item-custom">
                                <NavLink className="nav-title"  href="/" active={window.location.pathname === "/donne"}>DONNÉES PERSONNELLES <i class="ri-arrow-drop-down-fill fw-bold" style={{fontSize: 20}} ></i></NavLink>
                                </NavItem>
                            </h5>
                            
                            <h5>
                                <NavItem className="nav-item-custom">
                                <NavLink className="nav-title"   href="#" active={window.location.pathname === "/apdp"}>VOS DEMARCHES <i class="ri-arrow-drop-down-fill fw-bold" style={{fontSize: 20}} ></i>  </NavLink>
                                </NavItem>
                            </h5>
                        

                            <h5>
                                <NavItem className="nav-item-custom">
                                <NavLink className="nav-title"   href="#" active={window.location.pathname === "/espace-juridique"}>DOCUMENTATION <i class="ri-arrow-drop-down-fill fw-bold" style={{fontSize: 20}} ></i> </NavLink>
                                </NavItem>
                            </h5>   

                            <h5>
                                <NavItem className="nav-item-custom">
                                <NavLink className="nav-title"   href="#" active={window.location.pathname === "/espace-juridique"}>APDP <i class="ri-arrow-drop-down-fill fw-bold" style={{fontSize: 20}} ></i> </NavLink>
                                </NavItem>
                            </h5>   
                        </Nav>
                    </Collapse>
                    <InputGroup className="search-input d-none d-sm-flex">
                        <InputGroupText style={{
                            backgroundColor: 'white',
                            borderRightWidth: 0,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius:20
                        }}>
                        <i class="ri-search-line"></i>
                        </InputGroupText>
                        <Input  placeholder="Recherche" style={{
                            backgroundColor: 'white',
                            borderLeftWidth: 0,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20
                        }} />
                </InputGroup>
                </Navbar>
                
            </React.Fragment>
        )
    }
}
