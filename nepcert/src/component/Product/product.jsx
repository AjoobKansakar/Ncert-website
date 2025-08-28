import React from "react";
import './product.css';
// using React slick for slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
    {
        id: 1,
        title: "Online File Server"
        // iconclass: "online file server"
    },
    {
        id:2,
        title: "Online Record Management System"
    },
    {
        id:3,
        title: "Ekagaj System"
    },
    {
        id:4,
        title: "Mirco Insurance Management System (MIMS)"
    },
    {
        id:5,
        title: "Data Entry and Digitization"
    },
    {
        id:6,
        title: "Bill Payment System"
    }
];

// for the slider Arrows
const SampleNextArrow = (props) => {
    const { className, style, onclick } = props;
    return (
        <div 
            className={className}
            style={{ ...style, display: "block", background: "#007bff", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onclick } = props;
    return (
        <div 
            className={className}
            style={{ ...style, display: "block", background: "#007bff", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const Product = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplatSpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 756,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }  
        ]     
    };
    return (
        //  do from here
        <section className="products-section">
        <div className="container">
            <h2 className="text-center mb-5">Our Products & Services</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-card-wrapper">
                        <div className="product-card">
                            {/* If you integrate Font Awesome, you can use the iconClass here */}
                            {/* <i className={product.iconClass} style={{ fontSize: '3rem', marginBottom: '15px', color: '#007bff' }}></i> */}
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
    );
};



export default Product