import React from "react";
import "./SectionSpecial.css";

const SectionSpecial = ({data}) => {
  return (
    <div className="special-container">
      <p className="offer">{data.p}</p>
      <h4>
        {!data.headingPart1?data.heading:data.headingPart1}<b className="gradient">{data.highlight}</b>{!data.headingPart2?'':data.headingPart2}
      </h4>
      <div className="special-cards">
        <div className="special-card-row ">
          {data.specialCard.map(value=>{
            return(
            <div className="special-card">
            <div class="icons">
              <i class={value.icon}></i>
            </div>
            <h2>{value.h2}</h2>
            <p>
              {value.para}
            </p>
          </div>
         ) })};
      </div>
    </div>
    </div>
  );
};

export default SectionSpecial;
