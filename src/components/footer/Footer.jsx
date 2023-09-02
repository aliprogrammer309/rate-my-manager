import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <div className="logo">
        <h4>&#169; {year} RateMyO, Inc. <br /> All Rights Reserved</h4>
      </div>
      <div className="footer-pages-container">
        <div className="footer-pages-links">
          <Link to="about">About Us</Link>
          <Link to="contactUs">Contact Us</Link>
          <Link to="privacyPolicy">Privacy Policy</Link>
        </div>
        <div className="footer-pages-links">
          <Link to="copyright">Copyright Policy</Link>
          <Link to="advice">Advice</Link>
          <Link to="communityGuidelines">Community Guidlines</Link>
        </div>
      </div>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100092343407883&sk=map"
          target="_blank"
        >
          <i className="fa fa-facebook-square" style={{ fontSize: "24px" }}></i>
        </a>
        <a
          href="https://www.instagram.com/ratemyo1/?igshid=ZGUzMzM3NWJiOQ%3D%3D"
          target="_blank"
        >
          <i className="fa fa-instagram" style={{ fontSize: "24px" }} />
        </a>
        <a href="https://twitter.com/ratemyo" target="_blank">
          <i className="fa fa-twitter-square" style={{ fontSize: "24px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
