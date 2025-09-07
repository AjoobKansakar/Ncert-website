import React, { useState } from "react";
import './ContactUs.css';
import ClientBannerImg from '../../assets/ContactBanner_img.jpg';
// icons from fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ContactUs = () => {
    const [ formdata, setformdata] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, seterrors] = useState({});
    const [isSubmitting, setissubmitting] = useState(false);
    const [submitMessage, setsubmitMessage] = useState('');


    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // clears the field if any error occurs 
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors, 
            [name]: '',
            }));
        }

        const validate = () => {
            let newErrors = {};
            if (!formdata.name) {
                newErrors.name = ' Name is required !!! ';
            }
            if (!formdata.email) {
                newErrors.email = ' Email is required !!! ';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = ' Please enter valid email ';
            }
            if (!formdata.subject) {
                newErrors.subject = ' Subject is required ';
            }
            if (!formdata.message) {
                newErrors.message = ' Please enter your message ';
            } else if ( formdata.message.length < 15) {
                newErrors.message = ' Message must be at least 15 characters long ';
            }
            return newErrors;
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setsubmitMessage('');
            setissubmitting(true);

            const validationErrors = validate();
            seterrors(validationErrors);

            if (Object.keys(validationErrors).length === 0) {
                console.log ( 'Form is submitted', formdata);
                alert("form is submitted");

                try {
                    await new Promise ((resolve) => setTimeout(resolve, 1500)); // Network delay

                    setsubmitMessage ( ' Your Message has been sent succesfully! ');

                    setformdata ({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    });
                } catch (error) {
                    console.error ('Submission Error:', error);
                    setsubmitMessage(' There was an error sending your message. Please Try Again.');
                } 
            } else {
                setsubmitMessage ( ' Please fix the errors ');
            }
            setissubmitting(false); 
        };
    }


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
                            <div className="contact-info">
                                <FontAwesomeIcon icon={ faLocationDot } className="Contact-icons" />
                                <h3>  Office </h3>
                            </div>
                            <div className="contact-data">
                                <p> Kumaripati, Lalitpur </p>
                            </div>
                        </div>
                        {/* Mail */}
                        <div className="Contact-info-items">
                            <div className="contact-info">
                                <FontAwesomeIcon icon={ faEnvelope } className="Contact-icons" />
                                <h3> Email </h3>
                            </div>
                            <div className="contact-data">
                                <p> info@nepcert.com </p>
                            </div>
                        </div>
                        {/* Number */}
                        <div className="Contact-info-items">
                            <div className="contact-info">
                                <FontAwesomeIcon icon={ faPhone } className="Contact-icons" />
                                <h3>  Contact </h3>
                            </div>
                            <div className="contact-data">
                                <p> +977-9847395310 </p>
                            </div>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="contact-us-form">
                        <h2> Send us a message: </h2>
                        <form>
                            <input type="text" required placeholder=" Your Name "></input>
                            <input type="email" required placeholder=" Your Email "></input>
                            <input type="text" required placeholder=" Subject "></input>
                            <textarea required placeholder=" Type your message here..."></textarea>
                            <button type="submit"> Send Message </button>
                        </form>
                    </div>
                </div>

            </div>

            {/* Map */}
            <div className="location-map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.532162937167!2d85.31783187532233!3d27.6699426762041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194c81a5a83b%3A0x8a5b75a5abd0463e!2sNEP%20CERT%20PVT%20LTD!5e0!3m2!1sen!2snp!4v1757061859246!5m2!1sen!2snp" 
                referrerpolicy="no-referrer-when-downgrade">;
                </iframe>
            </div>
        </section>
    )
}

export default ContactUs;