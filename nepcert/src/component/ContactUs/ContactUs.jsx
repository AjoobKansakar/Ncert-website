import React, { useState } from "react";
import "./ContactUs.css";
import ClientBannerImg from "../../assets/ContactBanner_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [formLoading, setFormLoading] = useState(false);

  const onSubmit = async (values) => {
    setFormLoading(true);
    try {
      const { data } = await axios.post(
        "https://nyatapol.biz/test_dash/api/Feedback/form/",
        values
      );

      if (data.status?.toLowerCase() === "success") {
        toast.success("Your message was successfully sent.");

        reset();
      } else {
        toast.error(data.status_message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <section className="Contact-us" id="Contact-us">
        <div className="contact-us-banner">
          <h1>Contact Us</h1>
          <img src={ClientBannerImg} alt="Client banner" />
        </div>

        <div className="web-wrapper">
          <div className="Contact-form-section">
            {/* Contact Info */}
            <div className="get-in-touch">
              <h2>Get in touch</h2>

              <div className="Contact-info-items">
                <div className="contact-info">
                  <FontAwesomeIcon icon={faLocationDot} className="Contact-icons" />
                  <h3>Office</h3>
                </div>
                <div className="contact-data">
                  <p>Kumaripati, Lalitpur</p>
                </div>
              </div>

              <div className="Contact-info-items">
                <div className="contact-info">
                  <FontAwesomeIcon icon={faEnvelope} className="Contact-icons" />
                  <h3>Email</h3>
                </div>
                <div className="contact-data">
                  <p>info@nepcert.com</p>
                </div>
              </div>

              <div className="Contact-info-items">
                <div className="contact-info">
                  <FontAwesomeIcon icon={faPhone} className="Contact-icons" />
                  <h3>Contact</h3>
                </div>
                <div className="contact-data">
                  <p>+977-9847395310</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-us-form">
              <h2>Send us a message:</h2>
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("fullname", { required: "Full Name is Required" })}
                  />
                  <span>{errors.fullname?.message}</span>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", { required: "Email is Required" })}
                  />
                  <span>{errors.email?.message}</span>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject", { required: "Subject is Required" })}
                  />
                  <span>{errors.subject?.message}</span>
                </div>

                <div className="form-group">
                  <textarea
                    placeholder="Type your message here..."
                    {...register("message", { required: "Message is Required" })}
                  />
                  <span>{errors.message?.message}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formLoading}
                  className="contactSubmitButton"
                >
                  {formLoading && <ClipLoader size={20} color="#fff" margin="10px"/>}
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.532162937167!2d85.31783187532233!3d27.6699426762041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194c81a5a83b%3A0x8a5b75a5abd0463e!2sNEP%20CERT%20PVT%20LTD!5e0!3m2!1sen!2snp!4v1757061859246!5m2!1sen!2snp"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="NEP CERT Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
