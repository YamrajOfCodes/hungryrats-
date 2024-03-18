import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
import "./Food.scss"
import { useParams } from 'react-router-dom'
import Item from '../../Components/FoodItem/Item'

function Food() {
    const {all_product} =useContext(Shopcontext)
 
    
  return (
    <div className='food'>
     <div className="foodItem">
        {
        all_product.map((element,index)=>{
            return <Item  image={element.image} id={element.id} name={element.name} price={element.price} messname={element.messname}/>
        })
     }
     </div>
    </div>
  )
}

export default Food