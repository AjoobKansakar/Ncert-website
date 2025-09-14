import React from "react";
import './clients.css';
// React slick imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// Imports for client logos
import Client1 from '../../assets/clients_1.png';
import Client2 from '../../assets/clients_2.png';
import Client3 from '../../assets/clients_3.png';
import Client4 from '../../assets/clients_4.jpg';
import Client5 from '../../assets/clients_5.png';
import Client6 from '../../assets/clients_6.png';
import Client7 from '../../assets/clients_7.png';
import Client8 from '../../assets/clients_8.jpg';


function Clients () {

    const ClientSlider = [
        { id: 1, name: 'Client 1', logo: Client1},
        { id: 2, name: 'Client 2', logo: Client2},
        { id: 3, name: 'Client 3', logo: Client3},
        { id: 4, name: 'Client 4', logo: Client4},
        { id: 5, name: 'Client 5', logo: Client5},
        { id: 6, name: 'Client 6', logo: Client6},
        { id: 7, name: 'Client 7', logo: Client7},
        { id: 8, name: 'Client 8', logo: Client8}
    ]; 
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slideToShow: 3,
                    slideToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToSrcoll: 1,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="Clients">
            <div className="web-wrapper">
                <h1> We Are Trusted By </h1>
                <Slider {...settings}>
                    {ClientSlider.map(client => (
                        <div key={client.id} className="client-slide">
                            <img src={client.logo} alt={client.name}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Clients;