import React, { useState } from "react";
import NepcertLogo from '../assets/Nepcert Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header () {

// Using State hook for the hamburger menu open/close
const [ IsOpen, setIsOpen ] = useState(false);

// Array of Nav-bar
const navbar = [
    {
        id: 1,
        title: "About us",
        slug:"AboutUs"
    },
    {
        id: 2,
        title: "Products",
        slug:"Products"
    },
    {
        id: 3,
        title: "Services",
        slug:"services"
    },
    {
        id: 4,
        title: "Mission Statement",
        slug:"MissionStatement"
    },
]

// array for Nav-bar button
const contact = [
    { id: 1, title: "Contact me", slug: "Contact-us"}
]

// toggle effect
const toggleHamMenu = () => {
    setIsOpen (!IsOpen);
};

    return (
        <header id="header">
            <div className="web-wrapper">
                <div className="nav-bar">
                    <a href="#" className="logo">
                        <img src={NepcertLogo} alt="Nepcert logo" id="nepcert-logo"/>
                    </a>

                    {/* Inserting the hamburger menu */}
                    <div className="hamburger-menu" onClick={toggleHamMenu}>
                        <FontAwesomeIcon icon={ faBars } />
                    </div>

                    <nav className={`Nav-items ${IsOpen ? "Open" : ""}`}>
                        {
                            navbar.map((nav)=>{
                                return(
                                    <a key={nav.id} href={`#${nav.slug}`}>{nav.title}</a>
                                )
                            })
                        } 
                    
                    <div className="nav-button">
                        {
                            contact.map((button) => {
                                return (
                                    <a role="button" className="contact-usbtn" key={button.id} href={`#${button.slug}`}>{button.title}</a>
                                )
                            })
                        }
                    </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;