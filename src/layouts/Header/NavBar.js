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
import { AiOutlineFileSearch } from 'react-icons/ai';

export default class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            showDropdownActualites: false,
            showDropdownRegime: false,
            showDropdownDemarches: false,
            showDropdownDocumentation: false,
            showDropdownDemarches: false,
            showDropdownConformite : false
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

        const searchDecisionsShortcut = () => {
            window.location.href = "/textes/deliberations-publiques"
        }
        return (
            <React.Fragment>
                <Navbar light expand="sm" style={{ backgroundColor: "#2b71d3", marginBottom: 0 }} className={"d-flex justify-content-center nav-bar-mother"}  >
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="nav-bar-custom">
                        <Nav className="mr-autor  d-flex flex-wrap justify-content-around" navbar>
                            <h5>
                                <NavDropdown
                                    onMouseLeave={() => this.setState({...this.state, showDropdownActualites: false})}
                                    onMouseOver={() => this.setState({...this.state, showDropdownActualites: true})}
                                    show={this.state.showDropdownActualites}
                                    className={"nav-link-title nav-item-custom"} title={"ACTUALITÉS "} id="navbarScrollingDropdown"
                                    active={window.location.pathname === "/activites"
                                    || window.location.pathname === "/communiques"
                                    || window.location.pathname === "/communique/:id"
                                    || window.location.pathname === "/evenements"
                                    || window.location.pathname === "/evenement/:id"
                                    || window.location.pathname === "/forum-de-discussion"
                                    || window.location.pathname === "/arnaque-du-mois"
                                    || window.location.pathname === "/phototheque"
                                    || window.location.pathname === "/videotheque"
                                    || window.location.pathname === "/plans-de-passation"
                                    || window.location.pathname === "/appels-d-offres"
                                    }>
                                    <NavDropdown.Item href="/activites" >Les Activités</NavDropdown.Item>
                                    <NavDropdown.Item href="/communiques" >Communiqués et Newsletters</NavDropdown.Item>
                                    <NavDropdown.Item href="" >Sondages</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/appels-d-offres">Appels d'offres</NavDropdown.Item> */}
                                    <NavDropdown.Item href="/evenements">Evènements</NavDropdown.Item>
                                    <NavDropdown.Item href="/forum-de-discussion">Forum de discussion</NavDropdown.Item>
                                    <NavDropdown.Item href="/arnaque-du-mois">Arnaque du mois</NavDropdown.Item>
                                    <NavDropdown.Item href="/phototheque">Photothèque</NavDropdown.Item>
                                    <NavDropdown.Item href="/videotheque">Vidéothèque</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/plans-de-passation">Plans de passation</NavDropdown.Item> */}

                                    <div className='dropdown '>
                                        <button className="c-btn-dropdown dropdown-toggle drop-class" style={{ "font": "normal normal normal 15px/30px Roboto", }}

                                            type="" data-toggle="dropdown">Marchés Publics
                                        </button>
                                        <ul className="dropdown-menu" style={{ right: 0, left: "auto" }}>
                                            <NavDropdown.Item href="/plans-de-passation">Plan de passation</NavDropdown.Item>
                                            <NavDropdown.Item href="/appels-d-offres">Publication de marché</NavDropdown.Item>
                                        </ul>
                                    </div>

                                </NavDropdown>
                            </h5>

                            <h5>
                                <NavDropdown
                                    onMouseLeave={() => this.setState({ ...this.state, showDropdownRegime: false })}
                                    onMouseOver={() => this.setState({ ...this.state, showDropdownRegime: true })}
                                    show={this.state.showDropdownRegime}
                                    className={"nav-link-title nav-item-custom"} title={"REGIME DE PROTECTION DES DONNÉES"} id="navbarScrollingDropdown" 
                                    active={window.location.pathname === "/faq"
                                    || window.location.pathname === "/quiz"
                                    || window.location.pathname === "/vos-droits"
                                    }>
                                    <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                                    <NavDropdown.Item href="/quiz">Quiz</NavDropdown.Item>
                                    <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>

                                    <div className='dropdown '>
                                        <button className="c-btn-dropdown dropdown-toggle drop-class" style={{ "font": "normal normal normal 15px/30px Roboto", }}

                                            type="" data-toggle="dropdown">Mise en conformité
                                        </button>
                                        <ul className="dropdown-menu" style={{ right: "auto", left: 0 }}>
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
                                <NavDropdown
                                    onMouseLeave={() => this.setState({ ...this.state, showDropdownDemarches: false })}
                                    onMouseOver={() => this.setState({ ...this.state, showDropdownDemarches: true })}
                                    show={this.state.showDropdownDemarches}
                                    className={"nav-link-title nav-item-custom"} title={"VOS DEMARCHES "} id="navbarScrollingDropdown" 
                                    active={
                                        window.location.pathname === "/vos-demarches"
                                        || window.location.pathname === "/statut-demande"
                                        || window.location.pathname === "/espace-dpo"
                                    }>
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
                                <NavDropdown
                                    onMouseLeave={() => this.setState({ ...this.state, showDropdownDocumentation: false })}
                                    onMouseOver={() => this.setState({ ...this.state, showDropdownDocumentation: true })}
                                    show={this.state.showDropdownDocumentation}
                                    className={"nav-link-title nav-item-custom"} title={"DOCUMENTATION "} id="navbarScrollingDropdown" 
                                    active={
                                        window.location.pathname === "/documentation"
                                        || window.location.pathname === "/outils-conformite"
                                        || window.location.pathname === "/rapports-annuels"
                                        || window.location.pathname === "/textes/lois"
                                        || window.location.pathname === "/textes/arretes"
                                        || window.location.pathname === "/textes/decrets"
                                        || window.location.pathname === "/textes/deliberations-publiques"
                                        || window.location.pathname === "/textes/accords"
                                        || window.location.pathname === "/textes/reglements"
                                        || window.location.pathname === "/textes/directives"
                                        || window.location.pathname === "/textes-internationaux"
                                        || window.location.pathname === "/pays-membres"
                                        }>
                                    <NavDropdown.Item href="/outils-conformite">Outils de conformité</NavDropdown.Item>
                                    <NavDropdown.Item href="/rapports-annuels">Rapports d'activités Annuelles</NavDropdown.Item>
                                    <div className='dropdown '>
                                        <button className="c-btn-dropdown dropdown-toggle drop-class" style={{ "font": "normal normal normal 15px/30px Roboto", }}
                                            type="" data-toggle="dropdown">Textes Nationaux
                                        </button>
                                        <ul className="dropdown-menu" style={{ right: 0, left: "auto" }}>
                                            <NavDropdown.Item href="/textes/lois">Lois</NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/arretes">Arrêtés </NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/decrets">Decrets</NavDropdown.Item>
                                            <NavDropdown.Item href="/textes/deliberations-publiques">Décisions</NavDropdown.Item>
                                        </ul>
                                    </div>
                                    <div className='dropdown '>
                                        <button className="c-btn-dropdown dropdown-toggle drop-class" style={{ "font": "normal normal normal 15px/30px Roboto", }}
                                            type="" data-toggle="dropdown">Textes Communautaires
                                        </button>
                                        <ul className="dropdown-menu" style={{ right: 0, left: "auto" }}>
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

                            {/* <InputGroup className="search-input d-none d-sm-flex row d-flex flex-nowrap">
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
                            </InputGroup> */}
                            <h5><AiOutlineFileSearch title='Rechercher une décision' onClick={searchDecisionsShortcut} style={{ height: 45, width: 40, color: 'white', cursor: 'pointer' }} /> </h5>
                        </Nav>
                    </Collapse>
                </Navbar>

            </React.Fragment>
        )
    }
}
