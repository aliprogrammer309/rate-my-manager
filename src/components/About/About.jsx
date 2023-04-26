import React from "react";
import "./about.css";
import first_img from "../../assets/manageratings.svg";
import second_img from "../../assets/anonymousrating.svg";
import third_img from "../../assets/likedislikerating.svg";

const About = () => {
  return (
    <section className="about-section">
      {/* <div className="about-upper">
        <h1 className="about-upper-text">Join Our Family</h1>
        <p className="about-upper-text">
          Love Our Work? Let's Make it Official.
        </p>
      </div> */}
      <div className="about-lower">
        <div className="persons-container">
          <div className="person-card">
            <div className="person-image">
              <img src={first_img} alt="image1" />
            </div>
            <div className="person-name">
              <h2>Edit, resubmit, delete your ratings</h2>
            </div>
          </div>
          <div className="person-card">
            <div className="person-image">
              <img src={second_img} alt="image2" />
            </div>
            <div className="person-name">
              <h2>Anonymity of raters is always our priority</h2>
            </div>
          </div>
          <div className="person-card">
            <div className="person-image">
              <img src={third_img} alt="image3" />
            </div>
            <div className="person-name">
              <h2>Agree or disagree with rating</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
