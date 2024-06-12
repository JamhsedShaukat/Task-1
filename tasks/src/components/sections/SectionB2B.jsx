import React from "react";
import "./SectionB2B.css";

const SectionB2B = () => {
  return (
    <div className="container">
      <div className="row-marketing">
        <div className="marketing">
          <p className="explore">EXPLORE US</p>
          <h2 className="heading">
            Unblock B2B Opportunities: Let Our Email <br />
            <b className="gradient">Marketing Agency</b> Take The Lead!
          </h2>
          <p>
            Our B2B email marketing agency specializes in crafting highly
            effective email compaigns that Drive result for buisness like yours.
            With our staretegic approach, personalized messaging and expert
            targeting, we'll help you connect with your ideal B2B audience and
            generate leads that convert. Get ready to supercharge your buisness
            growth with our tailored email marketing solutions.
          </p>
          <p>
            We are an outbound email marketing agency helping b2b businesses
            create outbound acquisition systems that get results fast without
            spending lots of money. We have helped 180 clients in 15 different
            industries. We always guarantee our clients a minimum 3x ROI or they
            dont pay.
          </p>
        </div>
        <div className="marketing">
        <div class="container-img">
          <img src="/images/b2b.png" alt="Rocket" class="rocket" />
          <div class="icons fb">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="icons linkedin-1">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="icons gmail-1">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="icons linkedin-2">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <div class="icons gmail-2">
            <i class="fas fa-envelope"></i>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB2B;
