import React, { useState } from 'react';
import './services.css';
// icons
// import DataEntryIcon from '../../assets/DataEntry_icon.svg';
// import BillPayIcon from '../../assets/Bill_icon.svg';


function Services ({Data}) {
    console.log("services", Data);

    const [ activeIndex, setActiveIndex] = useState(null);
    
    const handleCardClick = (id) => {
        setActiveIndex (prevIndex => (prevIndex === id ? null : id));
    }; 

    // const Servicesitems = [
    //     {
    //         id: 1,
    //         title: "Data Entry and digitization",
    //         icon: DataEntryIcon,
    //         description: " Nep Cert has been carrying out data entry and imaging service for various organizations with hardware and man power for Global IME Bank, Laxmi Sunrise Bank Limited, American Life Insurance Company."
    //     },
    //     {
    //         id: 2,
    //         title: "Bill Payment System",
    //         icon: BillPayIcon,
    //         description: " Nep Cert Private Limited has managed to maintain the billing system for Nepal Telecom for past 9 years. A group of Staffs are dedicated for all the electricity bill generated for the Mobile BTS tower of Bagmati zone and periphery including remote regions are managed, paid and recorded in the Bill Payment System developed."
    //     }
    // ];

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
                        {Data?.map(service => (
                            // card onclick flip feature
                            <div
                                key={service.id}
                                className={`service-card ${activeIndex === service.id ? 'active' : ''}`} 
                                onClick={() => handleCardClick(service.id)}
                            >
                                <div className="service-card-front"> 
                                    <img src={service.image} alt={`${service.title} icon`} className='service-icon'></img>
                                    <h2> {service.title} </h2>
                                </div>
                                <div className="service-card-description"> 
                                    {/* dangerouslySetInnerHTML used to remove **<p></p>** from the box */}
                                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;