import React from 'react'
import footerImage from "../../assets/Footer-image.png"
import "./Footer.scss"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footer container-fluid border'>

 <div className="container">
<div className="row">
<div className="col-4 text-white">
  <p className='fw-bold'>Social</p>
 <a href="#"> <p>Facebook</p></a>
  <a href="https://www.instagram.com/officialhungryrats/" target='_black'><p>Instagram</p></a>
  <a href="https://www.linkedin.com/in/kundan-patil-a22206293/" target='_black'><p>Linkdin</p></a>
 
</div>
  <div className="col-4 text-white">
    <p className='fw-bold'>Quick Links</p>
    <Link to="/"><p>Home</p></Link>
    <Link to="/"><p>Services</p></Link>
    <Link to="/contact"><p>Contact</p></Link>
  </div>
  <div className="col-4 text-white">
    <p className='fw-bold'>Get help</p>
    <Link to="/contact"><p>partner with us</p></Link>
    <Link to="/login"><p>login to deliver</p></Link>
    
  </div>
</div>
 </div>

  <div className="col-12 text-white text-center py-2"><p>@2024 hungryrats-all rights reserved</p></div>
    </div>
  )
}

export default Footer