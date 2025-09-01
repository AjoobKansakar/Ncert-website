import React, { useState } from 'react';
import './services.css';
// icons
import DataEntryIcon from '../../assets/DataEntry_icon.svg';
import BillPayIcon from '../../assets/Bill_icon.svg';


function Services () {

    const [ activeIndex, setActiveIndex] = useState(null);
    
    const handleCardClick = (id) => {
        setActiveIndex (prevIndex => (prevIndex === id ? null : id));
    }; 
    
    const Servicesitems = [
        {
            id: 1,
            title: "Data Entry and digitization",
            icon: DataEntryIcon,
            description: " No Description yet..."
        },
        {
            id: 2,
            title: "Bill Payment System",
            icon: BillPayIcon,
            description: " No Description yet...."
        }
    ];

    return (

        <section className="services" id='services'>
            <div className="web-wrapper">
                <div className="service-container">
                    <div className="service-data">
                        <h1> Our Services </h1>
                        <p> At Nep Cert, we deliver professional services in data entry, document digitization, 
                            and billing system support empowering organizations to operate more efficienty and digitally.</p>
                    </div>

                    <div className="services-present">
                        {/* mapping for flip card effect */}
                        {Servicesitems.map(service => (
                            // card onclick flip feature
                        <div 
                                key={service.id}
                                className={`service-card-wrapper ${activeIndex === service.id ? 'active' : ''}`}
                                onClick={() => handleCardClick(service.id)}
                        >

                            <div key={service.id} className='service-card-wrapper'>
                                <div className='service-card'>
                                    {/* front face of the card */}
                                    <div className="service-card-front">
                                        <img src={service.icon} alt={`${service.title} icon`} className='service-icon'></img>
                                        <h2> {service.title} </h2>
                                    </div>
                                    {/* back face of the card */}
                                    <div className="service-card-back">
                                        <p> {service.description} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services