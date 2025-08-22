import React from "react";
import NepcertLogo from '../assets/NepcertLogo';

function Header () {
    return (
        <header>
            <div className="nav-bar">
                <a href="#" className="logo">
                    <img src={NepcertLogo} alt="Nepcert logo"/>
                </a>
                <nav>
                    <a href="#">About us</a>
                    <a href="#">Products</a>
                    <a href="#">Services</a>
                    <a href="#">Mission Statement</a>

                    <button className="contact-usbtn">Contact us</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;