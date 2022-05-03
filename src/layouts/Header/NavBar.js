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
            if (localStorage.getItem("user_token")) {
                window.location.href = "/vos-demarches";
            } else {
                window.location.href = "/vos-demarches";
                localStorage.setItem("redirect_url", "/vos-demarches")
            }
        }
        return (
            <React.Fragment>
                <Navbar light expand="sm" style={{ backgroundColor: "#2b71d3" }} className={"d-flex justify-content-center nav-bar-mother"}  >
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="nav-bar-custom">
                        <Nav className="mr-autor  d-flex flex-wrap justify-content-around" navbar>
                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"ACTUALITÉS "} id="navbarScrollingDropdown" active={window.location.pathname === "/"}>
                                    <NavDropdown.Item href="/activites">Les Activités</NavDropdown.Item>
                                    <NavDropdown.Item href="/communiques">Communiqués et Newsletters</NavDropdown.Item>
                                    <NavDropdown.Item href="">Sondage sur un produit</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/appels-d-offres">Appels d'offres</NavDropdown.Item> */}
                                    <NavDropdown.Item href="/evenements">Evènements</NavDropdown.Item>
                                    <NavDropdown.Item href="/forum-de-discussion">Forum de discussion</NavDropdown.Item>
                                    <NavDropdown.Item href="/phototheque">Photothèque</NavDropdown.Item>
                                    <NavDropdown.Item href="/videotheque">Vidéothèque</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/plans-de-passation">Plans de passation</NavDropdown.Item> */}

                                    <div className='dropdown '>
                                        <button className="btn btn-default dropdown-toggle drop-class" style={{ "font": "normal normal bold 20px/35px Source Sans Pro", }}

                                            type="" data-toggle="dropdown">Marchés Publiques
                                        </button>
                                        <ul className="dropdown-menu" style={{right: 0, left: "auto"}}>
                                            <NavDropdown.Item href="/plans-de-passation">Plans de passation</NavDropdown.Item>
                                            <NavDropdown.Item href="/appels-d-offres">Appels d'offres</NavDropdown.Item>
                                        </ul>
                                    </div>

                                </NavDropdown>
                            </h5>

                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"REGIME DE PROTECTION DES DONNÉES"} id="navbarScrollingDropdown" active={window.location.pathname === "/donnees-personnelles"}>
                                    <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                                    <NavDropdown.Item href="/quiz">Quiz</NavDropdown.Item>

                                    <div className='dropdown '>
                                        <button className="btn btn-default dropdown-toggle drop-class" style={{ "font": "normal normal bold 20px/35px Source Sans Pro", }}

                                            type="" data-toggle="dropdown">Mise en conformité
                                        </button>
                                        <ul className="dropdown-menu" style={{right: 0, left: "auto"}}>
                                            <NavDropdown.Item href="/vos-droits">Obligations Générales</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Systèmes de vidéosurveillances</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Sites web / application mobiles</NavDropdown.Item>
                                            <NavDropdown.Item href="">Mise en conformité
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#">Notification d’incident de violation
                                                des données personnelles</NavDropdown.Item>

                                            <NavDropdown.Item href="#">L’analyse d’impact</NavDropdown.Item>

                                            <NavDropdown.Item href="#">Le code de conduite</NavDropdown.Item>

                                            <NavDropdown.Item href="#">Le registre de traitement</NavDropdown.Item>


                                        </ul>
                                    </div>
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
                                    <NavDropdown.Item href="/vos-demarches">Soumettre la déclaration de mise
                                        en conformité avec les injonctions</NavDropdown.Item>
                                    <NavDropdown.Item href="/statut-demande">Faire une vérification</NavDropdown.Item>
                                    <NavDropdown.Item href="/espace-dpo">Notifier et Publier la désignation
                                        d’un DPO</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Déclarer un incident</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Rédiger une affiche d’information
                                        des personnes concernées</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Démarrer une mise en conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Créer un registre de traitement</NavDropdown.Item>
                                    <NavDropdown.Item href="/vos-demarches">Faire le rapport d’activité annuel</NavDropdown.Item>
                                </NavDropdown>
                            </h5>
                            <h5>
                                <NavDropdown className={"nav-link-title nav-item-custom"} title={"DOCUMENTATION "} id="navbarScrollingDropdown" active={window.location.pathname === "/documentation"}>
                                    <NavDropdown.Item href="/outils-conformite">Outils de conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/rapports-annuels">Rapports d'activités Annuelles</NavDropdown.Item>
                                    <div className='dropdown '>
                                        <button className="btn btn-default dropdown-toggle drop-class" style={{ "font": "normal normal bold 20px/35px Source Sans Pro", }}
                                            type="" data-toggle="dropdown">Textes Nationaux
                                        </button>
                                        <ul className="dropdown-menu" style={{right: 0, left: "auto"}}>
                                            <NavDropdown.Item href="/textes/lois">Lois</NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/arretes">Arretes</NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/decrets">Decrets</NavDropdown.Item>
                                        <NavDropdown.Item href="/textes/deliberations-publiques">Délibérations Publiques</NavDropdown.Item>
                                        </ul>
                                    </div>
                                    <div className='dropdown '>
                                        <button className="btn btn-default dropdown-toggle drop-class" style={{ "font": "normal normal bold 20px/35px Source Sans Pro", }}
                                            type="" data-toggle="dropdown">Textes Communautaires
                                        </button>
                                        <ul className="dropdown-menu" style={{right: 0, left: "auto"}}>
                                            <NavDropdown.Item href="/textes/accords">Accords</NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/reglements">Règlements</NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/directives">Directives</NavDropdown.Item>
                                        </ul>
                                    </div>
                                    <NavDropdown.Item href="/textes-internationaux">Textes Internationaux</NavDropdown.Item>
                                    <NavDropdown.Item href="/pays-membres" >Liste de pays à protection équivalente</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/textes/textes-communautaires">Textes Communautaires</NavDropdown.Item> */}
                                </NavDropdown>
                            </h5>
                         {/* <InputGroup className="search-input d-none d-sm-flex row d-flex flex-nowrap"> */}
                                {/* <InputGroupText style={{
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
                                }} /> */}
                            {/* </InputGroup> */}
                        </Nav>
                    </Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}
