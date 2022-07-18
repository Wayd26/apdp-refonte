import React from 'react';
import "./FaqSection.css";
import FaqElement from "../FaqElement/FaqElement"

const FaqSection = (props) => {
  const { data } = props;
    return (
        <div className={"faq-section"}>
        {/* <p className={"guide-faq-title"}>Foire Aux Questions</p>
        <p className={"guide-faq-subtitle"}>
        Listes de questions et de réponses couramment rencontrées{" "}
        </p> */}
        {data && data?.length != 0 ? data.map((i) => (
          <FaqElement question={i.question} answer={i.answer} />
          // <p>{JSON.stringify(i)}</p>
        )) : <h1>Aucune Question</h1> }

      </div>
    )
}

export default FaqSection
