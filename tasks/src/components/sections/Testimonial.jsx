import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        name: "Jesica Lirona",
        profession: "Front End Developer",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem Ipsum",
        image: "/images/user-right-top.png",
    },
    {
        name: "Michael Scott",
        profession: "Regional Manager",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.stry's standard dummy text ever since the 1500s.Lorem Ipsum has been the industry's standard dummy ",
        image: "/images/user-right-buttom.png"
    },
    {
        name: "Dwight Schrute",
        profession: "Regional Manager",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.  its layout. The point of using Lor",
        image: "/images/user-left-top.png"
    },
    {
        name: "  Pam Beesly",
        profession: " Receptionist",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years ",
        image: "/images/user-left-buttom.png"
    }
];

const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
                <ul style={{ margin: '0px', padding: '0px', display: 'flex', justifyContent: 'center' }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'white', margin: '0 5px' }}></div>
        )
    };

    return (
        <div className="carousel-container">
            <div className="carousel-title">TESTIMONIAL</div>
            <h2 className="carousel-heading">What <b className="gradient">Client's</b> Say About Us</h2>
            
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <div className="testimonial-conatiner">
                        <div className="testimonial-content">
                            <div className="testimonial-rating">
                                {[...Array(5)].map((star, i) => (
                                    <FontAwesomeIcon key={i} icon={faStar} color="#ffd700" />
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-client">
                                <img src={testimonial.image} alt={testimonial.name} className="client-image" />
                                <div className="client-info">
                                    <div className="client-name">{testimonial.name}</div>
                                    <div className="client-profession">{testimonial.profession}</div>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* Corner Images */}
                        <img src="/images/user-left-top.png" alt="corner" className="corner-image top-left" />
                        <img src="/images/user-left-buttom.png" alt="corner" className="corner-image top-right" />
                        <img src="/images/user-left-top.png" alt="corner" className="corner-image bottom-left" />
                        <img src="/images/user-left-buttom.png" alt="corner" className="corner-image bottom-righ" />
                        {/* <img src="/images/user-right-buttom.png" alt="corner" className="corner-image bottom-left" />
                        <img src="/images/user-right-top.png" alt="corner" className="corner-image bottom-right" /> */}
                    </div>
                ))}
            </Slider>
           
        </div>
    );
};

export default TestimonialCarousel;
