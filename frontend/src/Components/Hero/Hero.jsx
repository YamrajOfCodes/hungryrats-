import React from 'react'
import headerImage from "../../assets/header-image.jpg"
import "./Hero.scss"
import Item from '../Item/Item'
import deliveryBoy from "../../assets/delivery-boy.png"
import clock from "../../assets/clock.png"
import menu from "../../assets/menu.png"
import servicepng from "../../assets/service.png"
import sectionpng from "../../assets/section-anna.png"
import Card from '../Card/Card'
import asset1 from "../../assets/asset 1.png"
import asset2 from "../../assets/asset 2.png"
import asset3 from "../../assets/asset 3.png"
import { Link } from 'react-router-dom'


function Hero() {
  return (
   <div className="hero">
  
  <div className="heroimage img-fluid">
    <img src={headerImage} className='img-fluid' alt="" srcset="" />
   </div>
   <div className="dialog-box">
    <h2>Great Food Deserves
     Great Delivery </h2>
     <p>Every food lover deserves  fast and Reliable delivery</p>
    <Link to={'/login'}><button className=' text-white cta'>Start Now</button></Link>
   </div>


    <div className="container " id='services'>
      <div className="row">
      <div className="col-12">
        <div className="heading">
          <h2 style={{color:'#243E63'}}>Amazing</h2>
          <div className="subheading"><h2>Services</h2></div>
        </div>
      </div>
      <div className="col-12 col-sm-4 col-lg-3 start">
        <Item image={deliveryBoy} title={'Express delivery'} subtitle={'A fast delivery services for customers who need their food quickly deliver'}/>
      </div>
      <div className="col-12 col-sm-4 col-lg-3 center">
        <Item image={clock} title={'Scheduled delivery'} subtitle={'A service that allows customer to schedule their food delivery in advance'}/>
      </div>
      <div className="col-12 col-sm-4 col-lg-3 end">
      <Item image={menu} title={'Updated menu'} subtitle={'In the order of food delivery we update menu daily avoid repeatable items'}/>
      </div>
      </div>
    </div>


    <div className="container-fluid" id='about'>
      <div className="row">
        <div className="col-12 col-sm-5 left-part">

         <p className='title'>A reputed brand</p>
         <div className="heading">
          <h2 style={{color:'#243E63'}}>Why</h2>
          <div className="subheading"><h2>Choose us?</h2></div>
        </div>

        <p className='desc' style={{color:'#4D4D4D'}}>Hungryrats is the india's first ever food delivery service who deliver foods items in affordable price
        hungryrats is not only for those peoples who are regulary ordered food but also for those peoples who lives outside the home,
        <strong> because hungryrats provides a variety of taste that they need most</strong>
         </p>

    <Link to={"/login"}><button>Order now</button></Link>
  

        </div>
        <div className="col-12 col-sm-5 right-part">
          <img src={sectionpng} alt="" srcset="" />
        </div>
      </div>
    </div>


    <div className="container-fluid" id='work'>
     <div className="row">
     <div className="col-12">
      <div className="heading">
          <h2 style={{color:'#243E63'}}>Work with</h2>
          <div className="subheading"><h2>Hungryrats</h2></div>
        </div>
      </div>
      <div className="col-12" data-aos="fade-left">
        <hr />
        <Card image={asset1} title={'As a Rider'} subtitle={'earn money by delivering foods from restraunts,All you need a bike or a bycycle'} btntext={'Ride With Us'}/>
      </div>
      <div className="col-12" data-aos="fade-right">
        <hr />
      <Card image={asset2} title={'As a partner'} subtitle={'Hungryrats helps restraunts and mess to growth online ordering, we asure to growth in 70 days to join '} btntext={'Partner With Us'}/>

      </div>
      <div className="col-12" data-aos="fade-left">
     <hr />
      <Card image={asset3} title={"As a colleague"} subtitle={'Be a part of a team  that’s building a top-notch delivery service in india'} btntext={'Work With Us'}/>
      </div>
      <div className="col-12 bg-white"style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Link to="/food" ><h2 className='explore'>Guest? Explore →</h2></Link>

      </div>
     </div>
    </div>
   </div>
  )
}

export default Hero