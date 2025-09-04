import React from "react";
import './ContactUs.css';
import ClientBannerImg from '../../assets/ContactBanner_img.jpg';
// icons from fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

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
                        <h3> <FontAwesomeIcon icon={ faLocationDot } style={{color: "#2A3B5F",}} /> Office </h3>
                        <p> Kumaripati, Lalitpur </p>

                        <h3> <FontAwesomeIcon icon={ faEnvelope } style={{color: "#2A3B5F",}} /> Email </h3>
                        <p> info@nepcert.com </p>

                        <h3> <FontAwesomeIcon icon={ faPhone } style={{color: "#2A3B5F",}} /> Contact </h3>
                        <p> +977-9847395310 </p>
                    </div>

                    <div className="contact-us-form">
                        <h2> Send us a message: </h2>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactUs