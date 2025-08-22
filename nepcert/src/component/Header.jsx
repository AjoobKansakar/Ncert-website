import React from "react";
import NepcertLogo from '../assets/Nepcert Logo.png';

function Header () {
    return (
        <header>
            <div className="web-wrapper">
                <div className="nav-bar">
                    <a href="#" className="logo">
                        <img src={NepcertLogo} alt="Nepcert logo" id="nepcert-logo"/>
                    </a>
                    <nav className="Nav-items">
                        <a href="#">About us</a>
                        <a href="#">Products</a>
                        <a href="#">Services</a>
                        <a href="#">Mission Statement</a>

                        <button className="contact-usbtn">Contact us</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;