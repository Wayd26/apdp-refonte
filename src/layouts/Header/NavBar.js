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
import { NavDropdown } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    componentDidMount() {
        console.log(window.location)
    }

    render() {
        const handleDemarchesClick = () => {
            window.location.href = "/vos-demarches";
        }
        return (
            <React.Fragment>
                <Navbar light expand="sm" style={{ backgroundColor: "#2b71d3" }} className={"d-flex justify-content-around nav-bar-mother"}  >
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="nav-bar-custom">
                        <Nav className="mr-autor  d-flex flec-wrap" navbar>
                            <h5>
                                {/* <NavItem className="nav-item-custom">
                                    <NavLink className="nav-title" href="/" active={window.location.pathname === "/patata"}>ACTUALITÉS <i class="ri-arrow-drop-down-fill fw-bold" style={{ fontSize: 20 }} ></i></NavLink>
                                </NavItem> */}

                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"ACTUALITÉS "} id="navbarScrollingDropdown" active={window.location.pathname === "/"}>
                                    <NavDropdown.Item href="/activites" >Les Activités</NavDropdown.Item>
                                    <NavDropdown.Item href="">Communiqués et Newsletters</NavDropdown.Item>
                                    <NavDropdown.Item href="">Sondage sur un produit</NavDropdown.Item>
                                    <NavDropdown.Item href="">Appels d'offres</NavDropdown.Item>
                                    <NavDropdown.Item href="">Evènements</NavDropdown.Item>
                                    <NavDropdown.Item href="">Forum de discussion</NavDropdown.Item>
                                    
                                </NavDropdown>
                            </h5>

                            <h5>
                                {/* <NavItem className="nav-item-custom">
                                    <NavLink className="nav-title" href="/" active={window.location.pathname === "/donne"}>DONNÉES PERSONNELLES <i class="ri-arrow-drop-down-fill fw-bold" style={{ fontSize: 20 }} ></i></NavLink>
                                </NavItem> */}

                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"DONNÉES PERSONNELLES "} id="navbarScrollingDropdown" active={window.location.pathname === "/donnees-personnelles"}>
                                    <NavDropdown.Item href="" >FAQ</NavDropdown.Item>
                                    <NavDropdown.Item href="">Quiz</NavDropdown.Item>
                                    <NavDropdown.Item href="">Vos droits</NavDropdown.Item>
                                    <NavDropdown.Item href="">Guide de conformité</NavDropdown.Item>
                                    
                                </NavDropdown>
                            </h5>

                            <h5>
                                {/* <NavItem className="nav-item-custom">
                                    <NavLink className="nav-title" href="#" active={window.location.pathname === "/apdp"}>VOS DEMARCHES <i class="ri-arrow-drop-down-fill fw-bold" style={{ fontSize: 20 }} ></i>  </NavLink>
                                </NavItem> */}

                                <div className={"nav-link-title nav-item-custom demarche-nav"}  id="navbarScrollingDropdown" onClick={handleDemarchesClick} active={window.location.pathname === "/vos-demarches"}>
                                VOS DEMARCHES
                                </div>
                            </h5>


                            <h5>
                                {/* <NavItem className="nav-item-custom">
                                    <NavLink className="nav-title" href="#" active={window.location.pathname === "/espace-juridique"}>DOCUMENTATION <i class="ri-arrow-drop-down-fill fw-bold" style={{ fontSize: 20 }} ></i> </NavLink>
                                </NavItem> */}

                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"DOCUMENTATION "} id="navbarScrollingDropdown" active={window.location.pathname === "/documentation"}>
                                <NavDropdown.Item href="" >Liste de Pays</NavDropdown.Item>
                                    <NavDropdown.Item href="">Recommandations</NavDropdown.Item>
                                    <NavDropdown.Item href="">Outils de conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="">Rapports d'activités Annuelles</NavDropdown.Item>
                                    <NavDropdown.Item href="">Études</NavDropdown.Item>
                                    <NavDropdown.Item href="">Textes</NavDropdown.Item>
                                </NavDropdown>
                            </h5>

                            <h5>
                                {/* <NavItem className="nav-item-custom">
                                    <NavLink className="nav-title" href="#" active={window.location.pathname === "/espace-juridique"}>APDP <i class="ri-arrow-drop-down-fill fw-bold" style={{ fontSize: 20 }} ></i> </NavLink>
                                </NavItem> */}

                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"APDP "} id="navbarScrollingDropdown" active={window.location.pathname === "/apdp"}>
                                <NavDropdown.Item href="" >L'autorité</NavDropdown.Item>
                                    <NavDropdown.Item href="">Mission</NavDropdown.Item>
                                    <NavDropdown.Item href="">Mandature en cours et Historique des membres</NavDropdown.Item>
                                    <NavDropdown.Item href="">Commissariat du Gouvernement</NavDropdown.Item>
                                    <NavDropdown.Item href="">Coopération</NavDropdown.Item>
                                    <NavDropdown.Item href="">Contact</NavDropdown.Item>
                                </NavDropdown>
                            </h5>
                    <InputGroup className="search-input d-none d-sm-flex row d-flex flex-nowrap">
                        <InputGroupText style={{
                            backgroundColor: 'white',
                            borderRightWidth: 0,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20
                        }}>
                            <i class="ri-search-line"></i>
                        </InputGroupText>
                        <Input placeholder="Recherche" style={{
                            backgroundColor: 'white',
                            borderLeftWidth: 0,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20
                        }} />
                    </InputGroup>
                        </Nav>
                    </Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}
