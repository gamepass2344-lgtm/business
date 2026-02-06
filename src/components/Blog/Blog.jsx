import React from "react";
import "./Blog.css";
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
  const phoneNumberDisplay = "1-727-392-3936";
  const phoneNumberTel = "+17273923936";

  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>Set up a Estimate or Service date Today.</h3>
              <p>
                Call us now to schedule your estimate or service date. Tap to call on mobile:
                <a className="blog_phone_link" href={`tel:${phoneNumberTel}`}>
                  {phoneNumberDisplay}
                </a>
              </p>

              <div className="btn_wrapper">
                <a className="btn" href={`tel:${phoneNumberTel}`}>
                  Call {phoneNumberDisplay}
                </a>
              </div>
            </div>

            <div className="blog_col">
              <div className="blog_image">
                <img src={BlogImage} alt="Pro-Tech Plumbing Inc." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
