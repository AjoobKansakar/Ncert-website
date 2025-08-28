import React, { useState } from "react";
import './product.css';
// using React slick for slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// icons 
import OnlineFileServerIcon from '../../assets/OnlineFileServer_icon.svg';
import OnlineRecordManagementSystemIcon from '../../assets/Record_icon.svg';
import EkagajSystemIcon from '../../assets/ekagaj_icon.svg';
import MIMSIcon from '../../assets/MIMS_icon.svg';
import DataEntryIcon from '../../assets/DataEntry_icon.svg';
import BillPayIcon from '../../assets/Bill_icon.svg';

const products = [
    {
        id: 1,
        title: "Online File Server",
        icon: OnlineFileServerIcon,
        description: "this is the desription..."
    },
    {
        id:2,
        title: "Online Record Management System",
        icon: OnlineRecordManagementSystemIcon,
        description: "this is the desription..."
    },
    {
        id:3,
        title: "Ekagaj System",
        icon: EkagajSystemIcon,
        description: "this is the desription..."
    },
    {
        id:4,
        title: "Mirco Insurance Management System (MIMS)",
        icon: MIMSIcon,
        description: "this is the desription..."
    },
    {
        id:5,
        title: "Data Entry and Digitization",
        icon: DataEntryIcon,
        description: "this is the desription..."
    },
    {
        id:6,
        title: "Bill Payment System",
        icon: BillPayIcon,
        description: "this is the desription..."
    }
];

// for the slider Arrows
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div 
            className={className}
            style={{ ...style, display: "block", background: "#000000ff", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div 
            className={className}
            style={{ ...style, display: "block", background: "#000000ff", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const Product = () => {
    // adding a useState for the cards effect
    const [ activeProductId, setActiveProductId ] = useState(null);

    // adding the clicking effects in the card
    const handleCardClick = (id) => {
        setActiveProductId( activeProductId === id ? null : id );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
        <section className="products-section">
            <div className="product-container">
                <h2 className="section-topic"> Products & Services </h2>
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id} className="product-card-wrapper">
                            <div 
                            // new div for the cards effect
                                className={`product-card ${activeProductId === product.id ? 'active' : ''}`} 
                                onClick={() => handleCardClick(product.id)}
                            >
                                {/* product icon */}
                                <img 
                                    src={product.icon}
                                    alt={product.title}
                                    className="product-icons"
                                />

                                <h3>{product.title}</h3>
                                {/* for the cards to show up */}
                                {activeProductId === product.id && ( 
                                    <p>{product.description}</p> 
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};



export default Product