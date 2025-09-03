import React from "react";
import './ContactUs.css';
import ClientBannerImg from '../../assets/ContactBanner_img.jpg';

function ContactUs () {
    return (
        <section className="Contact-us" id="Contact-us">
            <div className="contact-us-banner">
                <h1> Contact Us </h1>
                <img src={ClientBannerImg} alt="Client-banner-img"></img>
            </div>

            <div className="web-wrapper">
                <div className="Contact-form-section">
                    <div className="get-in-touch">
                        <h2> Get in touch </h2>
                    </div>

                    <div className="contact-us-form">
                        <p> Form </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactUs