import React from "react";
import "./SectionMarket.css";

const SectionMarket = () => {
  return (
    <>
      <div className="container-Market">
        <div className="row-Market">
          <div class="dots top-left"></div>
          <div class="image-container">
            <img src="/images/Trading.png" alt="Chart" />
          </div>
          <div class="dots bottom-right"></div>
        </div>

        <div className="row-Market">
          <div class="container-line">
            <div class="line "></div>
            <div class="content">
              <p class="explore">EXPLORE US</p>
              <h1>
                Our<span class="highlight gradient">Marketing</span>SuccessThis
                <br />
                Year
              </h1>
              <div class="info">
                <div class="text">
                  <h2>
                    <i class="fas fa-users"></i>180+ Clients
                  </h2>
                  <p>
                    Partnering with over 180 clients globally, our B2B email
                    marketing services offer tailored strategies and proven
                    results for business growth and success.
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="text">
                  <h2>
                    <i class="fas fa-globe"></i>15+ Industries
                  </h2>
                  <p>
                    Servicing over 180 clients from 15+ countries, we excel in
                    providing dynamic B2B email marketing solutions, globally
                    recognized for their efficacy and impact.
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="text">
                  <h2>
                    <i class="fas fa-dollar-sign"></i>Minimum ROI
                  </h2>
                  <p>
                    Experience unmatched ROI with our guaranteed minimum 3x
                    return on investment, backed by our expertly crafted B2B
                    email marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-Market">
        <div className="row-Market">
          <div className="marketing">
            <p className="explore">EXPLORE US</p>
            <h2 className="heading">
              THE<b className="gradient">COMPLETE</b>MEDIA
              <br />
              STACK
            </h2>
            <p>
              Full stack marketing ensures you're not missing an opportunity or
              worse yet, being held to ransom by one platform. We've built a
              team of specialist marketers that deploy all the tools necessary
              to get the job done
            </p>
            <p>
              Full stack marketing ensures you're not missing an opportunity or
              worse yet, being held to ransom by one platform. We've built a
              team of specialist marketers that deploy all the tools necessary
              to get the job done
            </p>
          </div>
        </div>

        <div className="row-Market">
          <div class="container-line">
            <div class="line "></div>
            <div class="content">
              <div class="info">
                <div class="text">
                  <h2>
                    <i class="fab fa-linkedin-in"></i>Linkedin
                  </h2>
                  <p>
                    Our team is fully active on social media platforms for
                    marketing assistance.
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="text">
                  <h2>
                    <i class="fas fa-envelope"></i>Email
                  </h2>
                  <p>
                    Our team is fully active on social media platforms for
                    marketing assistance.
                  </p>
                </div>
              </div>
              <div class="info">
                <div class="text">
                  <h2>
                    <i class="fab fa-facebook-f"></i>Facebook
                  </h2>
                  <p>
                    Our team is fully active on social media platforms for
                    marketing assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MARKETING COMPAGN */}

      <div className="container-Market compaign">
        <div className="row-Market">
          <div className="cards">
            <div className="card">
              <h4>Problems</h4>
              <p>
                Start of the year facing so many problems low analytics reports
                and some serious rejections
              </p>
            </div>
            <div className="card">
              <h4>Our Analysis</h4>
              <p>
                When we saw that there is low performance due to not active team
                on social media
              </p>
            </div>
            <div className="card">
              <h4>Solution</h4>
              <p>
                Change the staff and hire some professionals of social media
                that help us fly over the year
              </p>
            </div>
            <div className="card">
              <h4>Success</h4>
              <p>
                This move road us to success and a bright future in the market
              </p>
            </div>
          </div>
        </div>

        <div className="row-Market">
          <div class="container-line">
            <div class="line "></div>
            <div className="marketing">
              <p className="explore">COMPAIGN</p>
              <h3>
                <b className="gradient">MARKETING Campaign </b>Over The Year
              </h3>
              <p>
                Ignite your B2B pipeline with email marketing that converts! We
                craft compelling messages that drive leads, nurture prospects,
                and close deals. Stop sending emails into the void. Let's turn
                your inbox into a powerful sales machine
              </p>
              <p>
                We develop performance campaigns with creative that cuts
                through. Scroll stopping, mind bending, brilliantly strategic,
                direct response campaigns that convert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionMarket;
