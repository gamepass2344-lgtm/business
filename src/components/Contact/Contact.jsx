import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import ContactImage from "../../assets/contact/contact.jpg";

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_54nm3xk",
        "template_ls41ovl",
        form.current,
        "IL-5X0HSEcU3h4yuy"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact_wrapper">

          <div className="contact_col">
            <div className="contact_image">
              <img src={ContactImage} alt="Contact" />
            </div>
          </div>

          <div className="contact_col">
            <h2>Contact Us</h2>

            <form ref={form} onSubmit={sendEmail}>
              <div className="input_wrapper">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Your Name..."
                  required
                />
              </div>

              <div className="input_wrapper">
                <input
                  type="text"
                  name="user_phone"
                  className="form-control"
                  placeholder="Your Phone..."
                  required
                />
              </div>

              <div className="input_wrapper">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Your Email..."
                  required
                />
              </div>

              <div className="input_wrapper">
                <textarea
                  name="message"
                  placeholder="Write a Message..."
                  required
                ></textarea>
              </div>

              <div className="btn_wrapper">
                <button type="submit" className="btn" disabled={sending}>
                  {sending ? "Sending..." : "Submit"}
                </button>
              </div>

              {sent && (
                <p style={{ marginTop: "15px", color: "lightgreen" }}>
                  ✅ Message sent successfully!
                </p>
              )}
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
