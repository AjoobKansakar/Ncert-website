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
                        <a href="#AboutUs">About us</a>
                        <a href="#Products">Products</a>
                        <a href="#services">Services</a>
                        <a href="#MissionStatement">Mission Statement</a>
                    </nav>
                        <a role="button" href="#Contact-us" className="contact-usbtn"> Contact Us </a>
                </div>
            </div>
        </header>
    );
}

export default Header;