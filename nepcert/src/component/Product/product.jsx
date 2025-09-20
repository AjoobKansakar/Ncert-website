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
import RightArrowIcon from '../../assets/arrow_icon.svg';

const products = [
    {
        id: 1,
        title: "Online File Server",
        icon: OnlineFileServerIcon,
        details: [
            { type: 'text', content: "It is used to store, manage and track electronic documents, This module has features like:"},
            { type: 'icon', icon: RightArrowIcon, content: "User Management" },
            { type: 'icon', icon: RightArrowIcon, content: "Group Management" },
            { type: 'icon', icon: RightArrowIcon, content: "Content and Metadata Search" },
            { type: 'icon', icon: RightArrowIcon, content: "Version Management" },
            { type: 'icon', icon: RightArrowIcon, content: "Access control " },
            { type: 'icon', icon: RightArrowIcon, content: "User Management" }
        ]
    },
    {
        id:2,
        title: "Online Record Management System",
        icon: OnlineRecordManagementSystemIcon,
        details: [
            { type: 'text', content: "It allows user to access System from ANYWHERE, ANYTIME with an internet connection. It transforms paper documents to electronic document which can be viewed, edited, searched and distributed. It is used to track and store images of paper documents with reporting features. It provides storage, security, indexing and quick retrival capabilities. It provides means for inexpensive concurrent access to electronics copies of records currently stored as paper."}

        ]
    },
    {
        id:3,
        title: "Ekagaj System",
        icon: EkagajSystemIcon,
        details: [
            { type: 'text', content: "It is a browser based, an imaging and Document Management System, a product designed, developed and maintained by Nep Cert Private limited is used to track and store images of paper document. It provides storage, security, as well as indexing and retrival capabilities. It is an Online imaging and Document Management System which allows user to access system from ANYWHERE, ANYTIME with an internet connection. ekagaj, an imaging and Document Management System scans and indexes your paper work comprehensively and brings savings in storage space and costs. Instead of searching for that stray documents, ekagaj enables you to retrive it on your PC and then view, edit and annotate it."}
        ]
    },
    {
        id:4,
        title: "Mirco Insurance Management System (MIMS)",
        icon: MIMSIcon,
        details: [
            { type: 'text', content: "(MIMS) is product designed and developed by Nep Cert Private Limited to manage the Mirco Insurance System. It has capability to manage:"},
            { type: 'icon', icon: RightArrowIcon, content: "Generic application"},
            { type: 'icon', icon: RightArrowIcon, content: "Mirco Insurance products and their benefit packages"},
            { type: 'icon', icon: RightArrowIcon, content: "Members and dependents/beneficiaries"},
            { type: 'icon', icon: RightArrowIcon, content: " Various process like enrolments, collections, entitlement, to benefits, claims settlement, management of cash flows etc."}
        ]
    },
    {
        id:5,
        title: "Data Entry and Digitization",
        icon: DataEntryIcon,
        details: [
            { type: 'text', content: "Nep Cert has been carrying out data entry and imaging service for various organizations with hardware and man power for Global IME Bank, Laxmi Sunrise Bank Limited, American Life Insurance Company."
        },
        ]
    },
    {
        id:6,
        title: "Bill Payment System",
        icon: BillPayIcon,
        details: [
            { type: 'text', content: " Nep Cert Private Limited has managed to maintain the billing system for Nepal Telecom for past 9 years. A group of Staffs are dedicated for all the electricity bill generated for the Mobile BTS tower of Bagmati zone and periphery including remote regions are managed, paid and recorded in the Bill Payment System developed."
        }
        ]
    }
];

// for the slider Arrows
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#fff", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#fff", borderRadius: "50%" }}
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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
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
                                    <div className="product-description-wrapper">
                                        {/* scrollbar */}
                                        <div className="scroll-bar"> </div>
                                        <div className="product-details-content">
                                            {product.details.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    {item.type === 'text' && (
                                                        <p className="product-detail-text">{item.content}</p>
                                                    )}
                                                    {item.type === 'icon' && (
                                                        <div className="product-detail-item">
                                                            <img src={item.icon} alt="arrow" className="product-detail-icon" />
                                                            <p className="product-detail-content">{item.content}</p>
                                                        </div>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                            {(product.details.length === 0 || (product.details.length === 1 && product.details[0].content === "")) && (
                                                <p className="product-detail-text">No description available.</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};


export default Product;