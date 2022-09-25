import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import apdp_logo from "../../assets/images/logoapdp.svg"
// import apdp_logo from "../../assets/images/logoapdp.png"
import NavBar from './NavBar';
import './Header.css';
import { BASE_URL } from "../../constants/Constant";
import code_numerique from "../../assets/documents/CODE_DU_NUMERIQUE_DU BENIN_EDITION 2019_ADN.pdf";
import { getATypeOfArticles, logout } from '../../http/http';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel';



const Header = (props) => {


    const { firstMenus, secondMenus } = props;

    const [isOpen, setIsOpen] = useState(false)

    const [breaknews, setBreaknews] = useState([]);
    const [showDropdownApdp, setShowDropdownApdp] = useState(false);

    const navigate = useNavigate()

    const [state, setState] = useState(
        {
            showSub: "",
            showSubSub: ""
        }
    )

    const [activeMenu, setActiveMenu] = useState("")



    const handleViewBreaknews = (id) => {
        window.location.replace(`/breaknews/${id}`)
    }

    const loadBreaknewsData = async () => {
        const resp = await getATypeOfArticles("breaknews")
        if (resp.response && resp.response.status !== 200) {
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp?.data)
            setBreaknews(resp.data?.data.reverse())
        }
    }


    useEffect(() => {
        loadBreaknewsData();
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

    const session_logout = () => {
        // const logout_status = logout();
        localStorage.clear();
        window.location = '/';
    }

    const searchDecisionsShortcut = () => {
        window.location.href = "/recherche-globale"
    }

    //     useEffect(() => {
    //         axios.get(BASE_URL)
    // .then(response => {
    // console.log(response);
    // });
    //      }, [])

    useEffect(() => {
        console.log("firstMenus ", firstMenus)
    }, [])


    return (
        <>
            <React.Fragment>
                <div id={"header"}>
                    <div className="hwrap">
                        <div className="hmove">
                            {
                                breaknews && breaknews?.map((item, index) =>
                                (
                                    <p key={index + "w"} onClick={() => handleViewBreaknews(item.id)}
                                        style={{ cursor: 'pointer' }}
                                        className="hitem my-auto mx-5"
                                        dangerouslySetInnerHTML={{ __html: (item?.title) }}></p>
                                )
                                )}

                        </div>
                    </div>

                    <div className="header-block-2">


                        <div className='header-logo' onClick={goHome} style={{ backgroundImage: `url('${apdp_logo}'`, }}>
                            {/* <img src={apdp_logo} style={{cursor: "pointer"}} className="logo" /> */}
                            {/* <object style={{cursor: "pointer", height: 30, width: 40}}  data={apdp_logo} className="logo" type="image/svg+xml"></object> */}
                        </div>
                        <div className=" d-none d-md-flex header-block-2-div-2 d-flex flex-row justify-content-around">
                            <div className="col" style={{ color: "#292929", font: "normal normal normal 20px/35px Montserrat", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px' }}>
                                <a className="code_numerique" target={"_blank"} href={code_numerique} rel={"noopener noreferer"} > CODE DU NUMERIQUE </a>
                            </div>
                            {firstMenus?.map((sub, index) =>
                                // 
                                <>{sub.children?.length == 0 ?
                                    <div
                                        key={index}
                                        className="col"
                                        style={{ color: "#292929", font: "normal normal normal 20px/35px Montserrat", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px' }}
                                        onClick={() => {
                                            localStorage.setItem('active-menu', JSON.stringify(sub))
                                            navigate(`/${sub?.model}/${sub?.slug}`)
                                        }
                                        }
                                    > {sub.name.toUpperCase()}</div> :
                                    <div className='dropdown'
                                        onMouseLeave={() => setState({ ...state, showSub: "" })}
                                        onMouseOver={() => setState({ ...state, showSub: sub.name })}
                                    >
                                        <div className="dropdown-toggle drop-class" style={{ font: "normal normal normal 20px/35px Montserrat", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px' }}

                                            type="" data-toggle="dropdown">{sub.name.toUpperCase()}
                                        </div>
                                        <ul className={state.showSub == sub.name ? "dropdown-menu show pop-up" : "dropdown-menu"}>
                                            {sub.children.map((subItem, index) =>
                                                <li key={index}><a tabIndex="-1" onClick={() => {
                                                    setActiveMenu(subItem.parent_id)
                                                    localStorage.setItem('active-menu', JSON.stringify(sub))
                                                    navigate(`/${subItem?.model}/${subItem?.slug}`)
                                                }}>{subItem.name}</a></li>)}

                                        </ul>
                                    </div>}
                                </>



                                // 
                                // <div className="col" style={{ color: "#292929", font: "normal normal normal 15px/35px Montserrat", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px' }}>
                                //     {menu.name.toUpperCase()}
                                // </div>
                            )}




                        </div>

                        {localStorage.getItem("user_token") ? <div>
                            <Button color="danger" style={{ margin: '20px' }} onClick={session_logout} className="client-espace-button"><h6 style={{ margin: '0px' }}>Déconnexion</h6></Button>
                        </div> : <div></div>}
                    </div>

                    <div className="header-block-3">
                        <NavBar secondMenus={secondMenus} />
                    </div>
                    <BiSearchAlt title='Rechercher globalement sur le site' onClick={searchDecisionsShortcut} style={{ height: 45, width: 40, color: 'white', cursor: 'pointer', position: 'relative', float: 'right', right: '80px', margin: '-50px', top: '-1px' }} />
                </div>
            </React.Fragment>
        </>
    )
}

export default Header
