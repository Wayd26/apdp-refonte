import React from 'react';
import "./Quiz.css"
import ActualiteCarousel from '../../components/ActualiteCarousel/ActualiteCarousel'
import FaqSection from '../../components/FaqSection/FaqSection';
import QuizCard from '../../components/QuizCard/QuizCard';

const Quiz = () => {
    return (
        <div style={{background: "#F7F7F7"}} id="quiz">
            {/* <ActualiteCarousel /> */}
            <div className="quiz-box">
            <p className="quiz-title">LES COURRIERS POUR AGIR</p>
            <p className="quiz-select-category-text">SÉLECTIONNER LA CATÉGORIE DE VOTRE QUESTION</p>
            <div className="quiz-category-box row d-flex">

                <span className="quiz-category-div">Tous       </span>
                <span className="quiz-category-div">Internet   </span>
                <span className="quiz-category-div">Droits     </span>
                <span className="quiz-category-div">Lorem Ipsum</span>
                <span className="quiz-category-div">Lorem Ipsum ipsu</span>
                <span className="quiz-category-div">Lorem Ipsum</span>
                <span className="quiz-category-div">Lorem Ipsum</span>
                
            </div>
            <div className="quiz-category-card-box row d-flex justify-content-around">
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                <div className="col">
                    <QuizCard />
                    </div>
                
            </div>

            <button className="quiz-more-button">Afficher Plus</button>
            </div>
            {/* <FaqSection /> */}
        </div>
    )
}

export default Quiz
