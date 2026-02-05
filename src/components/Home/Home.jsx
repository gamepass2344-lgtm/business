import React from "react";
import "./Home.css";
import BannerImage from "../../assets/banner/banner-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faShieldHalved, faChartArea } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Keep mobile icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />;
  const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />;
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />;

  return (
    <>
      <section id="home">
        <div className="banner_image"></div>

        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">
                The <span>Family Plumbers</span>
              </h3>

             <p className="tagline">
  In business for over 25+ years perfectionists that get the job done right.
</p>

              {/* ✅ Back to the original wrapper so the button style stays the same */}
              <div className="btn_wrapper">
                <a className="btn" href="#contact">
                  Get Started
                </a>
              </div>
            </div>

            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_image" />
              </div>

              {/* Keeping mobile style floating boxes */}
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Reliable Service</h4>
              </div>

              <div className="banner_style_1 banner_style_2">
                {faShieldIcon}
                <h4>Licensed & Insured</h4>
              </div>

              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>25+ Years Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
