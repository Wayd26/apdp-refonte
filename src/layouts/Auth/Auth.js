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
import {register_or_login, get_user} from '../../http/http';
import { ToastContainer, toast } from 'react-toastify';
import { Form } from 'react-bootstrap'


const SignIn = () => {

    const [connexion, setConnexion] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [isOpen,setIsOpen] = useState(false)

    const handleAuthOperation = () => { 
            setConnexion(!connexion);     
    }

    console.log(document.cookie)

    const handlePasswordVisibility = () => {
        setPasswordIsVisible(!passwordIsVisible);
    }

    const toggle_modal = () => {
        setIsOpen(!isOpen)
    }

    const submit = async (e) => {
        e.preventDefault();
        const data = connexion ? {
            email: email,
            password: password,
        } :{
            name: username,
            email: email,
            password: password,
            password_confirmation: password,
        }
        const resp = await register_or_login(connexion ? "login" :"register",data)
        try {
            if (resp.data.success){
                if (connexion) {
                    toast.success("Authentification réussie !!!");
                    localStorage.setItem("user_token", resp.data.data.token);
                } else {
                    toast.success("Inscription réussie !!!");
                    localStorage.setItem("user_token", resp.data.data.token);
                }
                const user = await get_user(localStorage.getItem("user_token"));
                console.log(user.data);
                if (user.data.id){
                    toast.success(`Bienvenue ${user.data.name}`);
                    localStorage.setItem("user_id",user.data.id);
                    localStorage.setItem("user_name",user.data.name);
                    localStorage.setItem("user_email",user.data.email);
                    setTimeout(() => {
                        if (localStorage.getItem("redirect_url") !== null){
                            window.location = localStorage.getItem("redirect_url");
                        } else {
                            window.location = '/';
                        }
                    }, 3000);
                } else {
                    localStorage.clear()
                };
            }
        } catch (error) {
            if (connexion) {
                toast.error("Email ou mot de passe incorrect !");  
            } else {
                toast.error("Email ou pseudo déjà existant !");
            }
        };
    }
    return (
        <form name='authentication_form' onSubmit={submit}>
            <div className={"auth"}>
                {/* <div className={"auth-header row  d-flex flex-nowrap justify-content-between "}>
                    <div className={"col-3"}>
                        <img src={apdp_logo} className={"auth-apdp-logo"}/>
                    </div>
                        
                    <div className={"col-2"}>
                    <button  onClick={toggle_modal} className={"auth-lang-button"}>FR</button>
                        </div>
                </div> */}
                <ToastContainer />

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
                            <input onChange={(e) => setUsername(e.target.value)} placeholder={"Entrer votre pseudo"} className={"auth-form-input"} title="Ce champ est requis..." required/>
                        </div> : null }

                        <div className={"auth-form-input-container"}>
                            <ImMail3 className={"auth-form-input-icon"}/>
                            <input onChange={(e) => setEmail(e.target.value)} placeholder={"Entrer votre mail"} className={"auth-form-input"} type="email" required />
                        </div>
                        <div className={"auth-form-input-container d-flex flex-nowrap "}>
                            <FiKey className={"auth-form-input-icon key"}/>
                            <input onChange={(e) => setPassword(e.target.value)} placeholder={"Entrer votre mot de passe"} type={passwordIsVisible === false ? "password" : "text"} className={"auth-form-input"} minLength="8"  required/>
                        { passwordIsVisible === false ?
                        <IoMdEye className={"auth-form-input-pwd-eye"} onClick={handlePasswordVisibility}/> : 
                            <IoMdEyeOff className={"auth-form-input-pwd-eye"} onClick={handlePasswordVisibility}/>
                        } 
                        </div>

                        {connexion== false ? <div className={"auth-form-under-link"}>
                            <input className={"auth-form-checkbox"} type="checkbox" required/>
                            <span className={"auth-form-checkbox-first-text"}>J'ai lu et j'accepte </span>
                            <span className={"auth-form-checkbox-second-text"}>les contions générales d'utilisation.</span>
                        </div> : null }

                        <div className={"auth-form-under-link row d-flex justify-content-between"}>

                        <div className={"col-7 auth-form-password-forgotten"}>{ connexion === true ? "Mot de passe oublié ?" : ""}</div>
                        {/* <div className={"col-5 auth-form-other-option d-flex flex-nowrap justify-content-end"} onClick={handleAuthOperation}>{ connexion === true ? "S'inscrire" : "Se Connecter"}</div> */}
                        </div>
                        <button type='submit' className={"auth-form-btn"}>{ connexion === false ? "S'inscrire" : "Se Connecter"}<BsArrowRightShort className={"auth-form-btn-arrow-icon"}/></button>

                        <p className={"mb-3"}>
                            <span className={"auth-form-checkbox-first-text"}>{ connexion === true ? "Vous n'avez pas encore un compte ?" : "Vous avez déjà un compte ?"}</span>
                            <span className={"auth-form-other-option "} onClick={handleAuthOperation}>{ connexion === true ? " S'inscrire" : " Se Connecter"}</span>
                        </p>

                    </div>

                </div>
            </div>
        </form>
    )
}

export default SignIn
