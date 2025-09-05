import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLocationDot, faEnvelope, faPhone  } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    return (
        <footer className="footer" id="footer">
            <div className="web-wrapper">
                <h1> Nep <span>C</span>ert </h1>

                <div className="Quick-links">
                    <h2> Quick Links </h2>
                        <ul>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Home </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> About us </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Products </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Services </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Contact us </li>
                            <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Mission Statements </li>
                        </ul>
                </div>

                <div className="Services-link">
                    <h2> Our Services </h2>
                    <ul>
                        <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Data Entry & Digitization </li>
                        <li> <FontAwesomeIcon icon={ faGreaterThan } style={{color: "#000000",}} /> Bill Payment System </li>
                    </ul>
                </div>

                <div className="information-links">
                    <h2> Information </h2>
                    <ul>
                        <li> <FontAwesomeIcon icon={ faPhone } style={{color: "#000000",}} /> +977 984-7395310 </li>
                        <li> <FontAwesomeIcon icon={ faEnvelope } style={{color: "#000000",}} /> info@nepcert.com </li>
                        <li> <FontAwesomeIcon icon={ faLocationDot } style={{color: "#000000",}} /> Kumaripati, Lalitpur </li>
                    </ul>
                </div>

                <div className="copyright">
                    <p> © Copyright NEP CERT Private Limited. All Rights Reserved </p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer