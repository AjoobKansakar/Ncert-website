import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLocationDot, faEnvelope, faPhone  } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    return (
        <footer className="footer" id="footer">
            <div className="web-wrapper">
                <h1> Nep <span>C</span>ert </h1>
            <div className="all-links">
                <div className="Quick-links">
                    <h2> Quick Links </h2>
                        <ul>
                            <li> <a href="#header"> <FontAwesomeIcon icon={ faGreaterThan } /> Home </a></li>
                            <li> <a href="#AboutUs"> <FontAwesomeIcon icon={ faGreaterThan } /> About us </a></li>
                            <li> <a href="#Products"> <FontAwesomeIcon icon={ faGreaterThan } /> Products </a></li>
                            <li> <a href="#services"> <FontAwesomeIcon icon={ faGreaterThan } /> Services </a> </li>
                            <li> <a href="#Contact-us"> <FontAwesomeIcon icon={ faGreaterThan } /> Contact us </a></li>
                            <li> <a href="#MissionStatement"> <FontAwesomeIcon icon={ faGreaterThan } /> Mission Statements</a></li>
                        </ul>
                </div>

                <div className="Services-link">
                    <h2> Our Services </h2>
                    <ul>
                        <li> <a href="#services"> <FontAwesomeIcon icon={ faGreaterThan } /> Data Entry & Digitization </a></li>
                        <li> <a href="#services"> <FontAwesomeIcon icon={ faGreaterThan } /> Bill Payment System </a></li>
                    </ul>
                </div>

                <div className="information-links">
                    <h2> Information </h2>
                    <ul>
                        <li> <a href="#Contact-us"> <FontAwesomeIcon icon={ faPhone } /> +977 984-7395310 </a></li>
                        <li> <a href="#Contact-us"> <FontAwesomeIcon icon={ faEnvelope } /> info@nepcert.com </a></li>
                        <li> <a href="#Contact-us"> <FontAwesomeIcon icon={ faLocationDot } /> Kumaripati, Lalitpur </a></li>
                    </ul>
                </div>
            </div>

                <div className="copyright">
                    <p> © Copyright NEP CERT Private Limited. All Rights Reserved </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer