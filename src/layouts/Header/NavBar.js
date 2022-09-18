import React, { useState, useEffect } from 'react'
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
    Input,
    ButtonGroup
} from 'reactstrap';
import { NavDropdown } from "react-bootstrap";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {
    useNavigate,
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { getMenus } from '../../http/http';

const NavBar = (props) => {

    const { secondMenus } = props

    const navigate = useNavigate()

    const [state, setState] = useState(
        {
            isOpen: false,
            showDropdownActualites: false,
            showDropdownRegime: false,
            showDropdownDemarches: false,
            showDropdownDocumentation: false,
            showDropdownDemarches: false,
            showDropdownConformite: false,
            showDropdownTextesNationaux: false,
            showSub: "",
            showSubSub: ""
        }
    )

    const [activeMenu, setActiveMenu] = useState("")

    const toggle = () => setState({ ...state, isOpen: state.isOpen })




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
            <Navbar light expand="sm" style={{ backgroundColor: "rgb(18 50 95)", marginBottom: 0, borderRadius: 0, }} className={"d-flex justify-content-center nav-bar-mother"}  >
                {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={state.isOpen} navbar className="nav-bar-custom">
                    <Nav className="mr-autor  d-flex flex-wrap justify-content-around" navbar>

                        {/* Start the magic */}

                        {secondMenus?.map(secondMenu => <h5>
                            <NavDropdown
                                onMouseLeave={() => setState({ ...state, showSub: "" })}
                                onMouseOver={() => setState({ ...state, showSub: secondMenu.name })}
                                show={state.showSub == secondMenu.name}
                                className={"nav-link-title nav-item-custom"} title={secondMenu.name} id="navbarScrollingDropdown"
                                active={
                                    secondMenu.id == activeMenu
                                }>
                                {secondMenu.children.map((subMenu, index) =>
                                    <>
                                        {subMenu.children?.length === 0 ? <NavDropdown.Item key={index+"p"} onClick={() => {
                                            setActiveMenu(subMenu.parent_id)
                                            localStorage.setItem('active-menu', JSON.stringify(subMenu))
                                            navigate("/main")
                                        }
                                        }
                                        // href="/main" 
                                        >{subMenu.name}</NavDropdown.Item> :
                                            <div>
                                                <DropdownButton
                                                    as={ButtonGroup}
                                                    key={'end'}
                                                    id={`dropdown-button-drop-end`}
                                                    drop={'end'}
                                                    variant="none"
                                                    size="lg"
                                                    title={subMenu.name}
                                                    onMouseLeave={() => { localStorage.setItem('showSubSub', "") }}
                                                    onMouseOver={() => { localStorage.setItem('showSubSub', subMenu.name) }}
                                                    show={localStorage.getItem('showSubSub') == subMenu.name}
                                                >
                                                    {subMenu.children.map((subSubMenu, index) => <Dropdown.Item
                                                    key={index}
                                                        // href="/main"     
                                                        onClick={() => {
                                                            setActiveMenu(subMenu.parent_id)
                                                            localStorage.setItem('active-menu', JSON.stringify(subSubMenu))
                                                            navigate("/main")
                                                        }} eventKey="1">{subSubMenu.name}</Dropdown.Item>)}
                                                </DropdownButton>
                                            </div>
                                        }
                                    </>
                                )}
                            </NavDropdown>
                        </h5>)}

                        {/* End the magic */}



                        {/* Actualités */}
                        {/* <h5>
                                <NavDropdown
                                    onMouseLeave={() => setState({ ...state, showDropdownActualites: false })}
                                    onMouseOver={() => setState({ ...state, showDropdownActualites: true })}
                                    show={state.showDropdownActualites}
                                    className={"nav-link-title nav-item-custom"} title={"ACTUALITÉS "} id="navbarScrollingDropdown"
                                    active={window.location.pathname === "/activites"
                                        || window.location.pathname === "/communiques"
                                        || window.location.pathname === "/communique/:id"
                                        || window.location.pathname === "/evenements"
                                        || window.location.pathname === "/evenement/:id"
                                        || window.location.pathname === "/arnaque-du-mois"
                                        || window.location.pathname === "/phototheque"
                                        || window.location.pathname === "/videotheque"
                                        || window.location.pathname === "/plans-de-passation"
                                        || window.location.pathname === "/appels-d-offres"
                                    }>
                                    <NavDropdown.Item href="/activites" >Les Activités</NavDropdown.Item>
                                    <NavDropdown.Item href="/communiques" >Communiqués et Newsletters</NavDropdown.Item>
                                    <NavDropdown.Item href="" >Sondages</NavDropdown.Item>
                                    <NavDropdown.Item href="/evenements">Evènements</NavDropdown.Item>
                                    <NavDropdown.Item href="/arnaque-du-mois">Arnaque du mois</NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.flickr.com/photos/195909108@N06">Photothèque</NavDropdown.Item>
                                    <NavDropdown.Item href="/videotheque">Vidéothèque</NavDropdown.Item>
                                    <div>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        key={'end'}
                                        id={`dropdown-button-drop-end`}
                                        drop={'end'}
                                        variant="none"
                                        size="lg"
                                        title={`Marchés publics`}                                      
                                        onMouseLeave={() => {localStorage.setItem('showDropdownPublicMarkets',false)}}
                                        onMouseOver={() => {localStorage.setItem('showDropdownPublicMarkets',true)}}
                                        show={localStorage.getItem('showDropdownPublicMarkets') === 'true'}
                                    >
                                        <Dropdown.Item href="/plans-de-passation" eventKey="1">Plan de passation</Dropdown.Item>
                                        <Dropdown.Item href="/appels-d-offres" eventKey="2">Publication de marché</Dropdown.Item>
                                    </DropdownButton>
                                    </div>
                                </NavDropdown>
                            </h5> */}



                        <h5>
                            <NavDropdown
                                onMouseLeave={() => setState({ ...state, showDropdownDemarches: false })}
                                onMouseOver={() => setState({ ...state, showDropdownDemarches: true })}
                                show={state.showDropdownDemarches}
                                className={"nav-link-title nav-item-custom"} title={"VOS DEMARCHES "} id="navbarScrollingDropdown"
                                active={
                                    window.location.pathname === "/vos-demarches"
                                    || window.location.pathname === "/statut-demande"
                                    || window.location.pathname === "/espace-dpo"
                                    || window.location.pathname === "/faire-une-demande"
                                }>
                                <NavDropdown.Item href="/faire-une-demande" >Faire ou modifier une demande</NavDropdown.Item>
                                <NavDropdown.Item href="/formulaire/declaration_de_mise_en_conformite_avec_injonctions">Soumettre la déclaration de mise
                                    en conformité avec les injonctions</NavDropdown.Item>
                                <NavDropdown.Item href="/statut-demande">Faire une vérification</NavDropdown.Item>
                                <NavDropdown.Item href="/formulaire/notifier_et_publier_la_designation_du_dpo">Notifier et Publier la désignation
                                    d’un DPO</NavDropdown.Item>
                                <NavDropdown.Item href="/formulaire/declarer_un_incident">Déclarer un incident</NavDropdown.Item>
                                <NavDropdown.Item href="/formulaire/rediger_une_affiche_d_information">Rédiger une affiche d’information
                                    des personnes concernées</NavDropdown.Item>
                                <NavDropdown.Item href="/faire-une-demande">Démarrer une mise en conformité</NavDropdown.Item>
                                <NavDropdown.Item href="/faire-une-demande">Créer un registre de traitement</NavDropdown.Item>
                                <NavDropdown.Item href="/faire-une-demande">Faire le rapport d’activité annuel</NavDropdown.Item>
                            </NavDropdown>
                        </h5>

                    </Nav >
                </Collapse >
            </Navbar >

        </React.Fragment >
    )

}

export default NavBar
