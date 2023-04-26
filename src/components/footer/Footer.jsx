import React from 'react'
import './footer.css'

const Footer = () => {
    const today = new Date();
    var year = today.getFullYear();
  return (
    <footer>
        <div className='logo'><h5>&#169; {year} RateMyO, Inc. All Rights Reserved</h5></div>
        <div className="social-icons">
        <i className="fa fa-facebook-square" style={{fontSize:"24px"}}></i>
        <i className="fa fa-instagram" style={{fontSize:"24px"}}></i>
        <i className="fa fa-twitter-square" style={{fontSize:"24px"}}></i>
        </div> 
    </footer>
  )
}

export default Footer;