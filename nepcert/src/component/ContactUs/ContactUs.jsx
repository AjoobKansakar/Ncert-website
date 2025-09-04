import React from "react";
import './ContactUs.css';
import ClientBannerImg from '../../assets/ContactBanner_img.jpg';
// icons from fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function ContactUs () {
    return (
        <section className="Contact-us" id="Contact-us">
            <div className="contact-us-banner">
                <h1> Contact Us </h1>
                <img src={ClientBannerImg} alt="Client-banner-img"></img>
            </div>

            <div className="web-wrapper">
                <div className="Contact-form-section">
                    {/* Info */}
                    <div className="get-in-touch">
                        <h2> Get in touch </h2>
                        {/* location */}
                        <div className="Contact-info-items">
                            <FontAwesomeIcon icon={ faLocationDot } className="Contact-icons" />
                            <div>
                                <h3>  Office </h3>
                                <p> Kumaripati, Lalitpur </p>
                            </div>
                        </div>
                        {/* Mail */}
                        <div className="Contact-info-items">
                            <FontAwesomeIcon icon={ faEnvelope } className="Contact-icons" />
                            <div>
                                <h3> Email </h3>
                                <p> info@nepcert.com </p>
                            </div>
                        </div>
                        {/* Number */}
                        <div className="Contact-info-items">
                            <FontAwesomeIcon icon={ faPhone } className="Contact-icons" />
                            <div>
                                <h3>  Contact </h3>
                                <p> +977-9847395310 </p>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="contact-us-form">
                        <h2> Send us a message: </h2>
                        <form>
                            <input type="text" placeholder=" Your Name "></input>
                            <input type="email" placeholder=" Your Email "></input>
                            <input type="text" placeholder=" Subject "></input>
                            <textarea placeholder=" Type your message here..."></textarea>
                            <button type="submit"> Send Message </button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactUs