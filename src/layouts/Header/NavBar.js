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
    Link,
    useHistory
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
                <Navbar light expand="sm" style={{ backgroundColor: "#2b71d3" }} className={"d-flex justify-content-center nav-bar-mother"}  >
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="nav-bar-custom">
                        <Nav className="mr-autor  d-flex flec-wrap" navbar>
                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"ACTUALITÉS "} id="navbarScrollingDropdown" active={window.location.pathname === "/"}>
                                    <NavDropdown.Item href="/activites">Les Activités</NavDropdown.Item>
                                    <NavDropdown.Item href="/communiques">Communiqués et Newsletters</NavDropdown.Item>
                                    <NavDropdown.Item href="">Sondage sur un produit</NavDropdown.Item>
                                    <NavDropdown.Item href="/appels-d-offres">Appels d'offres</NavDropdown.Item>
                                    <NavDropdown.Item href="/evenements">Evènements</NavDropdown.Item>
                                    <NavDropdown.Item href="/forum-de-discussion">Forum de discussion</NavDropdown.Item>
                                    
                                </NavDropdown>
                            </h5>

                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"DONNÉES PERSONNELLES "} id="navbarScrollingDropdown" active={window.location.pathname === "/donnees-personnelles"}>
                                    <NavDropdown.Item href="/faq" >FAQ</NavDropdown.Item>
                                    <NavDropdown.Item href="/quiz">Quiz</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-droits">Vos droits</NavDropdown.Item>
                                    <NavDropdown.Item href="">Guide de conformité</NavDropdown.Item>
                                    
                                </NavDropdown>
                            </h5>

                            <h5>
                                {/* <div className={"nav-link-title nav-item-custom demarche-nav"}  id="navbarScrollingDropdown" onClick={handleDemarchesClick} active={window.location.pathname === "/vos-demarches"}>
                                VOS DEMARCHES
                                </div> */}
                            </h5>


                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"VOS DEMARCHES "} id="navbarScrollingDropdown" active={window.location.pathname === "/vos-demarches"}>
                                <NavDropdown.Item href="/faire-une-demande" >Faire ou modifier une demande</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Vérifier le statut d'une demande</NavDropdown.Item>
                                    <NavDropdown.Item href="/espace-dpo">Espace DPO</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Obtenir le certificat de conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Démarrer une mise en conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Vérifier la conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Visualiser la version d'une décision</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Prendre RDV</NavDropdown.Item>
                                    <NavDropdown.Item href="/espace-rt">Espace RT</NavDropdown.Item>
                                </NavDropdown>
                            </h5>
                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"DOCUMENTATION "} id="navbarScrollingDropdown" active={window.location.pathname === "/documentation"}>
                                <NavDropdown.Item href="" >Liste de Pays</NavDropdown.Item>
                                    <NavDropdown.Item href="/conseils">Recommandations</NavDropdown.Item>
                                    <NavDropdown.Item href="/outils-conformite">Outils de conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/rapports-annuels">Rapports d'activités Annuelles</NavDropdown.Item>
                                    <NavDropdown.Item href="">Études</NavDropdown.Item>
                                    
                                    {/* <NavDropdown.Item href="" title={"Textes"}> */}
                                        {/* <NavDropdown.Item href="textes"> */}
                                            {/*  */}
                                    
                                    {/* <NavDropdown style={{color: "black", fontSize: "10px", padding: "5px 15px", textTransform: "capitalize"}} className={"nav-bar-item-text"} title={"Textes "} active={window.location.pathname === "/documentation/textes"}> */}
                               
                                    {/* <NavDropdown.Item href="" title={"Textes"}> */}
                                        <NavDropdown.Item href="/textes/lois">Lois</NavDropdown.Item>
                                        <NavDropdown.Item href="/textes/arretes">Arretes</NavDropdown.Item>
                                        <NavDropdown.Item href="/textes/decrets">Decrets</NavDropdown.Item>
                                        <NavDropdown.Item href="/textes/textes-communautaires">Textes Communautaires</NavDropdown.Item>
                                        <NavDropdown.Item href="/textes/deliberations-publiques">Délibérations Publiques</NavDropdown.Item>
                                    {/* </NavDropdown.Item> */}
                                {/* </NavDropdown> */}
                                    {/*  */}
                                    {/* </NavDropdown.Item> */}
                                        {/* <NavDropdown.Item href="/textes/les-lois">Les Lois</NavDropdown.Item> */}
                                        {/* <NavDropdown.Item href="/textes/decrets-arretes">Les Decrets et Arretes</NavDropdown.Item> */}
                                    {/* </NavDropdown.Item> */}
                                </NavDropdown>
                            </h5>
                            
                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"APDP "} id="navbarScrollingDropdown" active={window.location.pathname === "/apdp"}>
                                <NavDropdown.Item href="/autorite" >L'autorité</NavDropdown.Item>
                                    <NavDropdown.Item href="/mission">Mission</NavDropdown.Item>
                                    <NavDropdown.Item href="/membres">Mandature en cours et Historique des membres</NavDropdown.Item>
                                    <NavDropdown.Item href="/commissaire">Commissariat du Gouvernement</NavDropdown.Item>
                                    <NavDropdown.Item href="/cooperations">Coopération</NavDropdown.Item>
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
                            <i className="ri-search-line"></i>
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
