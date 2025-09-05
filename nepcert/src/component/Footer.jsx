import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

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
                    <ul>
                        <li> Data Entry & Digitization </li>
                        <li> Bill Payment System </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer