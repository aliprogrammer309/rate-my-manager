import React from "react";
import "./personReview.css";

const ProfessorPersonReview = () => {
  return (
    <div className="rating-card">
      <div className="left">
        <div className="rate">
          <div>
            <p>Quality</p>
            <h1>5.0</h1>
          </div>
        </div>
        <div className="rate">
          <div>
            <p>Difficulty</p>
            <h1>4.0</h1>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-header">
          <div className="cell">
            <h4>NML110</h4>

            <span className="spacing">
              <h4 style={{ background: "yellow", padding: "5px" }}>AWESOME</h4>
            </span>
          </div>
          <div>
            <span>
              <h4>Feb 11th, 2022</h4>
            </span>
          </div>
        </div>
        <div className="right-middle">
          <span>
            For Credit: <b>Yes</b>
          </span>
          <span className="spacing">
            Attendance: <b>Mandatory</b>
          </span>
          <span className="spacing">
            Would Take Again: <b>Yes</b>
          </span>
          <span className="spacing">
            Grade: <b>A+</b>
          </span>
          <span className="spacing">
            Textbook: <b>Yes</b>
          </span>
        </div>
        <div className="right-decription">
          <p>
            Prof. Ali is awesome! He is so knowledgeable and patient, and he
            really cares about his students. If you're thinking of learning
            Arabic, you could not find a better prof! If you work hard you can
            do really well in his course. There is a big time commitment both in
            and outside of class, but it's worth it. 10/10 would recommend!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorPersonReview;
