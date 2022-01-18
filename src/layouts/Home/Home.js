import React from "react";
import UserTypeCard from "../../components/UserTypeCard/UserTypeCard";
import "./Home.css";
import { Row } from "react-bootstrap";
import lottie from "lottie-web";
import RightDutyCard from "../../components/RightDutyCard/RightDutyCard";
import ShortcutCard from "../../components/ShortcutCard/ShortcutCard";
import dots from "../../assets/icons/dots.svg";
import services_illustration from "../../assets/icons/services_illustration.svg";
import FaqSection from "../../components/FaqSection/FaqSection";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import CardOnCaroussel from "../../components/CardOnCaroussel/CardOnCaroussel";
import ActualiteCarousel from "../../components/ActualiteCarousel/ActualiteCarousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const shortcuts = [
    {"label":"Mentions legales"},
    {"label":"Plaintes"},
    {"label":"Activités"},
    {"label":"Lois"}
  ]

  const handleClickCard = (cardClicked) => {
    navigate(`/${cardClicked}`);
  };

  return (
    <div className={"Home"}>

        <ActualiteCarousel/>
  
      

      {/* User Type Section */}
      <Row className={"my-5"}>
        <div className={"user-type-div row d-flex justify-content-between"}>
          <div className={"col-md-10 col-sm-12 mx-auto"}>
            <div className={"row d-flex flex-wrap justify-content-around "}>
              <UserTypeCard
                handleClick={() => handleClickCard("vos-droits")}
                type={"right"}
                description={"Si un responsable de traitement estime qu’une demande..."}
              />
              <UserTypeCard
                handleClick={() => handleClickCard("vos-devoirs")}
                type={"duty"}
                description={"Vous avez la possibilité de bloquer l’accès de..."}
              />
              <UserTypeCard
                handleClick={() => handleClickCard("faire-une-demande")}
                type={"demand"}
                description={"Tout citoyen peut s’adresser à l’APDP pour..."}
              />
            </div>
          </div>
        </div>
      </Row>
      <Row className={"d-flex justify-content-end pr-5"}>
        <img className={"dots mr-5"} src={dots} />
      </Row>
      <br />
      <Row className={"mt-5"}>
        <div className={"prestation-div row"}>
          <div className={"col-sm-6"}>
            <p className={"prestation-div-text"}>
              Découvrez les différents prestations que nous proposons à nos
              usagers.
            </p>
            <button className={"our-services-btn"}>Nos Services</button>
          </div>
          <div className={"col-sm-6"}>
            <div id={"illustration"} className={"our-services-illustration"}>
              <img
                src={services_illustration}
                className={"services-illustration-img"}
              />
            </div>
          </div>
        </div>
      </Row>
      <br />
      {/* Rights and Duties Section */}
      <div className={"rights-duties-section"}>
        <p className={"rights-duties-title"}>Vos Droits & Devoirs</p>
        <div className={"row"}>
          <div className={"col-sm-2"}>
            <img className={"dots"} src={dots} />
          </div>
          <div className={"col-sm-8 mx-auto"}>
            <p className={"rights-duties-text px-5"}>
            Vous trouverez ici des informations sur vos droits et devoirs.
            </p>
            <div className={"row d-flex flexwrap justify-content-around"}>
              <RightDutyCard bntClicked={() => handleClickCard("vos-droits")} type={"right"} />
              <RightDutyCard btnClicked={() => handleClickCard("vos-devoirs")} type={"duty"} />
            </div>
          </div>
          <div className={"col-sm-2"}></div>
        </div>
      </div>
      {/* Forms Section */}

      <div className={"forms-section"}>
        {/* <p className={"form-section-title"}>Formulaires</p> */}
        <p className={"form-section-subtitle"}>Liens Rapides</p>
        <div className={"row"}>
          <div className={"col-sm-8 mx-auto"}>
            <div className={"row d-flex justify-content-around"}>
              {/* {shortcuts.map((i, item) => ( */}
              
                 <ShortcutCard ind={0} label={"Mentions Légales"}  />
                 <ShortcutCard ind={1} label={"Lois"}  />
                 <ShortcutCard ind={2} label={"Communiqués"}  />
             
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};

export default Home;
