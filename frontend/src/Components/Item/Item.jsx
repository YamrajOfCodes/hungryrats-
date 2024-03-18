import React from 'react'
import "./Item.scss"

function Item({image,title,subtitle,color}) {
  return (
    <div className='item  shadow' style={{backgroundColor:color}}>
        <div className="icon-circle">
        <img src={image} className='text-center' alt="" srcset="" />
        </div>
        <h3 className='title text-center'>{title}</h3>
        <p className='subtitle'>{subtitle}</p>
    </div>
  )
}

export default Item