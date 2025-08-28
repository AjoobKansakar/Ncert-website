import React from "react";
import "./wcu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


function Wcu () {
    return (
            <div className="wcu">

                <div className="web-wrapper">
                    <div className="wcu-container">
                        <div className="wcu-content">
                            <h1> Why Choose Us? </h1>
                            <p> Nep Cert has been designing, developing and maintaining records and document management system since last 10 years in local environment. </p>
                        </div>

                        <div className="wcu-box">
                            {/* fontawesome Icons used */}
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> It is providing consultancy on Document Management System to its clients since last decade. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> It has in-depth knowledge of record management and document handling process. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} />  It has a team of professionals with in-depth knowledge of Document Management System. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> Nep Cert in association with sister organization NTECH has been providing document conversion services (Scanning & Data Entry) to wide variety of clients. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> We offer affordable, high speed, quality document scanning and data entry services from paper copy to digital format. </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Wcu

