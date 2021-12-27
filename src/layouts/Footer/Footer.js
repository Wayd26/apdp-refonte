import React from "react";
import { Row, Col } from "reactstrap"
import "./Footer.css"
import apdp_logo from "../../assets/images/logoapdp.svg"
import {FaFacebook, FaTwitter, FaYoutube, FaPaperPlane} from "react-icons/fa"

const Footer = () => {
  return <div className="pg-footer">
    <div className="footer">
      <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100"
        preserveAspectRatio="none">
        <path className="footer-wave-path"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      <div className="footer-content-2">
        
         
          <Row className="footer-menu-2">
            <Col sm={4}>
                <h5 style={{
                    color: "white",
                    textAlign: "start",
                    marginBottom: 5
                }}>Recevez l'actualité en vous abonnant à notre Newletter</h5>
                <Row>
                    <Col><input type="text" className="form-control" placeholder="Votre nom" aria-label="Recipient's username" aria-describedby="basic-addon2" /></Col>
                    <Col><input type="text" className="form-control" placeholder="Votre prénom" aria-label="Recipient's username" aria-describedby="basic-addon2" /></Col>
                </Row>
                <div className="input-group mb-3 mt-4">
                <input type="text" className="form-control" placeholder="Votre e-mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span style={{
                    backgroundColor: "#FFBE00",
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }} classNameName="input-group-text bckColorDark text-white" id="basic-addon2">
                    <FaPaperPlane />
                </span>
                </div>

            </Col>
            <Col style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                flexDirection: "row"
            }}>
                <div className="d-flex flex-column justify-content-center align-items-center" >

               <div> Rejoignez-nous</div>
                <div className="d-flex flex-row">

                <a className="linkedin social-container" href="#" target="_blank">
                <span className="hidden-link-text">Facebook</span>
                <FaFacebook style={{width: `40px`, color: `#2289FF`, fontSize:30}} />
                </a>
                <a className="twitter social-container" style={{
                  backgroundColor: "#2289FF"
                }} href="#" target="_blank">
                <span className="hidden-link-text">Twitter</span>
                <FaTwitter style={{width: `40px`, color: `white`,  fontSize:30}} />
                </a>
                <a className="youtube social-container" href="#" target="_blank">
                <span className="hidden-link-text">Youtube</span>
                <FaYoutube style={{width: `40px`, color: `red`,  fontSize:30}} />
                </a>
                </div>
                <div style={{
                  fontSize: 10
                }}>
                Ne ratez pas l'actualité de l'APDP en temps réel sur nos réseaux sociaux.
                </div>
                </div>
            </Col>
        </Row>
       
        
        
        
      </div>
      <div className="footer-copyright">
      <div className="footer-content">
        <div className="footer-content-column">
          <div className="footer-logo">
            <a className="footer-logo-link" href="#">
              <span className="hidden-link-text">LOGO</span>
              <object data={apdp_logo}  alt="LOGO" className="img-fluid" type="image/svg+xml"></object>

            </a>
          </div>

          <div style={{
            marginTop: "10%",
            textAlign: "start",
          }}>
            <div className="my-1" >Mentions légales</div>
            <div>Politique de confidentialité</div>
          </div>
         
        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> ESPACE JURIDIQUE ET ACTUALITÉ</h2>
            <ul id="menu-company" className="footer-menu-list">
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Décrets et Arrêtés</a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a href="#">Autres documents</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Événements</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Presse</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Photothèque</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Procédures</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="footer-content-column">
          <div className="footer-menu">
            <h2 className="footer-menu-name"> VOS PROTECTIONS</h2>
            <ul id="menu-quick-links" className="footer-menu-list">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Vos Mentions Légales</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#">Procédures</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Informez-vous</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Arnaque du mois</a>
              </li>
              <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                <a href="#">Lu pour vous</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Conseils</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Mes devoirs</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page">
                <a href="#">Mes droits</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="footer-content-column">
          <div className="footer-call-to-action">
            <h2  className="footer-call-to-action-title">ADDRESS</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: "max-content"
            }}>

            <div className='d-flex justify-content-center align-items-center'><i class="ri-map-pin-2-fill fw-bold mx-1" style={{fontSize: 30, marginRight: 10}}></i>Rue 6 . 076 El Marzouk Joël  COTONOU</div>
            <div className='d-flex justify-content-center align-items-center'><i class="ri-mail-line fw-bold mx-1" style={{fontSize: 30, marginRight: 10 }}></i>contact@apdp.bj</div>
            <div className='d-flex justify-content-center align-items-center'> <i class="ri-phone-fill fw-bold mx-1" style={{fontSize: 30, marginRight: 10}}></i>(+ 229 ) 21 32 57 88</div>
            </div>
          </div>

        </div>
       
      </div>
        
      </div>
      <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">
            <a className="footer-copyright-link text-white" href="#" target="_self"> © Copyright 2021, APDP. Tous droits réservés.</a>
          </p>
        </div>
      <div className="flag-look-like">
        <div className="col green-block"></div>
        <div className="col yellow-block"></div>
        <div className="col red-block"></div>
      </div>
    </div>
  </div>



  // <div classNameName="footer w-100 p-2">
  //   <Row>
  //   <Col sm={3}>
  //   <div classNameName="bold-footer-text">Abonnez-vous à la newsletter</div>
  //   </Col>
  //   <Col sm={3}>
  //     <div classNameName="bold-footer-text">Espace Juridique et Actualite</div>
  //     <div classNameName="">Autres documents</div>
  //     <div classNameName="bold-footer-text"></div>Évènements
  //     <div classNameName="bold-footer-text"></div>Presse
  //     <div classNameName="bold-footer-text"></div>Photothèque
  //     <div classNameName="bold-footer-text"></div>Procédures
  //     </Col>
  //   <Col sm={3} >
  //   <div classNameName="bold-footer-text">Liens utiles</div>
  //   <div classNameName="">Vos mentions légales</div>
  //   <div classNameName="">Procédures</div>
  //   <div classNameName="">Informez-vous</div>
  //   <div classNameName="">Arnaque du mois</div>
  //   <div classNameName="">Lu pour vous</div>
  //   <div classNameName="">Conseils</div>
  //   <div classNameName="">Mes devoirs</div>
  //   <div classNameName="">Mes droits</div>
  //   </Col>
  //   <Col sm={3}>
  //   <div classNameName="">Appelez-nous 5jrs/7</div>
  //   <div classNameName="">(+229) 21 22 23 24 / 64 65 66 67</div>
  //   </Col>
  // </Row>;
  // <div classNameName="copyright-text">c {new Date().getFullYear()} | Autorité de protection de données à caractère personnel apdp.bj</div>
  // <Row>
  //   <Col sm={4} classNameName="greenFlag"></Col>
  //   <Col sm={4}classNameName="yellowFlag"></Col>
  //   <Col sm={4}classNameName="redFlag"></Col>
  // </Row>
  // </div>;
};

export default Footer;
