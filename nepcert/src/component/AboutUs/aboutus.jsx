import React from "react";
import './aboutus.css';
import Aboutusimg from "../../assets/about_us_img.png";

// const AboutUsContent = [
//     {
//         id: 1,
//         type: "heading1",
//         content: " About us "
//     },
//     {
//         id: 2,
//         type: "heading2", 
//         content: " Smart solutions for growing businesses! "
//     },
//     {
//         id: 3, 
//         type: "paragraph",
//         content: "Founded in 2006, Nep Cert Private Limited sets out to be a Business Process Outsourcing (BPO) company with IT and software solutions has been carrying out collection, data entry, imaging and uploading of the paper-based forms/records stored at different business organizations, within a short period of its establishment Nep Cert Private Limited as helped majority of Banks, Financial Institution and Telecom Company. With help of Nep Cert Organizations achieve more from thier IT investments and solutions."
//     }
// ];

const Aboutus = ({ Data }) => {   
    //  checking aboutus in console
    console.log ("about", typeof Data);
    const aboutData = Data;
    // return (
    //     <div className="web-wrapper">
    //         <div className="aboutus" id="AboutUs">
    //             <div className="aboutus-content">
    //                 {
    //                     Data?.en?.map((item) => {
    //                         if (item.type === "heading1") {
    //                             return <h1 key={item.id}>{item.title}</h1>;
    //                         } else if (item.type === "heading2"){
    //                             return <h2 key={item.id}>{item.SubTitle}</h2>;
    //                         } else if (item.type === "paragraph") {
    //                             return <p key={item.id}>{item.description}</p>;
    //                         }
    //                         return null;
    //                     })
    //                 }
    //             </div>

    //             <div className="aboutus-img">
    //                 <img src={Aboutusimg} alt="AboutUs_img" id="aboutus-img"></img>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
    <div className="web-wrapper">
      <div className="aboutus" id="AboutUs">
        <div className="aboutus-content">
          {/* Title */}
          <h1> {aboutData?.title} </h1>      
          {/* Sub title */}
          <h2>Smart solutions for growing businesses!</h2>
          {/* description */}
          <p dangerouslySetInnerHTML={{ __html: aboutData?.description }} />
        </div>

        <div className="aboutus-img">
          <img
            src={Aboutusimg}
            alt="About Us"
            id="aboutus-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;