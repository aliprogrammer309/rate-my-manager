import React from "react";
import img1 from "../../assets/unique.jpg";
// import img2 from "../../assets/anonymous.jpg";
import "./StaticSection.css";

const StaticSection = () => {
  return (
    <>
      <div className="static-section-container">
        <div className="static-section-text">
          {/* <b> */}
          <p>
            What makes RateMyo Unique? <br />
            <br />
            We genuinely believe Employees "Don’t Quit Their Job; They Quit
            Their Boss!" <br />
            <br />
            Quitting a job is costly for you, your co-workers, and the company.{" "}
            <br />
            <br />
            We aim to provide you with insights into a company, its managers,
            departments, and possible co-workers before you apply.{" "}
          </p>
          {/* </b> */}
        </div>
        <div className="static-section-img">
          <img src={img1} alt="" />
        </div>
      </div>
      {/* <div className="static-section-container">
        <div className="static-section-img2">
          <img src={img2} alt="" />
        </div>
        <div className="static-section-text">
          <p>
            At RateMyo you have ultimate anonymity we do not require you to
            provide any of the following:
            <ul>
              <li>login</li>
              <li>name</li>
              <li>email</li>
              <li>phone</li>
              <li>number</li>
              <li>social media</li>
            </ul>
          </p>
        </div>
      </div> */}
    </>
  );
};

export default StaticSection;
