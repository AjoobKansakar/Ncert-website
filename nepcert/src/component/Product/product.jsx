import React from "react";
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
        icon: OnlineFileServerIcon
    },
    {
        id:2,
        title: "Online Record Management System",
        icon: OnlineRecordManagementSystemIcon
    },
    {
        id:3,
        title: "Ekagaj System",
        icon: EkagajSystemIcon
    },
    {
        id:4,
        title: "Mirco Insurance Management System (MIMS)",
        icon: MIMSIcon
    },
    {
        id:5,
        title: "Data Entry and Digitization",
        icon: DataEntryIcon
    },
    {
        id:6,
        title: "Bill Payment System",
        icon: BillPayIcon
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
        //  learn this part
        <section className="products-section">
        <div className="product-container">
            <h2 className="section-topic"> Products & Services </h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className="product-card-wrapper">
                        <div className="product-card">
                           {/* product icon */}
                            <img 
                                src={product.icon}
                                alt={product.title}
                                className="product-icons"
                            />

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