import React from "react";
import { Row, Col } from "reactstrap"
import "./Footer.css"
import apdp_logo from "../../assets/images/logoapdp.svg"
import { FaFacebook, FaTwitter, FaYoutube, FaWhatsappSquare, FaWhatsapp } from "react-icons/fa"
import { getVisitsNumber } from "../../http/http";
import { DOMAIN_URL } from "../../constants/Constant";

const Footer = () => {

  const [visitsNumber, setVisitsNumber] = React.useState(0)



  React.useEffect(() => {
    if (localStorage.getItem("visits") != undefined) {
      var visits_number = localStorage.getItem("visits")
      setVisitsNumber(visits_number)
    }
  }, [])

  const redirectSocialMedia = (type) => {
    if (type == 'fb') {
      window.location.href = "https://web.facebook.com/apdpofficiel"
    }
    if (type == 'tw') {
      window.location.href = "https://twitter.com/APDP_BENIN"
    }
    if (type == 'yt') {
      window.location.replace('/videotheque')
    }
    if (type == 'wa') {
      // window.location.replace('/videotheque')
    }
  }

  const goHome = () => {
    window.location.replace("/")
  }

  return <div className="pg-footer">
    <div className="footer">
    
      <div className="footer-copyright">
        <div className="footer-content">
          <div className="col-sm-4 col-xs-12 text-center">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <div style={{ cursor: "pointer" }} onClick={goHome}>
                  <object data={apdp_logo} alt="LOGO" className="img-fluid" type="image/svg+xml"></object>
                </div>
              </a>
            </div>

            <div style={{
              marginTop: "10%",
              // textAlign: "start",
            }}>
              <div className="footer-menu">
              <h2 style={{textAlign: 'left'}} className="footer-menu-name"> INFORMATIONS </h2>
              <ul id="menu-company" className="footer-menu-list">
                <li style={{textAlign: 'left'}} className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Politique de confidentialité</a>
                </li>
                <li style={{textAlign: 'left'}} className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Mentions Légales</a>
                </li>
              
              </ul>
            </div>

            </div>

          </div>
          
          <div className="col-sm-4 col-xs-12 text-center" >
            <div className="footer-menu" 
            // style={{ paddingRight: 30 }}
            >

              <div >
                <h5 style={{
                  color: "white",
                  textAlign: "left",
                  maxWidth: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 10
                }}>Recevez l'actualité en vous abonnant à notre Support</h5>
                
                <input style={{ borderRadius: 5, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} type="text" className="form-control mb-2" placeholder="Votre nom" aria-label="Recipient's username" aria-describedby="basic-addon2" />
               
                <input style={{ borderRadius: 5, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} type="text" className="form-control mb-2" placeholder="Votre prénom" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              
                <div className="input-group mb-3">
                  <input style={{ borderRadius: 5, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} type="text" className="form-control" placeholder="Votre e-mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                 
                </div>
                <button className="footer-subscribe-button" style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}>S'abonner</button>

              </div>

            </div>
          </div>

          <div className="col-sm-4 col-xs-12 text-center">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title" style={{textAlign: 'left'}}>CONTACTS</h2>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}>

                <div className='d-flex justify-content-left align-items-center'><i className="ri-map-pin-2-fill fw-bold mx-1" style={{ fontSize: 30, marginRight: 10 }}></i><span style={{ font: 'normal normal normal 14px/20px Montserrat' }}>Rue 6 . 076 El Marzouk Joël  COTONOU</span></div>
                <div className='d-flex justify-content-left align-items-center'><i className="ri-mail-line fw-bold mx-1" style={{ fontSize: 30, marginRight: 10 }}></i><span style={{ font: 'normal normal normal 14px/20px Montserrat' }}>contact@apdp.bj</span></div>
                <div className='d-flex justify-content-left align-items-center'> <i className="ri-phone-fill fw-bold mx-1" style={{ fontSize: 30, marginRight: 10 }}></i><span style={{ font: 'normal normal normal 14px/20px Montserrat' }}>(+ 229 ) 21 32 57 88</span></div>


                <div className='d-flex  align-items-start'>
                  <div className="d-flex flex-row justify-content-between">
                    <FaFacebook style={{ width: `40px`, color: `#2289FF`, fontSize: 30, margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('fb')} />
                    <FaTwitter style={{ color: "#2289FF", width: "30px", fontSize: "30px", backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "3px", margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('tw')} />
                    <FaYoutube style={{ width: `40px`, color: `red`, fontSize: 30, margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('yt')} />
                    <FaWhatsapp style={{ width: `40px`, color: `green`, fontSize: 30, margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('wa')} />
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>
      <div className="mx-auto mt-4 mb-5 text-center">

       
        <p className="visitor-number-p">Nombre de visites : <span id="visits" className="visitor-number-span">{visitsNumber}</span></p>
      </div>

      <p className="footer-copyright-text mb-5">
        <a className="footer-copyright-link text-white" href="#" target="_self">
          © Copyright {new Date().getFullYear()}, APDP. Tous droits réservés.
        </a>
      </p>
      <div className="flag-look-like">
        <div className="col green-block"></div>
        <div className="col yellow-block"></div>
        <div className="col red-block"></div>
      </div>
    </div>
  </div>

};

export default Footer;
