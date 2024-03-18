import React from 'react'
import {Link} from "react-router-dom"
import cartIcon from "../../assets/Product_Cart.svg"
import productlistIcon from "../../assets/Product_list_icon.svg"
import "./Sidebar.scss"

function Sidebar() {
  return (
    <div className='sidebar'>
   <Link  style={{textDecoration:'none'}} to="/addproduct">
    <div className="sidebar-item">
        <img src={cartIcon} alt="carticon" srcset="" />
        <p>Add Product</p>
    </div>
   </Link>
   <Link style={{textDecoration:'none'}}  to="/listproduct">
    <div className="sidebar-item">
        <img src={productlistIcon} alt="listproduct" srcset="" />
        <p>product List</p>
    </div>
   </Link>
    </div>
  )
}

export default Sidebar