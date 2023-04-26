import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'><a href="/"><h2>RateMyO</h2></a></div>
        <div className="social-icons">
        <i className="fa fa-facebook-square" style={{fontSize:"24px"}}></i>
        <i className="fa fa-instagram" style={{fontSize:"24px"}}></i>
        <i className="fa fa-twitter-square" style={{fontSize:"24px"}}></i>
        </div> 
    </nav>
  )
}

export default Navbar