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
        description: "It is used to store, manage and track electronic documents, This module has features like: User Management, Group Management, Content and Metadata Search, Version Management, Acess control "
    },
    {
        id:2,
        title: "Online Record Management System",
        icon: OnlineRecordManagementSystemIcon,
        description: "It allows user to access System from ANYWHERE, ANYTIME with an internet connection. It transforms paper documents to electronic document which can be viewed, edited, searched and distributed. It is used to track and store images of paper documents with reporting features. It provides storage, security, indexing and quick retrival capabilities. It provides means for inexpensive concurrent access to electronics copies of records currently stored as paper."
    },
    {
        id:3,
        title: "Ekagaj System",
        icon: EkagajSystemIcon,
        description: "It is a browser based, an imaging and Document Management System, a product designed, developed and maintained by Nep Cert Private limited is used to track and store images of paper document. It provides storage, security, as well as indexing and retrival capabilities. It is an Online imaging and Document Management System which allows user to access system from ANYWHERE, ANYTIME with an internet connection. ekagaj, an imaging and Document Management System scans and indexes your paper work comprehensively and brings savings in storage space and costs. Instead of searching for that stray documents, ekagaj enables you to retrive it on your PC and then view, edit and annotate it."
    },
    {
        id:4,
        title: "Mirco Insurance Management System (MIMS)",
        icon: MIMSIcon,
        description: "(MIMS) is product designed and developed by Nep Cert Private Limited to manage the Mirco Insurance System. It has capability to manage:- Generic application - Mirco Insurance products and thier benefit packages - Members and dependents/beneficiaries, - Various process like enrolments, collections, entitlement, to benefits, claims settlement, management of cash Flows etc."
    },
    {
        id:5,
        title: "Data Entry and Digitization",
        icon: DataEntryIcon,
        description: ""
    },
    {
        id:6,
        title: "Bill Payment System",
        icon: BillPayIcon,
        description: ""
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
        <section className="products-section" id="Products">
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