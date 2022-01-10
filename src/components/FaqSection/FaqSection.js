import React from 'react';
import "./FaqSection.css";
import FaqElement from "../FaqElement/FaqElement"

const FaqSection = () => {
    return (
        <div className={"faq-section"}>
        <p className={"guide-faq-title"}>Foire Aux Questions</p>
        <p className={"guide-faq-subtitle"}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt{" "}
        </p>
        {[0, 1, 2, 3, 4].map((i) => (
          <FaqElement />
        ))}
      </div>
    )
}

export default FaqSection
