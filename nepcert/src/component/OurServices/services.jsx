import React from 'react';
import './services.css';
// icons
import DataEntryIcon from '../../assets/DataEntry_icon.svg';
import BillPayIcon from '../../assets/Bill_icon.svg';


function Services () {
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
                        <div className="dataentry">
                            <img src={DataEntryIcon} alt='dataentry-icon' id='DE-icon'></img>
                            <h2> Data Entry & Digitization </h2>
                        </div>

                        <div className="billpayment">
                            <img src={BillPayIcon} alt='billpay-icon' id='BP-icon'></img>
                            <h2> Bill Payment System </h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services