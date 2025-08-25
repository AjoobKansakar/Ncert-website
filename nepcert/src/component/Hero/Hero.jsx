import React, { useState, useEffect} from "react";
import './Hero.css';
// importing images for slider 
import img1 from "../../assets/hero_1.jpg";
import img2 from "../../assets/hero_2.jpg";
import img3 from "../../assets/hero_3.jpg";

const Hero = () => {

    const slides = [
        {
            image: img1,
            title: 'image 1',
        },
        {
            image: img2,
            title: 'image 2',
        },
        {
            image: img3,
            title: 'image 3',
        },
    ];

    const [currentSlide, setcurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval (() => {
            setcurrentSlide(prevslide => (prevslide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero" id="Hero">
            <div className="hero-container">
                <div className="hero-txtcontent">
                    <h1> Nep <span className="high-light">C</span>ert </h1>
                    <p> Where business meets technology </p>
                    <button className="hero-btn"> Explore </button>
                </div>

                <figure className="hero-slider">
                    <div className="heroslider-container">
                        {slides.map((slide, index) => (
                            <img key={index}
                            src={slide.image}
                            alt={slide.title}
                            className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </figure>
            </div>
        </section>
    );
};

export default Hero;
