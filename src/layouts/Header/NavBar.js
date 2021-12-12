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
                <Navbar light expand="md" style={{backgroundColor: "#2b71d3"}}  >
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="nav-bar-custom">
                    <Nav className="mr-auto" navbar>
                        <h5>
                            <NavItem className="nav-item-custom">
                            <NavLink className="nav-title"  href="/" active={window.location.pathname === "/"}>ACCUEIL</NavLink>
                            </NavItem>
                        </h5>
                        
                        <h5>
                            <NavItem className="nav-item-custom">
                            <NavLink className="nav-title"   href="#" active={window.location.pathname === "/apdp"}>APDP </NavLink>
                            </NavItem>
                        </h5>
                       

                        <h5>
                            <NavItem className="nav-item-custom">
                            <NavLink className="nav-title"   href="#" active={window.location.pathname === "/espace-juridique"}>ESPACE JURIDIQUE</NavLink>
                            </NavItem>
                        </h5>
                       

                       
                        
                    </Nav>
                    </Collapse>
                    <InputGroup className="search-input">
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
