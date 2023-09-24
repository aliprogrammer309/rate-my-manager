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
            <b>
              This platform is an upgrade to all current job rating platforms.
              All reviews listed on our platform are transmitted anonymously.
            </b>
          </em>
        </p>
        <br />
        <h2 style={{ textAlign: "center" }}>What We Do</h2>
        <p>
          We provide a global platform for employees and individuals to write
          reviews about their manager, Co-worker,and company they have dealt
          with.
        </p>
        <br />
        <h2 style={{ textAlign: "center" }}>Our Values</h2>
        <p>
          <b>Transparency: </b>We believe in honest and fair expression of
          opinion without fear or bias.
        </p>
        <p>
          <b>Empowerment: </b>We empower workers to share their own voices and
          experiences to improve the overall work culture.
        </p>
        <p>
          <b>Safety: </b>We prioritize the safety and well-being of employees in
          the workplace by providing a safe space to voice their opinions.
        </p>
        <p>
          <b>Innovation: </b>We constantly strive for innovation in order to
          upgrade the current job rating platform and deliver the best
          experience for our users.
        </p>
        <p>
          <b>Integrity: </b>We operate with integrity, our proprietary security
          features ensure that all reviews on our platform are transmitted
          anonymously, without the risk of retribution.
        </p>{" "}
      </div>
    </>
  );
};

export default About;
