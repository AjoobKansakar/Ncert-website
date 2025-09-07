import React from "react";
import './aboutus.css';
import Aboutusimg from "../../assets/about_us_img.png";

function Aboutus () {
    return (
        <div className="web-wrapper">
            <div className="aboutus" id="AboutUs">
                <div className="aboutus-content">
                    <h1> About us </h1>
                    <h2> Smart solutions for growing businesses! </h2>
                    <p> Founded in 2006, Nep Cert Private Limited sets out to be a Business Process Outsourcing (BPO)
                        company with IT and software solutions has been carrying out collection, data entry,
                        imaging and uploading of the paper-based forms/records stored at different business organizations,
                        within a short period of its establishment Nep Cert Private Limited as helped majority of Banks, 
                        Financial Institution and Telecom Company. With help of Nep Cert Organizations achieve more from thier 
                        IT investments and solutions.
                    </p>
                </div>

                <div className="aboutus-img">
                    <img src={Aboutusimg} alt="AboutUs_img" id="aboutus-img"></img>
                </div>
            </div>
        </div>

    )
}

export default Aboutus;