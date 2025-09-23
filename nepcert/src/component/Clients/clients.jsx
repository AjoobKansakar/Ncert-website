import React from "react";
import './clients.css';
// using Swiper.js for the client slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
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
    
    
    return (
        <section className="Clients">
            <div className="web-wrapper">
                <h1> We Are Trusted By </h1>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop={true}
                    speed={1000}
                    breakpoints={{
                        1024: { slidesPerView: 4 },
                        500: { slidesPerView: 3 },
                        0: { slidesPerView: 1 }
                    }}
                >
                    {ClientSlider.map(client => (
                        <SwiperSlide key={client.id}>
                            <div className="client-slide">
                                <img src={client.logo} alt={client.name} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;