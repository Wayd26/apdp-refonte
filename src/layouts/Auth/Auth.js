import React, { useState } from 'react'
import "./Auth.css"
import apdp_logo from "../../assets/images/logoapdp.svg"
 import big_head from "../../assets/icons/big_head.svg"
 import signin from "../../assets/icons/signin.svg"
 import signup from "../../assets/icons/signup.svg"
 import facebook from "../../assets/icons/facebook.svg"
 import gmail from "../../assets/icons/gmail.svg"
 import {ImMail3} from "react-icons/im"
 import {FiKey} from "react-icons/fi"
 import {IoMdEye} from "react-icons/io"
 import {IoMdEyeOff} from "react-icons/io"
 import {BsArrowRightShort} from "react-icons/bs"
 import {FaUser} from "react-icons/fa"
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';


const SignIn = () => {

    const [connexion, setConnexion] = useState(true);
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [isOpen,setIsOpen] = useState(false)

    const handleAuthOperation = () => { 
            setConnexion(!connexion);     
    }

    const handlePasswordVisibility = () => {
        setPasswordIsVisible(!passwordIsVisible);
    }

    const toggle_modal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={"auth"}>
            {/* <div className={"auth-header row  d-flex flex-nowrap justify-content-between "}>
                <div className={"col-3"}>
                    <img src={apdp_logo} className={"auth-apdp-logo"}/>
                </div>
                    
                <div className={"col-2"}>
                <button  onClick={toggle_modal} className={"auth-lang-button"}>FR</button>
                    </div>
            </div> */}

            <div className={"auth-intern-card row d-flex flex-wrap"}>
                <div className={"auth-illustrartion-card col"}>
                {connexion === true ? <img src={signin} className={"auth-illlustration-icon"}/> : <img src={signup} className={"auth-illlustration-icon"}/>}
                    
                </div>
                <div className={"auth-form-card col"}>
                    <p className={"auth-title"}>{connexion === true ? "Connexion" : "Inscription"}</p>
                    <div className={"text-center row d-flex justify-content-around mb-3"}>
                        {/* <span className={"auth-social-btn"}> */}
                        <img src={facebook} className={"auth-social-btn"}/>
                        {/* </span> */}
                        {/* <span className={"auth-social-btn"}> */}
                        <img src={gmail} className={"auth-social-btn"}/>
                        {/* </span> */}
                    </div>
                    <div className={"row d-flex flex-nowrap"}>
                        <div className={"col"}>
                        <hr></hr>
                        </div>
                        <div className={"col-1 pt-1"}>
                        ou
                        </div>
                        <div className={"col"}>
                        <hr></hr>
                        </div>
                    </div>

                    { connexion === false ? <div className={"auth-form-input-container"}>
                        <FaUser className={"auth-form-input-icon"}/>
                        <input placeholder={"Entrer votre pseudo"} className={"auth-form-input"}/>
                    </div> : null }

                    <div className={"auth-form-input-container"}>
                        <ImMail3 className={"auth-form-input-icon"}/>
                        <input placeholder={"Entrer votre mail"} className={"auth-form-input"}/>
                    </div>
                    <div className={"auth-form-input-container "}>
                        <FiKey className={"auth-form-input-icon key"}/>
                        <input placeholder={"Entrer votre mot de passe"} type={passwordIsVisible == false ? "password" : "text"} className={"auth-form-input"}/>
                       { passwordIsVisible == false ?
                       <IoMdEye className={"auth-form-input-pwd-eye"} onClick={handlePasswordVisibility}/> : 
                        <IoMdEyeOff className={"auth-form-input-pwd-eye"} onClick={handlePasswordVisibility}/>
                       } 
                    </div>

                    {connexion== false ? <div className={"auth-form-under-link"}>
                        <input className={"auth-form-checkbox"} type="checkbox"/>
                        <span className={"auth-form-checkbox-first-text"}>J'ai lu et j'accepte </span>
                        <span className={"auth-form-checkbox-second-text"}>les contions générales d'utilisation.</span>
                    </div> : null }

                    <div className={"auth-form-under-link row d-flex justify-content-between"}>

                    <div className={"col-7 auth-form-password-forgotten"}>{ connexion == true ? "Mot de passe oublié ?" : ""}</div>
                    {/* <div className={"col-5 auth-form-other-option d-flex flex-nowrap justify-content-end"} onClick={handleAuthOperation}>{ connexion == true ? "S'inscrire" : "Se Connecter"}</div> */}
                    </div>
                    <button className={"auth-form-btn"}>{ connexion == false ? "S'inscrire" : "Se Connecter"}<BsArrowRightShort className={"auth-form-btn-arrow-icon"}/></button>

                       <p className={"mb-3"}>
                           <span className={"auth-form-checkbox-first-text"}>{ connexion == true ? "Vous n'avez pas encore un compte ?" : "Vous avez déjà un compte ?"}</span>
                           <span className={"auth-form-other-option "} onClick={handleAuthOperation}>{ connexion == true ? " S'inscrire" : " Se Connecter"}</span>
                       </p>

                </div>

            </div>
        </div>
    )
}

export default SignIn
