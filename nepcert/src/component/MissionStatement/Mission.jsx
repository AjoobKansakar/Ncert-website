import React from 'react';
import './Mission.css';
import MissionBgImg from '../../assets/MissionStatement_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const missionPoints = [
    {
        id: 1,
        content: " Provide high quality, affordable software solutions. "
    },
    {
        id: 2,
        content: " Create and cultivate long-term relationship with clients. "
    },
    {
        id: 3,
        content: " Respond immediately to the changing needs of our clients. "
    },
    {
        id: 4,
        content: " Achieve complete customer satisfaction. "
    }
];

function Mission () {
    return (
        <section className='MissionStatement' id='MissionStatement'>
            <div className="web-wrapper">
                <div className="mission-container">
                    <div className="mission-content">
                        <h1> Mission Statement </h1>
                        <div id="mission-box">
                            {
                                missionPoints.map ( (points) => {
                                    return (
                                        <p key={points.id}>
                                            <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} />
                                            {points.content}
                                        </p>
                                    )
                                })
                            }
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

export default Mission;