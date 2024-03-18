import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'

function Cartitem() {

  const {all_product,cartItems,removefromcart}=useContext(Shopcontext)

  return (
    <div>
      {
        all_product.map((element,index)=>{
          if(cartItems[element.id]>0){
            return <div id='index'>
              <img src={element.image} alt="" />
              <p>{cartItems[element.id]}</p>
              <p onClick={()=>{removefromcart(element.id)}}>Remove item</p>
            </div>
          }
        })
      }
    </div>
  )
}

export default Cartitem