import React from "react";
import { Row, Col } from "reactstrap"
import "./Footer.css"
import apdp_logo from "../../assets/images/logoapdp.svg"
import { FaFacebook, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa"
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
  }

  const goHome = () => {
    window.location.replace("/")
  }

  return <div className="pg-footer">
    <div className="footer">
      {/* <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100"
        preserveAspectRatio="none">
        <path className="footer-wave-path"
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg> */}
      {/* <div className="footer-content-2"> */}


      {/* <Row className="footer-menu-2">
          <Col sm={1}></Col>
          <Col sm={4}>
            <h5 style={{
              color: "white",
              textAlign: "start",
              marginBottom: 5
            }}>Recevez l'actualité en vous abonnant à notre Support</h5>
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
              }} className="input-group-text bckColorDark text-white" id="basic-addon2">
                <FaPaperPlane />
              </span>
            </div>
            <button className="footer-subscribe-button">S'abonner</button>

          </Col>
          <Col style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "row"
          }}>
            <div className="d-flex flex-column justify-content-center align-items-center" >

              <div style={{ font: "normal normal bold 25px/30px Montserrat" }}> Rejoignez-nous</div>
             
              <div style={{
                fontSize: 15
              }}>
                Ne ratez pas l'actualité de l'APDP en temps réel sur nos réseaux sociaux.
              </div>
            </div>
          </Col>
        </Row> */}




      {/* </div> */}
      <div className="footer-copyright">
        <div className="footer-content">
          <div className="col-sm-3 col-xs-12">
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
              textAlign: "start",
            }}>
              {/* <div className="my-1" >Mentions légales</div> */}

            </div>

          </div>
          <div className="col-sm-2 col-xs-12">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> INFORMATIONS </h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Politique de confidentialité</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Mentions Légales</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/vos-démarches">Vos démarches</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Arnaque du mois</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12" >
            <div className="footer-menu" style={{ paddingRight: 30 }}>

              <div >
                <h5 style={{
                  color: "white",
                  textAlign: "start",
                  maxWidth: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: 10
                }}>Recevez l'actualité en vous abonnant à notre Support</h5>
                {/* <div className="flex"> */}
                {/* <Col> */}
                <input style={{ borderRadius: 5, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} type="text" className="form-control mb-2" placeholder="Votre nom" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                {/* </Col> */}
                {/* <Col> */}
                <input style={{ borderRadius: 5, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} type="text" className="form-control mb-2" placeholder="Votre prénom" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                {/* </Col> */}
                {/* </div> */}
                <div className="input-group mb-3">
                  <input style={{ borderRadius: 5, maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }} type="text" className="form-control" placeholder="Votre e-mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  {/* <span style={{
                    backgroundColor: "#FFBE00",
                    width: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }} className="input-group-text bckColorDark text-white" id="basic-addon2">
                    <FaPaperPlane />
                  </span> */}
                </div>
                <button className="footer-subscribe-button" style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}>S'abonner</button>

              </div>


              {/*  */}



            </div>
          </div>
          <div className="col-sm-3 col-xs-12">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">CONTACT</h2>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                // alignItems: 'flex-start',
                // width: "max-content"
              }}>

                <div className='d-flex justify-content-left align-items-center'><i className="ri-map-pin-2-fill fw-bold mx-1" style={{ fontSize: 30, marginRight: 10 }}></i><span style={{ font: 'normal normal normal 14px/20px Montserrat' }}>Rue 6 . 076 El Marzouk Joël  COTONOU</span></div>
                <div className='d-flex justify-content-left align-items-center'><i className="ri-mail-line fw-bold mx-1" style={{ fontSize: 30, marginRight: 10 }}></i><span style={{ font: 'normal normal normal 14px/20px Montserrat' }}>contact@apdp.bj</span></div>
                <div className='d-flex justify-content-left align-items-center'> <i className="ri-phone-fill fw-bold mx-1" style={{ fontSize: 30, marginRight: 10 }}></i><span style={{ font: 'normal normal normal 14px/20px Montserrat' }}>(+ 229 ) 21 32 57 88</span></div>


                <div className='d-flex  align-items-start'>
                  <div className="d-flex flex-row justify-content-between">

                    {/* <a className="linkedin social-container" href="#" target="_blank"> */}
                    {/* <span className="hidden-link-text">Facebook</span> */}
                    <FaFacebook style={{ width: `40px`, color: `#2289FF`, fontSize: 30, margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('fb')} />
                    {/* </a> */}
                    {/* <a className="twitter social-container" style={{backgroundColor: "#2289FF"}} href="#" target="_blank"> */}
                    {/* <span className="hidden-link-text" style={{ backgroundColor: "#FFFFFF" }}>Twitter</span> */}
                    <FaTwitter style={{ color: "#2289FF", width: "30px", fontSize: "30px", backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "3px", margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('tw')} />
                    {/* </a> */}
                    {/* <a className="youtube social-container" href="#" target="_blank"> */}
                    {/* <span className="hidden-link-text">Youtube</span> */}
                    <FaYoutube style={{ width: `40px`, color: `red`, fontSize: 30, margin: 5, cursor: 'pointer' }} onClick={() => redirectSocialMedia('yt')} />
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      {/* <div className="visitor-number-p">Nombre de visites : <span id="visits" className="visitor-number-span">{visitsNumber}</span></div> */}
      {/* <div className="footer-copyright-wrapper"> */}
      <div className="mx-auto mt-4 mb-5 text-center">
        <p className="visitor-number-p">Nombre de visites : <span id="visits" className="visitor-number-span">{visitsNumber}</span></p>

        {/* <p className="footer-copyright-text">
          <a className="footer-copyright-link text-white" href="#" target="_self">
            © Copyright {new Date().getFullYear()}, APDP. Tous droits réservés.
          </a>
        </p> */}
      </div>
      {/* </div> */}

      <p className="footer-copyright-text">
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



  // <div className="footer w-100 p-2">
  //   <Row>
  //   <Col sm={3}>
  //   <div className="bold-footer-text">Abonnez-vous à la newsletter</div>
  //   </Col>
  //   <Col sm={3}>
  //     <div className="bold-footer-text">Espace Juridique et Actualite</div>
  //     <div className="">Autres documents</div>
  //     <div className="bold-footer-text"></div>Évènements
  //     <div className="bold-footer-text"></div>Presse
  //     <div className="bold-footer-text"></div>Photothèque
  //     <div className="bold-footer-text"></div>Procédures
  //     </Col>
  //   <Col sm={3} >
  //   <div className="bold-footer-text">Liens utiles</div>
  //   <div className="">Vos mentions légales</div>
  //   <div className="">Procédures</div>
  //   <div className="">Informez-vous</div>
  //   <div className="">Arnaque du mois</div>
  //   <div className="">Lu pour vous</div>
  //   <div className="">Conseils</div>
  //   <div className="">Mes devoirs</div>
  //   <div className="">Mes droits</div>
  //   </Col>
  //   <Col sm={3}>
  //   <div className="">Appelez-nous 5jrs/7</div>
  //   <div className="">(+229) 21 22 23 24 / 64 65 66 67</div>
  //   </Col>
  // </Row>;
  // <div className="copyright-text">c {new Date().getFullYear()} | Autorité de protection de données à caractère personnel apdp.bj</div>
  // <Row>
  //   <Col sm={4} className="greenFlag"></Col>
  //   <Col sm={4}className="yellowFlag"></Col>
  //   <Col sm={4}className="redFlag"></Col>
  // </Row>
  // </div>;
};

export default Footer;
