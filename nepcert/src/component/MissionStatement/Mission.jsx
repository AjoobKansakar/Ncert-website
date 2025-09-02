import React from 'react';
import './Mission.css';
import MissionBgImg from '../../assets/MissionStatement_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Mission () {
    return (
        <section className='MissionStatement' id='MissionStatement'>
            <div className="web-wrapper">
                <div className="mission-container">
                    <div className="mission-content">
                        <h1> Mission Statement </h1>
                        <div id="mission-box">
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> Provide high quality, affordable software solutions. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> Create and cultivate long-term relationship with clients. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> Respond immediately to the changing needs of our clients. </p>
                            <p> <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} /> Achieve complete customer satisfaction. </p>
                        </div>
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