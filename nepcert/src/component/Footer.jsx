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
                            <li> <FontAwesomeIcon icon={ faGreaterThan } /> Home </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } /> About us </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } /> Products </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } /> Services </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } /> Contact us </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } /> Mission Statements </li>
                        </ul>
                </div>

                <div className="Services-link">
                    <h2> Our Services </h2>
                    <ul>
                        <li> <FontAwesomeIcon icon={ faGreaterThan } /> Data Entry & Digitization </li>
                        <li> <FontAwesomeIcon icon={ faGreaterThan } /> Bill Payment System </li>
                    </ul>
                </div>

                <div className="information-links">
                    <h2> Information </h2>
                    <ul>
                        <li> <FontAwesomeIcon icon={ faPhone } /> +977 984-7395310 </li>
                        <li> <FontAwesomeIcon icon={ faEnvelope } /> info@nepcert.com </li>
                        <li> <FontAwesomeIcon icon={ faLocationDot } /> Kumaripati, Lalitpur </li>
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