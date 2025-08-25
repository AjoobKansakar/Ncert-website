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
    })
}



{/* <div className="web-wrapper">
    <div className="hero-section">
        <h1> Here will be the Hero slider </h1>
    </div>
</div> */}

export default Hero;