import React, { useContext } from 'react'
import './productdisplay.css'
import star from "../../assets/star_icon.png"
import star2 from "../../assets/star_dull_icon.png"
import veg from "../../assets/veg.png"
import { Shopcontext } from '../../Context/Shopcontext'

function Productdisplay({product}) {

 const {addtocart}=useContext(Shopcontext);
 const {gettotalCartitems}=useContext(Shopcontext);
 console.log(product);



  return (
    <div className='container-fluid product-container'>
  <div className="row">
    <div className="col-sm-5 first">
    <img  style={{borderRadius:'8px'}} src={product.image} alt="" srcset="" />
    </div>
    <div className="col-sm-6 second">
      <div className="wrap">
      <h2>{product.name}</h2>
      <p>{product.messname}</p>
      <div className="star-icons">
        <img src={star} alt="" srcset="" />
        <img src={star} alt="" srcset="" />
        <img src={star} alt="" srcset="" />
        <img src={star2} alt="" srcset="" />
      </div>
      <div className="desc">{product.desc}</div>
         <div className="veg">
          <img src={veg} alt="" srcset="" />
          <p className='mb-0'>Veg</p>
         </div>
         <div className="price">
         <div className="start">
         <h4>Rs:</h4>
          <h4>50</h4>
         </div>
         </div>
         <button  onClick={()=>{addtocart(product.id)}}>Place Order</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Productdisplay