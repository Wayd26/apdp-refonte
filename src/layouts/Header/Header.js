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
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileSearch } from 'react-icons/ai';



const Header = () => {


    const [isOpen,setIsOpen] = useState(false)

    const [breaknews, setBreaknews] = useState([]);
    const [showDropdownApdp, setShowDropdownApdp] = useState(false);



    const handleViewBreaknews = (id) => {
        window.location.replace(`/breaknews/${id}`)
    }

    const loadBreaknewsData = async () => {
        const resp = await getATypeOfArticles("breaknews")
        if(resp.response && resp.response.status !== 200){
            console.log("data error ", resp.response)
        } else {
            console.log("data data ", resp?.data)
            setBreaknews(resp.data?.data.reverse())
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

    const searchDecisionsShortcut = () => {
        window.location.href = "/textes/deliberations-publiques"
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
                        breaknews && breaknews?.map((item) => 
                        (
                        // <div class="hitem">{breaknew.title}</div>
                      
                        <p onClick={() => handleViewBreaknews(item.id)} 
                             style={{cursor: 'pointer'}} 
                             class="hitem mx-5" 
                             dangerouslySetInnerHTML={{__html: (item?.title)}}></p>
                        
                        )
                            )}
  
</div></div>

                    <div className="header-block-2">
                        
                        {/* <a href='/'> */}

                            <div className='header-logo' onClick={goHome} style={{ backgroundImage: `url('${apdp_logo}'`,}}>
                                {/* <img src={apdp_logo} style={{cursor: "pointer"}} className="logo" /> */}
                                {/* <object style={{cursor: "pointer", height: 30, width: 40}}  data={apdp_logo} className="logo" type="image/svg+xml"></object> */}
                            </div>  
                        {/* </a> */}
                            
                            <div className=" d-none d-md-flex header-block-2-div-2 d-flex flex-row justify-content-around">
                                {/* <div className=" row d-flex  justify-content-around"> */}
                                <div className="col" style={{color: "#292929", font: "normal normal normal 15px/35px Roboto", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px'}}> 
                                    <a className="code_numerique" target={"_blank"} href={code_numerique} rel={"noopener noreferer"} > CODE DU NUMERIQUE </a> 
                                </div>
                                <div className="col" style={{color: "#292929", font: "normal normal normal 15px/35px Roboto", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px'}} onClick={handleClickRecommandations}> RECOMMANDATIONS</div>
                                    <div    className='dropdown'
                                            onMouseLeave={() => setShowDropdownApdp(false)}
                                            onMouseOver={() => setShowDropdownApdp(true)}
                                    >
                                        <div className="dropdown-toggle drop-class" style={{ font: "normal normal normal 15px/35px Roboto", cursor: "pointer", width: 'fit-content', flex: 'none', padding: '20px'}}

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

                                { localStorage.getItem("user_token") ? <div>
                                    <Button color="danger" style={{ margin: '20px' }} onClick={session_logout} className="client-espace-button"><h6>Déconnexion</h6></Button>
                                </div>:<div></div>}
                    </div>

                    <div className="header-block-3">
                        <NavBar/>
                    </div>
                    <AiOutlineFileSearch title='Rechercher une décision' onClick={searchDecisionsShortcut} style={{ height: 45, width: 40, color: 'white', cursor: 'pointer', position: 'relative', float: 'right', right: '80px', margin: '-50px', top: '-1px' }} />
                    
                </div>     
            </React.Fragment>
    )
}

export default Header
