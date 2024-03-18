import React, {useState } from 'react'
import './Navbar.scss'
import { useContext } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import cartIcon from "../../assets/cart_icon.png"
import {Shopcontext} from "../../Context/Shopcontext"

function Navbar() {

const [nev,setnav]=useState('home')
const {gettotalCartitems}=useContext(Shopcontext);


const color={
  background:'red'
}

  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid ">
      <Link to={'/'} class="navbar-brand text-white" href="#">Hungryrats</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <FaBars class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto  ">
          <li className="nav-link"  >
          <Link  onClick={()=>{setnav('home')}}  className={nev==='home'?'nav-link text-white cta-login':'nav-link text-white'}  to={'/'}>Home</Link>
          </li>
          <li class="nav-item">
            <a  className={nev==='service'?'nav-link text-white cta-login':'nav-link text-white'}  href="#services">Services</a>
          </li>
          <li class="nav-item">
          <Link  onClick={()=>{setnav('contact')}}  className={nev==='contact'?'nav-link text-white cta-login':'nav-link text-white'}  to={'/contact'}>Contact us</Link>
          </li>
           <li class="nav-item cart  ">
          {
            localStorage.getItem('login-auth') ? <Link    onClick={()=>{setnav('logout'),localStorage.removeItem('login-auth'),window.location.replace("/login")}} className={nev==='logout'?'nav-link text-white cta-login':'nav-link text-white'}>Logout</Link>
            :
            <Link   to={"/login"}  onClick={()=>{setnav('login')}} className={nev==='login'?'nav-link text-white cta-login':'nav-link text-white'}>Login</Link>
          }
          </li>
{/*         
         {
          localStorage.getItem('login-auth') ?  <li class="nav-item ">
          <Link onClick={()=>{setnav('cart')}}   className='nav-link text-white ' to={'/cart'}>
           <img src={cartIcon}   alt="" srcset="" />
          </Link>
         </li>
         :
         <></>
         
        }
        {
          localStorage.getItem('login-auth') ? <li class="nav-item cart  ">
        
          <p  className='quantity' style={{backgroundColor:'red', color:'white'}}>{gettotalCartitems()}</p>
            
            </li>
            :
            <></>
        } */}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar