import React from 'react';
import './Mission.css';
import MissionBgImg from '../../assets/MissionStatement_img.png';

function Mission () {
    return (
        <section className='MissionStatement' id='MissionStatement'>
            <div className="web-wrapper">
                <div className="mission-content">
                    <h1> Mission Statement </h1>
                    <div className="mission-box">
                        <p> Provide high quality, affordable software solutions. </p>
                        <p> Create and cultivate long-term relationship with clients. </p>
                        <p> Respond immediately to the changing needs of our clients. </p>
                        <p> Achieve complete customer satisfaction. </p>
                    </div>

                    <div className="mission-img">
                        <img src={MissionBgImg} alt='Mission_img'></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission