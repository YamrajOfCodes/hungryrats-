import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Item from '../../Components/FoodItem/Item';
import Productdisplay from '../../Components/Productdisplay/Productdisplay';

function Product() {

  const {all_product} =useContext(Shopcontext);
  const {productId}=useParams();

  const product=all_product.find((element)=> element.id==productId);
  // console.log(product);
  return (
    <div>
     <Productdisplay product={product}/>
    </div>
  )
}

export default Product