import React from 'react'
import UserTypeCard from '../../components/UserTypeCard/UserTypeCard'
import './Home.css'
import { Row } from 'react-bootstrap'
import lottie from 'lottie-web';
import RightDutyCard from '../../components/RightDutyCard/RightDutyCard';
import ShortcutCard from '../../components/ShortcutCard/ShortcutCard';
import dots from '../../assets/icons/dots.svg'
import services_illustration from '../../assets/icons/services_illustration.svg'
import img7 from '../../assets/images/img7.jpg'

const Home = () => {


    return (
        <div className={'Home'}>
            {/* User Type Section */}
            <Row className={'mb-5'}>
                <div className={'user-type-div row d-flex justify-content-between'}>
                    <div className={'col-sm-10 mx-auto'}>
                        <div className={'row d-flex flex-nowrap justify-content-around '}>

                            <UserTypeCard />
                            <UserTypeCard />
                            <UserTypeCard />
                        </div>
                    </div>
                </div>
            </Row>
            <br />
            <Row className={'mt-5'}>
                <div className={'prestation-div row'}>
                    <div className={'col-sm-6'}>
                        <p className={'prestation-div-text'}>Découvrez les différents prestations que nous proposons à nos clients.</p>
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

                    <div className={'col-sm-8 mx-auto'}>
                        <p className={'rights-duties-text px-5'}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</p>
                        <div className={'row d-flex justify-content-around'}>

                            <RightDutyCard />
                            <RightDutyCard />
                        </div>

                    </div>
                </div>
            </div>
            {/* Forms Section */}

            <div className={'forms-section'}>

                <p className={'form-section-title'}>Formulaires</p>
                <p className={'form-section-subtitle'}>Liens Rapides</p>
                <div className={'row'}>
                    <div className={'col-sm-7 mx-auto'}>
                        <div className={'row d-flex justify-content-around'}>
                            {[...Array(12).keys()].map(i => <ShortcutCard ind={i} />)}
                        </div>
                    </div>
                </div>
            </div>


            {/* FAQ Section */}
            <div className={'faq-section'}>
                <p className={'guide-faq-title'}>Guide & FAQs</p>
                <p className={'guide-faq-subtitle'}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt</p>
            </div>


        </div>
    )
}

export default Home
