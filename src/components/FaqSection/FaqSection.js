import React from 'react';
import "./FaqSection.css";
import FaqElement from "../FaqElement/FaqElement"

const FaqSection = () => {
    return (
        <div className={"faq-section"}>
        <p className={"guide-faq-title"}>Foire Aux Questions</p>
        <p className={"guide-faq-subtitle"}>
        Listes de questions et de réponses couramment rencontrées{" "}
        </p>
        {[0, 1, 2, 3].map((i) => (
          <FaqElement />
        ))}

      </div>
    )
}

export default FaqSection
