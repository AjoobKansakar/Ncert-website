import React from "react";
import NepcertLogo from '../assets/Nepcert Logo.png';

function Header () {
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

    return (
        <header id="header">
            <div className="web-wrapper">
                <div className="nav-bar">
                    <a href="#" className="logo">
                        <img src={NepcertLogo} alt="Nepcert logo" id="nepcert-logo"/>
                    </a>
                    <nav className="Nav-items">
                        {
                            navbar.map((nav)=>{
                                return(
                                    <a key={nav.id} href={`#${nav.slug}`}>{nav.title}</a>
                                )
                            })
                        } 
                    </nav>
                    <div className="nav-button">
                        {
                            contact.map((button) => {
                                return (
                                    <a role="button" className="contact-usbtn" key={button.id} href={`#${button.slug}`}>{button.title}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;