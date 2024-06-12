import React from 'react'
import './SectionChoseUs.css';

const SectionChoseUs = () => {
  return (
    <div class="ChoseUs-container">
        <div class="left-part">
            <div class="image-stack">
                <img src="/images/top-image.jpeg" alt="UpperImage" class="image upper-image"/>
                <img src="/images/buttom-image.jpeg" alt="LowerImage" class="image lower-image"/>
            </div>
        </div>
        <div class="right-part">
            <p class="about-us">ABOUT US</p>
            <h1>Your Trusted B2B Email Marketing Agency</h1>
            <h2>Why Choose Us?</h2>
            <ul>
                <li><i class="fas fa-check-circle"></i> Targeted Messaging: Tailor solutions to clients</li>
                <li><i class="fas fa-check-circle"></i> Demonstrated Results: Showcase successes with tangible</li>
                <li><i class="fas fa-check-circle"></i> Customized Solutions: Personalize strategies to client needs</li>
                <li><i class="fas fa-check-circle"></i> Industry Expertise: Highly knowledge and experience effectively</li>
                <li><i class="fas fa-check-circle"></i> Transparent Communication: Foster trust through open dialogue channels</li>
            </ul>
            <div class="business-goal">
                <h3><i class="fas fa-bullseye"></i> Our Business Goal</h3>
                <p>The primary business goal of every email marketing agency is to drive client success and maximize ROI</p>
            </div>
            <button class="explore-btn">Explore Us <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default SectionChoseUs