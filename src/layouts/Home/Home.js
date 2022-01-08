import React from 'react'
import UserTypeCard from '../../components/UserTypeCard/UserTypeCard'
import './Home.css'
import { Row } from 'react-bootstrap'
import lottie from 'lottie-web';
import RightDutyCard from '../../components/RightDutyCard/RightDutyCard';
import ShortcutCard from '../../components/ShortcutCard/ShortcutCard';
import dots from '../../assets/icons/dots.svg'
import services_illustration from '../../assets/icons/services_illustration.svg'
import FaqElement from '../../components/FaqElement/FaqElement';
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import CardOnCaroussel from '../../components/CardOnCaroussel/CardOnCaroussel';
import {useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const handleClickCard = (cardClicked) => {
        navigate(`/${cardClicked}`);
    }

    return (
        <div className={'Home'}>
            {/* Caroussel Section */}

            <div id="carouselExampleCaptions" className={'carousel slide'} data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img5} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
        <CardOnCaroussel />
      </div>
    </div>
    <div className="carousel-item">
      <img src={img6} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img7} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            {/* User Type Section */}
            <Row className={'my-5'}>
                <div className={'user-type-div row d-flex justify-content-between'}>
                    <div className={'col-md-10 col-sm-12 mx-auto'}>
                        <div className={'row d-flex flex-wrap justify-content-around '}>

                            <UserTypeCard handleClick={() => handleClickCard("vos-droits")}  type={'right'} description={'Lorem ici ce sont dolor pour les sit mes droits'}/>
                            <UserTypeCard type={'duty'} description={'Lorem ipsum amet demae sont  amet mes devoirs'}/>
                            <UserTypeCard type={'demand'} description={'Lorem ipsum dolor pour les sit amet demandes'}/>
                        </div>
                    </div>
                </div>
            </Row>
            <Row className={'d-flex justify-content-end pr-5'}>
                <img className={'dots mr-5'} src={dots} />
            </Row>
            <br />
            <Row className={'mt-5'}>
                <div className={'prestation-div row'}>
                    <div className={'col-sm-6'}>
                        <p className={'prestation-div-text'}>Découvrez les différents prestations que nous proposons à nos usagers.</p>
                        <button className={'our-services-btn'}>Nos Services</button>
                    </div>
                    <div className={'col-sm-6'}>
                        <div id={'illustration'} className={'our-services-illustration'}>
                            <img src={services_illustration} className={'services-illustration-img'} />
                        </div>
                    </div>
                </div>
            </Row>
            <br />
            {/* Rights and Duties Section */}
            <div className={'rights-duties-section'}>
                <p className={'rights-duties-title'}>Vos Droits & Devoirs</p>
                <div className={'row'}>
                    <div className={'col-sm-2'}>
                        <img className={'dots'} src={dots} />
                    </div>
                    <div className={'col-sm-8 mx-auto'}>
                        <p className={'rights-duties-text px-5'}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Incididunt Ut Labore.</p>
                        <div className={'row d-flex flexwrap justify-content-around'}>

                            <RightDutyCard type={'right'} />
                            <RightDutyCard type={'duty'} />
                        </div>

                    </div>
                    <div className={'col-sm-2'}></div>
                </div>
            </div>
            {/* Forms Section */}

            <div className={'forms-section'}>

                <p className={'form-section-title'}>Formulaires</p>
                <p className={'form-section-subtitle'}>Liens Rapides</p>
                <div className={'row'}>
                    <div className={'col-sm-8 mx-auto'}>
                        <div className={'row d-flex justify-content-around'}>
                            {[...Array(12).keys()].map(i => <ShortcutCard ind={i} />)}
                        </div>
                    </div>
                </div>
            </div>


            {/* FAQ Section */}
            <div className={'faq-section'}>
                <p className={'guide-faq-title'}>Foire Aux Questions</p>
                <p className={'guide-faq-subtitle'}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt </p>
                {
                    [0, 1, 2, 3, 4].map(i => <FaqElement />)
                }
            </div>


        </div>
    )
}

export default Home
