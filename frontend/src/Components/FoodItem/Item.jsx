import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.scss"
import { Shopcontext } from '../../Context/Shopcontext'
import  { useContext } from 'react'
import { toast } from 'react-toastify';

function Item({image,id,name,price,messname}) {

 const user=localStorage.getItem('login-auth')

  function handleclick(){
    toast.info("Login to deliver")
  }

  const {addtocart}=useContext(Shopcontext);
  return (
    <div className='items'>
        <div className="itemimage">
       <img src={image} alt="foodimage" srcset="" />
        </div>
        <p className='heading fw-bold'>{name}</p>
        <div className="desc d-flex justify-content-between">
          <p>{messname}</p>
          <p className='pricing'>Rs {price}</p>
        </div>
      {
        user ?  <Link to={`/product/${id}`}> <button className='bg-primary' style={{border:'none', marginBottom:'8px'}}>View Product</button></Link>
        :
        <Link> <button  onClick={handleclick} className='bg-primary' style={{border:'none', marginBottom:'8px'}}>View Product</button></Link>
      }
    </div>
  )
}

export default Item