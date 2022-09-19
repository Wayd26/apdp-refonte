import React from 'react';
import "./FaqSection.css";
import FaqElement from "../FaqElement/FaqElement"

const FaqSection = (props) => {
  const { data } = props;
    return (
        <div className={"faq-section"}>
        {data && data?.length != 0 ? data.map((i) => (
          <FaqElement question={i.question} answer={i.answer} />
        )) : <h1>Aucune Question</h1> }

      </div>
    )
}

export default FaqSection
