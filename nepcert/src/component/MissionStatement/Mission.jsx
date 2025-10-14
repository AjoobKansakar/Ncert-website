import React from 'react';
import './Mission.css';
import MissionBgImg from '../../assets/MissionStatement_img.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

// const missionPoints = [
//     {
//         id: 1,
//         content: " Provide high quality, affordable software solutions. "
//     },
//     {
//         id: 2,
//         content: " Create and cultivate long-term relationship with clients. "
//     },
//     {
//         id: 3,
//         content: " Respond immediately to the changing needs of our clients. "
//     },
//     {
//         id: 4,
//         content: " Achieve complete customer satisfaction. "
//     }
// ];

function Mission({ Data }) {
  console.log("Mission Data:", Data);

  if (!Data) {
    return (
      <section className="MissionStatement" id="MissionStatement">
        <div className="web-wrapper">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="MissionStatement" id="MissionStatement">
      <div className="web-wrapper">
        <div className="mission-container">
          {/* Text Section */}
          <div className="mission-content">
            {/* Title from API */}
            <h1>{Data.PageTitle}</h1>
            {/* Description — safely render HTML */}
            <div
              id="mission-box"
              dangerouslySetInnerHTML={{ __html: Data.Description }}
            ></div>
          </div>

          {/* Image Section */}
          <div className="mission-img">
            <img
              src={Data.CoverImage || MissionBgImg}
              alt="Mission Statement"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;