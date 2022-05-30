import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
// import apdp_logo from "../../assets/images/logoapdp.svg"
import apdp_logo from "../../assets/images/logoapdp.png"
import NavBar from './NavBar';
import './Header.css';
import {BASE_URL} from "../../constants/Constant";
import code_numerique from "../../assets/documents/CODE_DU_NUMERIQUE_DU BENIN_EDITION 2019_ADN.pdf";
import {getATypeOfArticles, logout} from '../../http/http';



const Header = () => {


    const [isOpen,setIsOpen] = useState(false)

    const [breaknews, setBreaknews] = useState([]);
    const [showDropdownApdp, setShowDropdownApdp] = useState(false);


    const loadBreaknewsData = async () => {
        const resp = await getATypeOfArticles("breaknews")
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp?.data)
            setBreaknews(resp.data?.data)
        }
    }
  
    
    useEffect(() => {
        loadBreaknewsData() ;
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

//     useEffect(() => {
//         axios.get(BASE_URL)
// .then(response => {
// console.log(response);
// });
//      }, [])

    return (
        <React.Fragment>
                <div id={"header"}>
                    {/* <div className="header-block-1">
                    <Row className={"d-flex flex-nowrap"}>
                        
                        <Col className="header-animate-text animate-text-span">
                            <span className={"animate-text-span d-flex flex-nowrap"}><span className={"animate-text-separator"}> # </span>Aut perspiciatis voluptatibus  inventore voluptatibus consequuntur enim autem inventore<span className={"animate-text-separator"}> # </span></span> 

                        </Col>
                            </Row>
                    </div> */}
                    <div class="hwrap">
                        <div class="hmove">
                        {
                        breaknews && breaknews.map((breaknew) => 
                        (
                        // <div class="hitem">{breaknew.title}</div>
                      
                        <div class="hitem mx-5" dangerouslySetInnerHTML={{__html: (breaknew?.content)}}></div>
                        
                        )
                            )}
  
</div></div>

                    <div className="header-block-2">
                        
                            {/* <a href='/'> */}

                                <div  onClick={goHome}>
                                    <img src={apdp_logo} style={{cursor: "pointer"}} className="logo" />
                                    {/* <object style={{cursor: "pointer", height: 30, width: 40}}  data={apdp_logo} className="logo" type="image/svg+xml"></object> */}
                                </div>  
                            {/* </a> */}
                            
                                <div className=" d-none d-md-flex header-block-2-div-2 d-flex flex-row justify-content-around">
                                {/* <div className=" row d-flex  justify-content-around"> */}
                                    <div className="col" style={{color: "#292929", font: "normal normal normal 20px/35px Roboto", cursor: "pointer"}}> <a className="code_numerique" target={"_blank"} href={code_numerique} rel={"noopener noreferer"} > CODE DU NUMERIQUE </a> </div>
                                    <div className="col" style={{color: "#292929", font: "normal normal normal 20px/35px Roboto", cursor: "pointer"}} onClick={handleClickRecommandations}> RECOMMANDATIONS</div>
                                    {/* <div className="col" style={{color: "#292929", fontFamily: "Roboto", fontWeight: "bold", cursor: "pointer"}} onClick={handleClickApdpInfo}> CONNAITRE L'APDP</div> */}
                                    <div    className='dropdown'
                                            onMouseLeave={() => setShowDropdownApdp(false)}
                                            onMouseOver={() => setShowDropdownApdp(true)}
                                    >
                                        <div className="dropdown-toggle drop-class" style={{ font: "normal normal normal 20px/35px Roboto", cursor: "pointer"}}

                                            type="" data-toggle="dropdown">CONNAITRE L'APDP
                                        </div>
                                        <ul className={showDropdownApdp == true ? "dropdown-menu show" :  "dropdown-menu"}>
                                            <li><a tabIndex="-1" href="/autorite">L' autorité</a></li>
                                            <li><a tabIndex="-1" href="/mission">Mission</a></li>
                                            <li><a tabIndex="-1" href="/membres">Mandature en cours et Historique des membres</a></li>

                                            <li><a tabIndex="-1" href="/commissaire">Commissariat du Gouvernement</a></li>

                                            <li><a tabIndex="-1" href="/cooperations">Coopération</a></li>

                                            <li><a tabIndex="-1" href="/mentions-legales">Mentions Légales</a></li>

                                            <li><a tabIndex="-1" href="/contact">Contact</a></li>

                                        </ul>
                                    </div>
                                </div>
                            
                            
                                {/* <div style={{cursor: 'pointer'}}>
                                    <Button color="primary" onClick={toggle_modal} className="client-espace-button"><h6>EN</h6></Button>
                                </div> */}

                                { localStorage.getItem("user_token") ? <div>
                                    <Button color="danger" onClick={session_logout} className="client-espace-button"><h6>Déconnexion</h6></Button>
                                </div>:<div></div>}

                                

                               
                              
                    </div>

                    <div className="header-block-3">
                        <NavBar/>
                    </div>
                    
                </div>     
            </React.Fragment>
    )
}

export default Header
