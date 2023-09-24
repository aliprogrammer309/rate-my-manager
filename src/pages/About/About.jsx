import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar showLinks={true} />
      <div className="about-container">
        <h1 style={{ textAlign: "center" }}>Who We Are</h1>
        <p>
          We understand that many individuals have fallen victim to poor job
          offers and a frustrating corporate culture due to ignorance. To avoid
          this, we recognise the importance of offering a space for employees
          and the general public to share their honest opinions about companies
          without fear or bias. <br />
        </p>
        <p>
          <b>Rate My O</b> is an updated job rating and review platform that
          enables individuals from all industries to anonymously rate their
          manager, Co-worker,and company.
          <br />
        </p>
        <p>
          We believe that providing workers with a platform to express their
          opinions about their managers and employers is a crucial step in
          ensuring workplace safety and general worker satisfaction.
          <br />
        </p>
        <p style={{ backgroundColor: "yellow" }}>
          <em>
            This platform is an upgrade to all current job rating platforms. All
            reviews listed on our platform are transmitted anonymously.
          </em>
          <br />
        </p>
      </div>
    </>
  );
};

export default About;
