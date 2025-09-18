import React from "react";
import "./wcu.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const wcuPoints = [
    {
        id: 1,
        content: " It is providing consultancy on Document Management System to its clients since last decade. "
    },
    {
        id: 2,
        content: " It has in-depth knowledge of record management and document handling process. "
    },
    {
        id: 3,
        content: " It has a team of professionals with in-depth knowledge of Document Management System. "
    },
    {
        id: 4,
        content: " Nep Cert in association with sister organization NTECH has been providing document conversion services (Scanning & Data Entry) to wide variety of clients. "
    },
    {
        id: 5,
        content: " We offer affordable, high speed, quality document scanning and data entry services from paper copy to digital format. "
    }
]

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
                           {
                            wcuPoints.map ( (point) => {
                                return (
                                    <p key={point.id}>
                                        <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} />
                                        {''}
                                        {point.content}
                                    </p>
                                )
                            })
                           }
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default Wcu;

